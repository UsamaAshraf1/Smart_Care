import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // Bold
  variable: "--font-montserrat",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // Regular
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Smartcare Polyclinic Dubai | Premier Healthcare Services",
    template: "%s | Smartcare Polyclinic Dubai",
  },
  description:
    "Leading healthcare provider in Dubai offering specialized medical services, expert doctors, and advanced treatments. Book appointments online for cardiology, neurology, pediatrics and more.",
  keywords:
    "hospital Dubai, medical center Dubai, healthcare Dubai, doctors in Dubai, specialist clinic Dubai, cardiology Dubai, neurology Dubai, pediatrics Dubai, appointment booking Dubai",
  authors: [{ name: "Smartcare Polyclinic" }],
  creator: "Smartcare Polyclinic",
  publisher: "Smartcare Polyclinic",
  robots: "index, follow",
  alternates: {
    canonical: "https://smartcarepolyclinic.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartcarepolyclinic.com",
    title: "Smartcare Polyclinic Dubai | Premier Healthcare Services",
    description:
      "Leading healthcare provider in Dubai offering specialized medical services, expert doctors, and advanced treatments.",
    siteName: "Smartcare Polyclinic Dubai",
    images: [
      {
        url: "https://smartcarepolyclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smartcare Polyclinic Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartcare Polyclinic Dubai | Premier Healthcare Services",
    description:
      "Leading healthcare provider in Dubai offering specialized medical services, expert doctors, and advanced treatments.",
    images: ["https://smartcarepolyclinic.com/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  )
}



import './globals.css'