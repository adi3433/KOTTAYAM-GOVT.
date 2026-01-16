import {onDocumentCreated} from "firebase-functions/v2/firestore";
import {onRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import sharp from "sharp";
import * as path from "path";
import * as fs from "fs";

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();

// Trigger when a new pledge is added
export const generateCertificate = onDocumentCreated({
  document: "pledges/{pledgeId}",
  region: "asia-south1"
},
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const data = snap.data();
    const pledgeId = event.params.pledgeId;
    const name = data.fullName || "Participant";

    const width = 1200;
    const height = 850;

    // Load logo files from the lib directory (same as compiled code)
    const sveepLogoPath = path.join(__dirname, "sveep-logo.png");
    const ecLogoPath = path.join(__dirname, "ec-logo.png");
    
    let sveepLogoBuffer: Buffer | null = null;
    let ecLogoBuffer: Buffer | null = null;
    
    try {
      if (fs.existsSync(sveepLogoPath)) {
        sveepLogoBuffer = fs.readFileSync(sveepLogoPath);
        console.log("SVEEP logo loaded successfully");
      } else {
        console.error("SVEEP logo not found at:", sveepLogoPath);
      }
      if (fs.existsSync(ecLogoPath)) {
        ecLogoBuffer = fs.readFileSync(ecLogoPath);
        console.log("EC logo loaded successfully");
      } else {
        console.error("EC logo not found at:", ecLogoPath);
      }
    } catch (error) {
      console.error("Error loading logos:", error);
    }

    // ---------- SVG CERTIFICATE ----------
    const svgCertificate = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#FFC700" opacity="0.08"/>
        </pattern>
        <radialGradient id="bgGradient" cx="50%" cy="50%">
        <stop offset="0%" style="stop-color:#8B1A1A;stop-opacity:1"/>
        <stop offset="50%" style="stop-color:#7F1D1D;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#6B1616;stop-opacity:1"/>
        </radialGradient>
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:1"/>
        <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:1"/>
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1"/>
        <stop offset="50%" style="stop-color:#FFC700;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1"/>
        </linearGradient>
      </defs>

      <!-- Maroon background with gradient -->
      <rect width="100%" height="100%" fill="url(#bgGradient)"/>
      <rect width="100%" height="100%" fill="url(#dots)"/>

      <!-- Multiple golden borders for luxury effect -->
      <rect x="15" y="15" width="${width - 30}" height="${height - 30}" fill="none" stroke="url(#borderGradient)" stroke-width="8" rx="10"/>
      <rect x="25" y="25" width="${width - 50}" height="${height - 50}" fill="none" stroke="#D4AF37" stroke-width="3" rx="6"/>
      <rect x="32" y="32" width="${width - 64}" height="${height - 64}" fill="none" stroke="#FFD700" stroke-width="2" rx="4"/>
      <rect x="38" y="38" width="${width - 76}" height="${height - 76}" fill="none" stroke="#FFC700" stroke-width="1" rx="3"/>

      <!-- Decorative golden corners -->
      <path d="M 55 55 L 130 55 M 55 55 L 55 130" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M ${width - 55} 55 L ${width - 130} 55 M ${width - 55} 55 L ${width - 55} 130" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 55 ${height - 55} L 130 ${height - 55} M 55 ${height - 55} L 55 ${height - 130}" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M ${width - 55} ${height - 55} L ${width - 130} ${height - 55} M ${width - 55} ${height - 55} L ${width - 55} ${height - 130}" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round"/>

      <!-- Corner decorative circles -->
      <circle cx="55" cy="55" r="6" fill="#FFD700"/>
      <circle cx="${width - 55}" cy="55" r="6" fill="#FFD700"/>
      <circle cx="55" cy="${height - 55}" r="6" fill="#FFD700"/>
      <circle cx="${width - 55}" cy="${height - 55}" r="6" fill="#FFD700"/>

      <!-- Inner corner details -->
      <circle cx="55" cy="55" r="3" fill="#8B1A1A"/>
      <circle cx="${width - 55}" cy="55" r="3" fill="#8B1A1A"/>
      <circle cx="55" cy="${height - 55}" r="3" fill="#8B1A1A"/>
      <circle cx="${width - 55}" cy="${height - 55}" r="3" fill="#8B1A1A"/>

      <!-- Decorative line under title -->
      <line x1="250" y1="245" x2="${width - 250}" y2="245" stroke="#FFC700" stroke-width="3" opacity="0.6"/>

      <!-- Main Title -->
      <text x="${width / 2}" y="230" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="url(#goldGradient)" text-anchor="middle" letter-spacing="2">
        VOTING PLEDGE CERTIFICATE
      </text>

      <!-- Subtitle - SVEEP prominent -->
      <text x="${width / 2}" y="280" font-family="Georgia, serif" font-size="26" fill="#FFD700" text-anchor="middle" font-weight="bold" letter-spacing="1">
        SVEEP Kottayam District
      </text>
      <text x="${width / 2}" y="308" font-family="Georgia, serif" font-size="15" fill="#D4AF37" text-anchor="middle" font-style="italic">
        in association with Indian Institute of Information Technology Kottayam
      </text>

      <!-- Decorative divider -->
      <text x="${width / 2}" y="350" font-family="Georgia, serif" font-size="26" fill="#FFC700" text-anchor="middle">
        ◈ ◈ ◈
      </text>

      <!-- Presented to text -->
      <text x="${width / 2}" y="395" font-family="Georgia, serif" font-size="23" fill="#FEF3C7" text-anchor="middle" font-style="italic">
        This certificate is proudly presented to
      </text>

      <!-- Name with golden underline -->
      <line x1="200" y1="485" x2="${width - 200}" y2="485" stroke="#FFD700" stroke-width="3"/>
      <text x="${width / 2}" y="470" font-family="Georgia, serif" font-size="62" font-weight="bold" fill="url(#goldGradient)" text-anchor="middle" letter-spacing="1">
        ${name}
      </text>

      <!-- Description text -->
      <text x="${width / 2}" y="550" font-family="Georgia, serif" font-size="21" fill="#FEF3C7" text-anchor="middle">
        for pledging to vote and contribute to strengthening our democracy.
      </text>

      <text x="${width / 2}" y="585" font-family="Georgia, serif" font-size="21" fill="#FEF3C7" text-anchor="middle">
        Congratulations on taking this important step towards responsible citizenship!
      </text>

      <!-- Decorative separator line -->
      <line x1="150" y1="660" x2="${width - 150}" y2="660" stroke="#FFC700" stroke-width="1" stroke-dasharray="8,4" opacity="0.7"/>

      <!-- Footer Left: Issued On -->
      <text x="150" y="710" font-family="Georgia, serif" font-size="19" fill="#FBBF24" font-weight="bold">Issued On:</text>
      <text x="150" y="738" font-family="Georgia, serif" font-size="17" fill="#FEF3C7">
        ${new Date().toLocaleDateString("en-IN", {year: "numeric", month: "long", day: "numeric"})}
      </text>

      <!-- Footer Right: Collector Info -->
      <text x="${width - 150}" y="710" font-family="Georgia, serif" font-size="17" fill="#FBBF24" text-anchor="end" font-weight="600">
        Chetan Kumar Meena IAS
      </text>
      <text x="${width - 150}" y="733" font-family="Georgia, serif" font-size="16" fill="#FEF3C7" text-anchor="end">
        District Election Officer &amp;
      </text>
      <text x="${width - 150}" y="755" font-family="Georgia, serif" font-size="16" fill="#FEF3C7" text-anchor="end">
        District Collector Kottayam
      </text>

      <!-- Bottom golden line -->
      <rect x="35" y="${height - 45}" width="${width - 70}" height="4" fill="url(#goldGradient)"/>
      </svg>
    `;

    const baseCertificate = await sharp(Buffer.from(svgCertificate)).png().toBuffer();

    let finalImage = baseCertificate;

    // Composite logos and watermark
    const compositeOperations: any[] = [];

    // Add SVEEP logo (top left)
    if (sveepLogoBuffer) {
      try {
        const sveepLogo = await sharp(sveepLogoBuffer)
          .resize(180, 100, { fit: "inside" })
          .toBuffer();
        compositeOperations.push({
          input: sveepLogo,
          top: 75,
          left: 180,
        });
      } catch (error) {
        console.error("Error processing SVEEP logo:", error);
      }
    }

    // Add EC logo (top right)
    if (ecLogoBuffer) {
      try {
        const ecLogo = await sharp(ecLogoBuffer)
          .resize(180, 100, { fit: "inside" })
          .toBuffer();
        compositeOperations.push({
          input: ecLogo,
          top: 75,
          left: width - 360,
        });
      } catch (error) {
        console.error("Error processing EC logo:", error);
      }
    }

    // Add SVEEP watermark (center, subtle)
    if (sveepLogoBuffer) {
      try {
        const watermark = await sharp(sveepLogoBuffer)
          .resize(400, 300, { fit: "inside" })
          .composite([{
            input: Buffer.from([255, 255, 255, 20]),
            raw: { width: 1, height: 1, channels: 4 },
            tile: true,
            blend: "dest-in" as any,
          }])
          .toBuffer();
        compositeOperations.push({
          input: watermark,
          top: Math.floor((height - 300) / 2),
          left: Math.floor((width - 400) / 2),
          blend: "over" as any,
        });
      } catch (error) {
        console.error("Error processing watermark:", error);
      }
    }

    // Apply all composite operations
    if (compositeOperations.length > 0) {
      finalImage = await sharp(baseCertificate)
        .composite(compositeOperations)
        .png()
        .toBuffer();
    }


    const bucket = storage.bucket();
    const filePath = `certificates/${pledgeId}.png`;
    const file = bucket.file(filePath);

    await file.save(finalImage, { contentType: "image/png" });
    await file.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;

    await db.collection("pledges").doc(pledgeId).update({
      certificateUrl: publicUrl,
      certificateGeneratedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true, url: publicUrl };
  }
);

// Download certificate endpoint
export const downloadCertificate = onRequest({
  cors: true,
  region: "asia-south1"
},
  async (req, res) => {
    // Always set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const pledgeId = req.query.id as string;

    if (!pledgeId) {
      res.status(400).send("Missing pledge ID");
      return;
    }

    try {
      const bucket = storage.bucket();
      const filePath = `certificates/${pledgeId}.png`;
      const file = bucket.file(filePath);

      const [exists] = await file.exists();
      if (!exists) {
        res.status(404).send("Certificate not found");
        return;
      }

      const [fileBuffer] = await file.download();
      
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Content-Disposition", `attachment; filename=\"${pledgeId}-certificate.png\"`);
      res.send(fileBuffer);
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).send("Error downloading certificate");
    }
  }
);
