import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Smartcare Polyclinic Dubai",
    url: "https://smartcarepolyclinic.com",
    logo: "https://smartcarepolyclinic.com/logo.png",
    image: "https://smartcarepolyclinic.com/clinic-image.jpg",
    description:
      "Leading healthcare provider in Dubai offering specialized medical services, expert doctors, and advanced treatments.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Medical Center Drive",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "12345",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    telephone: "+971-4-123-4567",
    email: "contact@smartcarepolyclinic.com",
    openingHours: "Mo,Tu,We,Th,Fr 08:00-20:00, Sa 09:00-17:00",
    medicalSpecialty: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Internal Medicine"],
    department: [
      {
        "@type": "MedicalSpecialty",
        name: "Cardiology Department",
        url: "https://smartcarepolyclinic.com/departments/cardiology",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Neurology Department",
        url: "https://smartcarepolyclinic.com/departments/neurology",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Pediatrics Department",
        url: "https://smartcarepolyclinic.com/departments/pediatrics",
      },
    ],
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

