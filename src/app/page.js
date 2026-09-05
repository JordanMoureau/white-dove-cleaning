import JsonLd from "./components/JsonLd";
import ContactForm from "./components/ContactForm";
import Hero from "./components/hero";
import FeatureBar from "./components/floatingCred";
import HeroSection from "./components/herosection";

import { FiCheckSquare } from "react-icons/fi";
import OfferWidge from "./components/offerWidge";

const items = [
  {
    title: "Regular Weekly Cleaning",
    description:
      "Keep your home consistently fresh with a reliable weekly clean you can count on.",
  },
  {
    title: "Bi-Weekly Cleaning",
    description:
      "A thorough clean every two weeks to maintain a healthy, comfortable space without the hassle.",
  },
  {
    title: "Deep Cleanings",
    description:
      "From baseboards to behind the fridge — we get into every corner for a truly spotless result.",
  },
  {
    title: "And more…",
    description:
      "Every home is different — ask us about custom cleaning plans tailored to your needs.",
  },
];

const canonical = "https://whitedovecleaningnw.com/";

export const metadata = {
  title:
    "House Cleaning Services in Spokane, Coeur d’Alene & Tacoma | Weekly & Bi-Weekly Cleaning",
  description:
    "Reliable recurring house cleaning in Spokane, Coeur d’Alene, Tacoma & surrounding areas. Weekly & bi-weekly home cleaning designed to keep your home consistently clean—without the stress.",
  alternates: { canonical },
  openGraph: {
    title:
      "Recurring House Cleaning | Spokane, Coeur d’Alene & Tacoma | White Dove Cleaning",
    description:
      "Weekly & bi-weekly home cleaning in Spokane, Coeur d’Alene and Tacoma that keeps your house consistently clean without the overwhelm.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clean home maintained by White Dove Cleaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonical}#business`,
    name: "White Dove Cleaning",
    url: canonical,
    serviceType: "House Cleaning Services",
    areaServed: [
      {
        "@type": "City",
        name: "Spokane",
        addressRegion: "WA",
      },
      {
        "@type": "City",
        name: "Coeur d’Alene",
        addressRegion: "ID",
      },
      {
        "@type": "City",
        name: "Tacoma",
        addressRegion: "WA",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${canonical}#website`,
    url: canonical,
    name: "White Dove Cleaning",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#homepage`,
    url: canonical,
    name: "House Cleaning Services Spokane, Coeur d’Alene & Tacoma",
    isPartOf: {
      "@id": `${canonical}#website`,
    },
    description:
      "Recurring house cleaning services in Spokane, Coeur d’Alene and Tacoma.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Recurring House Cleaning",
    provider: {
      "@id": `${canonical}#business`,
    },
    areaServed: ["Spokane WA", "Coeur d’Alene ID", "Tacoma WA"],
  },
];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <Hero />
      <div className="feature-bar-placement">
        <FeatureBar />
      </div>

      {/* EMOTIONAL HOOK */}
      <HeroSection />

      <div className="services-include-container">
        <div className="services-include">
          <h2>Our Services Include…</h2>

          <div className="services-include-inner">
            <div className="services-include-image">
              <img
                src="/cleaning-gloves.jpg"
                alt="White Dove Cleaning professional home cleaning services"
              />
            </div>

            <div className="services-include-list">
              {items.map((item) => (
                <div className="services-include-item" key={item.title}>
                  <div className="services-include-check">
                    <FiCheckSquare />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <OfferWidge />

      <ContactForm />
    </div>
  );
}
