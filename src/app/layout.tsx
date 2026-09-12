import type { Metadata } from 'next';
import React from 'react';
import '../../style.css';

export const metadata: Metadata = {
  title: 'Enable My Growth Tech — Decision Intelligence, Digital Platforms & Governance Systems',
  description: 'Enable My Growth Tech develops AI-enabled platforms, decision systems, and custom digital infrastructure that help organizations examine evidence, govern complexity, and strengthen capability.',
  metadataBase: new URL('https://enablemygrowth.com'),
  alternates: {
    canonical: '/tech.html',
  },
  openGraph: {
    title: 'Enable My Growth Tech — Where expertise becomes technology.',
    description: 'AI-enabled platforms, decision systems, and custom digital tools built around organizational capability and human judgment.',
    url: 'https://enablemygrowth.com/tech.html',
    images: ['/emg-mobius-hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-128.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="tech-page-body">
        {children}
      </body>
    </html>
  );
}
