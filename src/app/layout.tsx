import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

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
    google: 'google-site-verification=1kKxVKBfqiZhz93r3E-8qt8i-svjrPNVf-c-zts-dFc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 Test de Perfil IT. Hecho con ❤️ por <a href="https://www.instagram.com/fabri.code/">fabricastro</a>.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
