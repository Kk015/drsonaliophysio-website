import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL('https://dr-sonali-mathur-physio.netlify.app'),
  title: "Dr. Sonali Mathur | Physiotherapist in Udaipur | Advance Neuro and Physio Clinic",
  description: "Expert physiotherapy services by Dr. Sonali Mathur (BPT, MPT). Specializing in Neuro, Musculoskeletal, Sports Injuries, and Antenatal/Postnatal Care. Located in Udaipur.",
  keywords: ["Physiotherapist", "Physiotherapy in Udaipur", "Dr. Sonali Mathur", "Advance Neuro and Physio Clinic", "Back Pain", "Neck Pain", "Sports Injury", "Neuro Physiotherapy", "Antenatal Exercise", "Postnatal Exercise", "CAPPA Certified"],
  authors: [{ name: "Dr. Sonali Mathur" }],
  creator: "Kunal Mathur",
  publisher: "Advance Neuro and Physio Clinic",
  openGraph: {
    title: "Dr. Sonali Mathur | Best Physiotherapist in Udaipur",
    description: "Recover from pain and restore mobility with Dr. Sonali Mathur. Expert care for neuro, ortho, and sports conditions.",
    url: "https://dr-sonali-mathur-physio.netlify.app",
    siteName: "Advance Neuro and Physio Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // We might need to ensure this exists or use a placeholder logic
        width: 1200,
        height: 630,
        alt: "Dr. Sonali Mathur Physiotherapy Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sonali Mathur | Physiotherapist in Udaipur",
    description: "Expert physiotherapy services for a pain-free life.",
    images: ["/og-image.jpg"], // Consistency
  },
  verification: {
    google: "google-site-verification-code", // Placeholder, user can add later
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${openSans.variable} antialiased font-body bg-background text-text flex flex-col min-h-screen overflow-x-hidden`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Sonali Mathur",
              "image": "https://dr-sonali-mathur-physio.netlify.app/og-image.jpg",
              "url": "https://dr-sonali-mathur-physio.netlify.app",
              "telephone": "+918850359887",
              "medicalSpecialty": ["Physiotherapy", "Neurology", "Obstetrics"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 1-2, Near Hotel Q, Pula Bhuwana Road, New Flora Complex",
                "addressLocality": "Udaipur",
                "addressRegion": "RJ",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/drtarunmathur",
                "https://jsdl.in/DT-99CW7PTVR27"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
