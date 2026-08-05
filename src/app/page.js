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
    "House Cleaning Services in Spokane & Coeur d’Alene | Weekly & Bi-Weekly Cleaning",
  description:
    "Reliable recurring house cleaning in Spokane, Coeur d’Alene & surrounding areas. Weekly & bi-weekly home cleaning designed to keep your home consistently clean—without the stress.",
  alternates: { canonical },
  openGraph: {
    title:
      "Recurring House Cleaning | Spokane & Coeur d’Alene | White Dove Cleaning",
    description:
      "Weekly & bi-weekly home cleaning that keeps your house consistently clean without the overwhelm.",
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
    name: "House Cleaning Services Spokane & Coeur d’Alene",
    isPartOf: {
      "@id": `${canonical}#website`,
    },
    description:
      "Recurring house cleaning services in Spokane and Coeur d’Alene.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Recurring House Cleaning",
    provider: {
      "@id": `${canonical}#business`,
    },
    areaServed: ["Spokane WA", "Coeur d’Alene ID"],
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

      {/* SERVICES */}
      {/* <div className="section gray">
        <div className="container">
          <h2>Recurring House Cleaning That Works for You</h2>

          <h3>Weekly House Cleaning</h3>
          <p>
            Perfect for busy households that need consistent upkeep and a home
            that always feels clean.
          </p>

          <h3>Bi-Weekly Cleaning Services</h3>
          <p>
            A flexible option that keeps your home under control without the
            pressure of constant maintenance.
          </p>

          <h3>Customized Cleaning Plans</h3>
          <p>
            Every home is different. We tailor our cleaning approach to fit your
            space, your priorities, and your schedule.
          </p>

          <p>
            Learn more about our{" "}
            <a href="/services/recurring-cleaning">
              recurring house cleaning services
            </a>
            .
          </p>
        </div>
      </div> */}

      {/* LOCATION */}
      {/* <div className="section">
        <div className="container">
          <h2>Serving Spokane, Coeur d’Alene & Surrounding Areas</h2>
          <p>
            We provide house cleaning services throughout Spokane, Spokane
            Valley, Coeur d’Alene, and nearby communities.
          </p>
          <p>
            If you're searching for house cleaning near you, White Dove Cleaning
            offers reliable recurring service you can count on.
          </p>
        </div>
      </div> */}

      {/* TRUST */}
      {/* <div className="section gray">
        <div className="container">
          <h2>Why Homeowners Choose White Dove Cleaning</h2>
          <ul>
            <li>Consistent, dependable service</li>
            <li>Detail-focused cleaning every visit</li>
            <li>Flexible scheduling options</li>
            <li>Designed for long-term home care—not one-time fixes</li>
          </ul>
        </div>
      </div> */}

      {/* PROCESS */}
      {/* <div className="section">
        <div className="container">
          <h2>How It Works</h2>
          <ol>
            <li>Request a quote</li>
            <li>Choose your schedule</li>
            <li>We take care of the cleaning</li>
            <li>You come home to a clean space</li>
          </ol>
        </div>
      </div> */}

      {/* <div className="section cta">
        <div className="container">
          <h2>Ready for a consistently clean home?</h2>
          <p>
            Let us take cleaning off your plate so you can focus on everything
            else that matters.
          </p>
          <a href="/contact" className="primary-button">
            Get Your Cleaning Quote
          </a>
        </div>
      </div> */}
      <ContactForm />
    </div>
  );
}
