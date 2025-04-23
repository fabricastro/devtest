import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevTest - Test de Perfil IT",
    template: "%s | DevTest"
  },
  description: "Test de Perfil IT, Descubre qué rol en tecnología se adapta mejor a tu personalidad, habilidades e intereses",
  keywords: ["test IT", "perfil tecnológico", "carrera tecnológica", "desarrollo", "programación", "tecnología"],
  authors: [{ name: "DevTest" }],
  creator: "DevTest",
  publisher: "DevTest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://devtest-nine.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DevTest - Test de Perfil IT",
    description: "Descubre qué rol en tecnología se adapta mejor a tu personalidad, habilidades e intereses",
    url: 'https://devtest-nine.vercel.app/',
    siteName: "DevTest",
    images: [
      {
        url: '/faviconDev.svg',
        width: 1200,
        height: 630,
        alt: 'DevTest - Test de Perfil IT',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DevTest - Test de Perfil IT",
    description: "Descubre qué rol en tecnología se adapta mejor a tu personalidad, habilidades e intereses",
    images: ['faviconDev.svg'], // Add your Twitter image
    creator: '@fabricastro',
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
    icon: '/faviconDev.svg',
    apple: '/faviconDev.svg', 
  },
  verification: {
    google: 'google-site-verification=1kKxVKBfqiZhz93r3E-8qt8i-svjrPNVf-c-zts-dFc', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
