import {onDocumentCreated} from "firebase-functions/v2/firestore";
import {onRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import sharp from "sharp";
import * as logger from "firebase-functions/logger";

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();

// Trigger when a new pledge is added
export const generateCertificate = onDocumentCreated(
  "pledges/{pledgeId}",
  async (event) => {
    const snap = event.data;
    if (!snap) {
      logger.warn("No data associated with the event");
      return;
    }

    const data = snap.data();
    const pledgeId = event.params.pledgeId;
    const name = data.fullName || "Participant";
    const college = data.college || "";

    logger.info(`🎓 Generating certificate for ${name}`);

    try {
      // Create a base certificate background
      const width = 1200;
      const height = 800;

      // Create SVG certificate
      const svgCertificate = `
        <svg width="${width}" height="${height}" 
             xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#ffffff"/>
          <rect x="40" y="40" width="${width - 80}" 
                height="${height - 80}" 
                fill="none" stroke="#2563eb" stroke-width="8"/>
          <rect x="50" y="50" width="${width - 100}" 
                height="${height - 100}" 
                fill="none" stroke="#93c5fd" stroke-width="2"/>
          <text x="${width / 2}" y="120" 
                font-family="Georgia, serif" font-size="48" 
                font-weight="bold" 
                fill="#1e40af" text-anchor="middle">
            VOTING PLEDGE CERTIFICATE
          </text>
          <text x="${width / 2}" y="170" 
                font-family="Arial, sans-serif" font-size="24" 
                fill="#64748b" text-anchor="middle">
            Kottayam District Administration
          </text>
          <text x="${width / 2}" y="280" 
                font-family="Arial, sans-serif" font-size="28" 
                fill="#334155" text-anchor="middle">
            This certifies that
          </text>
          <text x="${width / 2}" y="360" 
                font-family="Georgia, serif" font-size="56" 
                font-weight="bold" 
                fill="#0f172a" text-anchor="middle">
            ${name}
          </text>
          <text x="${width / 2}" y="420" 
                font-family="Arial, sans-serif" font-size="28" 
                fill="#475569" text-anchor="middle">
            ${college}
          </text>
          <text x="${width / 2}" y="520" 
                font-family="Arial, sans-serif" font-size="24" 
                fill="#334155" text-anchor="middle">
            has pledged to exercise their right to vote
          </text>
          <text x="${width / 2}" y="560" 
                font-family="Arial, sans-serif" font-size="24" 
                fill="#334155" text-anchor="middle">
            and be part of the democratic process
          </text>
          <text x="${width / 2}" y="680" 
                font-family="Arial, sans-serif" font-size="20" 
                fill="#64748b" text-anchor="middle">
            Date: ${new Date().toLocaleDateString("en-IN",
    {year: "numeric", month: "long", day: "numeric"})}
          </text>
          <text x="${width / 2}" y="740" 
                font-family="Arial, sans-serif" font-size="32" 
                text-anchor="middle">
            🇮🇳
          </text>
        </svg>
      `;

      // Convert SVG to PNG
      const finalImage = await sharp(Buffer.from(svgCertificate))
        .png()
        .toBuffer();

      // Upload to Storage
      const bucket = storage.bucket();
      const filePath = `certificates/${pledgeId}.png`;
      const file = bucket.file(filePath);

      // Save the file with metadata
      await file.save(finalImage, {
        contentType: "image/png",
        metadata: {
          cacheControl: "public, max-age=31536000",
          metadata: {
            pledgeId: pledgeId,
            name: name,
            college: college,
          },
        },
      });

      // Make the file publicly accessible
      await file.makePublic();

      // Get the public URL
      const bucketName = bucket.name;
      const publicUrl =
        `https://storage.googleapis.com/${bucketName}/${filePath}`;

      logger.info(`📦 File uploaded to: ${filePath}`);
      logger.info(`🔗 Public URL: ${publicUrl}`);

      // Update Firestore document
      await db.collection("pledges").doc(pledgeId).update({
        certificateUrl: publicUrl,
        certificateGeneratedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      logger.info(`✅ Certificate generated: ${publicUrl}`);
      return {success: true, url: publicUrl};
    } catch (error) {
      logger.error("❌ Error generating certificate:", error);
      throw error;
    }
  });

// HTTP function to serve certificates with CORS headers
export const downloadCertificate = onRequest(
  {cors: true}, // Enable CORS for all origins
  async (req, res) => {
    try {
      // Get certificate ID from query parameter
      const certificateId = req.query.id as string;

      if (!certificateId) {
        res.status(400).send("Missing certificate ID");
        return;
      }

      logger.info(`📥 Download request for certificate: ${certificateId}`);

      // Get the file from Storage
      const bucket = storage.bucket();
      const filePath = `certificates/${certificateId}.png`;
      const file = bucket.file(filePath);

      // Check if file exists
      const [exists] = await file.exists();
      if (!exists) {
        logger.warn(`❌ Certificate not found: ${certificateId}`);
        res.status(404).send("Certificate not found");
        return;
      }

      // Get the file data
      const [fileBuffer] = await file.download();

      // Set response headers
      res.set("Content-Type", "image/png");
      res.set("Content-Disposition",
        `attachment; filename="${certificateId}.png"`);
      res.set("Cache-Control", "public, max-age=31536000");

      // Send the file
      res.send(fileBuffer);
      logger.info(`✅ Certificate downloaded: ${certificateId}`);
    } catch (error) {
      logger.error("❌ Error downloading certificate:", error);
      res.status(500).send("Error downloading certificate");
    }
  });
