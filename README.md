# Kottayam Voting Pledge - RSVP System

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Firebase](https://img.shields.io/badge/Firebase-Cloud-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com)

## 📋 Overview

A modern voting pledge platform developed for the Kottayam District Administration. Citizens can pledge to vote and receive personalized digital certificates automatically generated using Firebase Cloud Functions.

## ✨ Features

- 🗳️ **Pledge Form**: Simple, user-friendly form for collecting voting pledges
- 🎓 **Auto Certificate Generation**: Certificates automatically generated as PNG images
- 📥 **Download & Share**: Download certificates or share on social media
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- ☁️ **Cloud-Powered**: Firebase Functions for serverless certificate generation
- 🔒 **Secure Storage**: Firebase Firestore and Storage for data persistence

## 🚀 Tech Stack

- **Frontend**: Next.js 16.0.0 with App Router
- **UI**: Tailwind CSS + shadcn/ui components
- **Backend**: Firebase Cloud Functions (Node.js 22)
- **Database**: Firebase Firestore
- **Storage**: Firebase Cloud Storage
- **Image Processing**: Sharp library for PNG generation
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Basil-World/kottayam-voting-RSVP.git
cd kottayam-voting-RSVP
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up Firebase:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Install Functions dependencies
cd functions
npm install
cd ..
```

4. Configure environment variables:

```bash
cp .env.local.example .env.local
# Edit .env.local with your Firebase credentials
```

## 🔧 Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):

```bash
npm install -g vercel
```

2. **Deploy via Vercel Dashboard**:

   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Configure environment variables (see below)
   - Deploy!

3. **Or deploy via CLI**:

```bash
vercel
```

### Environment Variables for Vercel

Add these in your Vercel project settings:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Deploy Firebase Functions

```bash
firebase deploy --only functions
```

### Deploy Firebase Storage Rules

```bash
firebase deploy --only storage
```

## 🏗️ Project Structure

```
kottayam-voting-RSVP/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # React components
│   ├── pledge-form.tsx     # Main form component
│   ├── success-view.tsx    # Certificate display
│   └── ui/                 # shadcn/ui components
├── functions/              # Firebase Cloud Functions
│   └── src/
│       └── index.ts        # Certificate generator
├── lib/                    # Utilities
├── public/                 # Static assets
├── firebase.ts             # Firebase client config
├── firebase.json           # Firebase project config
├── storage.rules           # Storage security rules
└── vercel.json            # Vercel config
```

## 🎨 How It Works

1. **User Submits Pledge**: Fills form with name, college, and phone number
2. **Data Saved**: Pledge stored in Firestore
3. **Cloud Function Triggered**: `generateCertificate` function activates
4. **Certificate Created**: SVG template rendered with user details
5. **PNG Generated**: Sharp converts SVG to high-quality PNG
6. **Upload to Storage**: Certificate saved to Firebase Storage
7. **User Gets Certificate**: Frontend displays certificate with download/share options

## 🔐 Security

- Firebase Storage rules allow public read for certificates
- Firestore has proper security rules (configure in Firebase Console)
- Environment variables keep sensitive data secure
- CORS properly configured via Cloud Functions

## 📝 License

This project is developed for Kottayam District Administration.

## 👥 Contributors

- **Muhammed Basil** - Initial development

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for Kottayam District Administration**
