import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Hamza Zaidi - Lead Data Engineer & Lakehouse Architect',
  description: 'Premium portfolio of Muhammad Hamza Zaidi. Lead Data Engineer specializing in cloud-native data platforms, lakehouse architecture, and enterprise analytics.',
  keywords: [
    'Data Engineer',
    'Lakehouse Architect',
    'Cloud Platforms',
    'Databricks',
    'Snowflake',
    'AWS',
    'Azure',
    'Data Architecture',
    'Analytics',
  ],
  authors: [{ name: 'Muhammad Hamza Zaidi' }],
  creator: 'Muhammad Hamza Zaidi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hamzazaidi.dev',
    title: 'Muhammad Hamza Zaidi - Lead Data Engineer',
    description: 'Premium portfolio showcasing expertise in cloud-native data platforms and enterprise analytics.',
    images: [
      {
        url: 'https://hamzazaidi.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Hamza Zaidi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hamza Zaidi - Lead Data Engineer',
    description: 'Premium portfolio showcasing expertise in data architecture and cloud platforms.',
    creator: '@hamzazaidi',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0f1419" />
      </head>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <div className="backdrop-gradient" />
        {children}
      </body>
    </html>
  )
}
