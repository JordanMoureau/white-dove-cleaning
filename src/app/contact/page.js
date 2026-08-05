import JsonLd from "@/app/components/JsonLd";
import ContactForm from "../components/ContactForm";

const canonical = "https://whitedovecleaningnw.com/contact";

export const metadata = {
  title:
    "Contact White Dove Cleaning | Get a House Cleaning Quote in Spokane & CDA",
  description:
    "Request a quote for house cleaning services in Spokane and Coeur d’Alene. Fast, simple, and no pressure—get started today.",
  alternates: { canonical },
  openGraph: {
    title: "Get a Cleaning Quote | White Dove Cleaning",
    description:
      "Request a quote for recurring, deep, or move-out cleaning in Spokane & Coeur d’Alene.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact White Dove Cleaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${canonical}#contact`,
    url: canonical,
    name: "Contact White Dove Cleaning",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    description:
      "Contact White Dove Cleaning to request a house cleaning quote.",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      {/* <div className="hero">
        <div className="container">
          <h1>Get a House Cleaning Quote</h1>
          <p>
            Tell us a little about your home and we’ll help you find the right
            cleaning plan—no pressure, no hassle.
          </p>
        </div>
      </div> */}

      <ContactForm />
    </div>
  );
}
