import type { Metadata } from "next"
import type { Viewport } from "next"

import "@/styles/global.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  themeColor: "#222831"
}

export const metadata: Metadata = {
    title: 'Aang Solihin | Dev Profile',
    authors: [{ name: "Aang Solihin", url: "https://angslhn.xyz" }],
    creator: "Aang Solihin",
    keywords: ["Aang Solihin", "Frontend Developer", "Backend Developer", "Fullstack Developer", "Informatics Engineering", "AI", "Machine Learning", "ReactJS", "NextJS", "Python", "Tailwindcss", "Web Developer", "Student"],
    description: "On this portfolio site Aang Solihin displays several things and information about himself. Be it a brief description of himself, his expertise, his experience, and his contact information.",
    generator: "Next.js",
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: "https://angslhn.xyz",
    },
    icons: {
        icon: [
          { url: '/favicon.svg', type: 'image/svg+xml' },
          { url: '/favicon.ico', sizes: '32x32' },
        ],
        shortcut: '/favicon.ico',
        apple: [
          { url: '/apple-favicon.png', sizes: '180x180' },
        ]
    },
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}
