import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import { AccessibilityProvider } from '@/lib/accessibility-context'
import AccessibilityPanel from '@/components/accessibility-panel'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'SVEEP Kottayam - Voter Pledge Portal | Election Commission of India',
    template: '%s | SVEEP Kottayam',
  },
  description: 'Official voter pledge portal for SVEEP Kottayam District. Take the voter pledge, strengthen democracy, and receive your official certificate from the Election Commission of India.',
  keywords: [
    'SVEEP',
    'Kottayam',
    'voter pledge',
    'election commission',
    'India',
    'voting',
    'democracy',
    'voter registration',
    'IIIT Kottayam',
    'Kerala',
    'voter education',
    'electoral participation',
  ],
  authors: [
    { name: 'SVEEP Kottayam District' },
    { name: 'Election Commission of India' },
  ],
  creator: 'Election Commission of India',
  publisher: 'SVEEP Kottayam District',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sveep-kottayam.gov.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en',
      'hi-IN': '/hi',
      'ml-IN': '/ml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sveep-kottayam.gov.in',
    siteName: 'SVEEP Kottayam',
    title: 'SVEEP Kottayam - Voter Pledge Portal',
    description: 'Take the voter pledge and strengthen democracy. Official portal of SVEEP Kottayam District, Election Commission of India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SVEEP Kottayam - Voter Pledge Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVEEP Kottayam - Voter Pledge Portal',
    description: 'Take the voter pledge and strengthen democracy. Official portal of SVEEP Kottayam District.',
    images: ['/og-image.png'],
    creator: '@ABORVS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/sveep-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/sveep-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/sveep-logo.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'government',
  classification: 'Government Website',
  referrer: 'origin-when-cross-origin',
  other: {
    'msapplication-TileColor': '#1e3a8a',
    'msapplication-config': '/browserconfig.xml',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOrganization',
  name: 'SVEEP Kottayam District',
  alternateName: 'Systematic Voters Education and Electoral Participation - Kottayam',
  url: 'https://sveep-kottayam.gov.in',
  logo: 'https://sveep-kottayam.gov.in/sveep-logo.png',
  description: 'Official voter pledge portal for SVEEP Kottayam District, Election Commission of India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'District Collectorate',
    addressLocality: 'Kottayam',
    addressRegion: 'Kerala',
    postalCode: '686002',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-481-2560123',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Malayalam'],
  },
  parentOrganization: {
    '@type': 'GovernmentOrganization',
    name: 'Election Commission of India',
    url: 'https://eci.gov.in',
  },
  sameAs: [
    'https://eci.gov.in',
    'https://nvsp.in',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://firestore.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <AccessibilityProvider>
              {children}
              <AccessibilityPanel />
            </AccessibilityProvider>
          </LanguageProvider>
        </ThemeProvider>

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
