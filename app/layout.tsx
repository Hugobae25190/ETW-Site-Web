import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
});

export const metadata: Metadata = {
  title: "Escape The Weakness - Transform in 90 Days",
  description: "Premium masculine coaching. Reclaim your testosterone, energy, and life.",
  icons: {
    icon: [
      { url: '/favicon-16x16.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon.webp', sizes: 'any', type: 'image/webp' }
    ],
    apple: [
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${permanentMarker.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
