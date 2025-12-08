# IIIT Kottayam Voting Pledge Certificate System

A professional web application for collecting voting pledges and automatically generating personalized certificates with luxurious maroon and gold design.

## Features

- **Pledge Form**: Collect voter information including name, email, phone, gender, and department
- **Automatic Certificate Generation**: Firebase Cloud Functions automatically generate certificates upon pledge submission
- **Professional Design**: Luxurious maroon background with golden borders and text
- **Logo Integration**: SVEEP and Election Commission logos with watermark
- **Firebase Backend**: Firestore database, Cloud Storage for certificates, Cloud Functions for automation
- **Modern UI**: Built with Next.js 16, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16.0.7, React, TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore, Cloud Storage, Cloud Functions)
- **Certificate Generation**: Sharp (image processing), SVG to PNG conversion
- **UI Components**: shadcn/ui components
- **Package Manager**: pnpm

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── pledge-form.tsx   # Main pledge form
│   ├── success-view.tsx  # Success message with certificate
│   ├── theme-provider.tsx # Theme context
│   └── ui/               # UI components (button, input, select, label)
├── functions/            # Firebase Cloud Functions
│   └── src/
│       ├── index.ts      # Certificate generation logic
│       ├── sveep-logo.png
│       └── ec-logo.png
├── lib/                  # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   ├── sveep-logo.png
│   ├── ec-logo.png
│   └── icons/
├── firebase.ts           # Firebase configuration
├── firestore.rules       # Firestore security rules
├── storage.rules         # Storage security rules
└── firebase.json         # Firebase project config

```

## Setup Instructions

### Prerequisites

- Node.js 18+ and pnpm installed
- Firebase account with Blaze plan (for Cloud Functions)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adi3433/KOTTAYAM-GOVT.git
   cd KOTTAYAM-GOVT
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   cd functions && pnpm install && cd ..
   ```

3. **Configure Firebase**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database
   - Enable Cloud Storage
   - Enable Cloud Functions
   - Update `firebase.ts` with your project credentials

4. **Set up environment variables**
   Create `.env.local` in the root directory:
   ```
   NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false
   ```

5. **Deploy Firebase resources**
   ```bash
   firebase login
   firebase use --add
   firebase deploy --only firestore:rules
   firebase deploy --only storage:rules
   firebase deploy --only functions
   ```

6. **Run development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Firebase Configuration

### Firestore Collections

- `pledges`: Stores pledge submissions with fields:
  - `fullName`: string
  - `email`: string
  - `phone`: string
  - `gender`: string
  - `department`: string
  - `certificateUrl`: string (auto-generated)
  - `certificateGeneratedAt`: timestamp
  - `createdAt`: timestamp

### Cloud Functions

- `generateCertificate`: Triggered on new pledge creation
  - Generates certificate with maroon/gold design
  - Composites SVEEP and EC logos
  - Adds watermark
  - Uploads to Cloud Storage
  - Updates pledge document with certificate URL

- `downloadCertificate`: HTTPS endpoint for certificate download
  - URL: `https://[region]-[project-id].cloudfunctions.net/downloadCertificate?id=[pledgeId]`

## Certificate Design

- **Dimensions**: 1200x850px
- **Background**: Maroon gradient (#8B1A1A → #6B1616)
- **Borders**: Multiple golden borders with gradient effects
- **Fonts**: Georgia serif for elegance
- **Logos**: SVEEP (top left), Election Commission (top right)
- **Watermark**: Subtle SVEEP logo in center (92% transparent)
- **Footer**: Issue date and District Collector information

## Development

### Building Functions
```bash
cd functions
npm run build
```

### Deploying
```bash
firebase deploy --only functions
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

## License

This project is developed for IIIT Kottayam in association with SVEEP (Systematic Voters' Education and Electoral Participation).

## Contact

For issues or questions, contact the District Election Office, Kottayam.
