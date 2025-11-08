# Deployment Checklist

## ✅ Completed

- [x] Code pushed to GitHub
- [x] Firebase Functions deployed
  - [x] generateCertificate function
  - [x] downloadCertificate function (with CORS)
- [x] Firebase Storage rules configured
- [x] Environment variables prepared
- [x] README updated with deployment instructions
- [x] Vercel configuration added

## 🚀 Deploy to Vercel

### Step 1: Login to Vercel

1. Go to https://vercel.com
2. Click "Login" and use your GitHub account

### Step 2: Import Repository

1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Find and import: `kottayam-voting-RSVP`

### Step 3: Configure Environment Variables

Add these in Vercel dashboard during setup:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAJWdvIz_QR_eKxZXO4OrufsEOV34KtTvU
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=kottayam-votes-2025.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=kottayam-votes-2025
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=kottayam-votes-2025.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=690059290710
NEXT_PUBLIC_FIREBASE_APP_ID=1:690059290710:web:2c4241aa7cbe30484eb3f7
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Get your production URL!

## 📋 Post-Deployment Tasks

After getting your Vercel URL (e.g., `your-app.vercel.app`):

### 1. Update Firebase Authorized Domains

- Go to [Firebase Console](https://console.firebase.google.com/project/kottayam-votes-2025/authentication/settings)
- Click "Settings" tab
- Scroll to "Authorized domains"
- Add your Vercel domain: `your-app.vercel.app`

### 2. Update CORS Configuration (Optional)

If you want to restrict CORS to specific domains, update `cors.json`:

```json
{
  "origin": ["https://your-app.vercel.app"],
  "method": ["GET", "HEAD"],
  "maxAgeSeconds": 3600
}
```

### 3. Test Production App

- [ ] Submit a test pledge
- [ ] Verify certificate generation (wait ~5 seconds)
- [ ] Test certificate download
- [ ] Test share functionality
- [ ] Check responsive design on mobile

## 🔗 Important URLs

- **GitHub Repo**: https://github.com/Basil-World/kottayam-voting-RSVP
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Firebase Console**: https://console.firebase.google.com/project/kottayam-votes-2025
- **Cloud Functions**: https://console.firebase.google.com/project/kottayam-votes-2025/functions

## 🎯 Firebase Functions (Already Deployed)

- ✅ `generateCertificate` - Creates certificates on new pledges
  - Region: asia-south1
  - Trigger: Firestore document create
- ✅ `downloadCertificate` - Serves certificates with CORS
  - Region: us-central1
  - URL: https://us-central1-kottayam-votes-2025.cloudfunctions.net/downloadCertificate
  - CORS: Enabled

## 💡 Troubleshooting

### Build fails on Vercel

- Check that all environment variables are set
- Verify pnpm lockfile is committed
- Check build logs in Vercel dashboard

### Certificates not generating

- Check Firebase Functions logs
- Verify Firestore trigger region matches
- Ensure Storage permissions are correct

### Download not working

- Verify Cloud Function is deployed
- Check CORS settings
- Test function URL directly with ?id=PLEDGE_ID

## 📞 Support

For issues, check:

1. Vercel build logs
2. Firebase Functions logs: `firebase functions:log`
3. Browser console for errors
