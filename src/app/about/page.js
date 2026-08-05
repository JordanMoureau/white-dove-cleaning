import JsonLd from "../components/JsonLd";
import "../styles/aboutpage.css";
import SideBar from "../components/sideBar";
import ContactForm from "../components/ContactForm";

const canonical = "https://whitedovecleaningnw.com/about-white-dove";

export const metadata = {
  title: "About White Dove Cleaning | Spokane & Coeur d’Alene House Cleaning",
  description:
    "Learn more about White Dove Cleaning and our approach to reliable, detail-focused house cleaning in Spokane and Coeur d’Alene.",
  alternates: { canonical },
  openGraph: {
    title: "About White Dove Cleaning",
    description:
      "A local cleaning company focused on consistent, reliable home cleaning in Spokane and Coeur d’Alene.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Dove Cleaning team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonical}#about`,
    url: canonical,
    name: "About White Dove Cleaning",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    description:
      "Learn about White Dove Cleaning and our approach to home cleaning services.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="about-hero">
        <div className="container">
          <h1>About White Dove Cleaning NW</h1>
          <p>
            A faith-driven, locally rooted cleaning service serving Spokane,
            Coeur d&apos;Alene, and Tacoma — because a clean home is a calmer
            life.
          </p>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/">Find Out More about Our Weekly & Bi-Weekly Cleanings</a>
      </div>
      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            {/* WHO WE ARE */}
            <div className="section">
              <h2>Who We Are — White Dove Cleaning NW</h2>
              <p>
                White Dove Cleaning NW is a locally rooted, faith-driven
                cleaning service serving homeowners across Spokane, Spokane
                Valley, Coeur d&apos;Alene, Puyallup, and Tacoma. We started
                this business with a simple belief: serving you well is our
                number one priority. That&apos;s not a slogan — it&apos;s the
                standard we hold every visit to. Colossians 3:23.
              </p>
              <p>
                We know your home is your sanctuary. A clean home isn&apos;t
                just about appearances — it&apos;s a foundation for a calmer,
                healthier, less stressful life. When you work with White Dove,
                you&apos;re not just hiring a cleaner. You&apos;re gaining a
                reliable partner who shows up consistently, communicates
                clearly, and treats your space with genuine care.
              </p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="section">
              <h2>
                Why Spokane &amp; Coeur d&apos;Alene Homeowners Choose White
                Dove
              </h2>
              <p>
                There&apos;s no shortage of cleaning services in the Pacific
                Northwest — but White Dove stands apart. We use eco-friendly
                cleaning products that are safer for your family, your pets, and
                your home. Every member of our team is experienced,
                background-checked, and trained to deliver the same thorough
                result on every visit. And we offer flexible scheduling built
                around your life, not ours.
              </p>
              <p>
                Our clients don&apos;t just hire us once — they stick with us.
                Because we show up on time, we do what we say we&apos;ll do, and
                we deliver results you can actually see and feel. If something
                isn&apos;t right, we make it right. That&apos;s the White Dove
                standard.
              </p>
              <a href="/services" className="underline-link">
                Browse all our cleaning services →
              </a>
            </div>

            {/* OUR SERVICES */}
            <div className="section">
              <h2>
                Our Home Cleaning Services in Spokane &amp; Coeur d&apos;Alene
              </h2>
              <p>
                We offer a full range of{" "}
                <a href="/services">professional home cleaning services</a>{" "}
                designed to meet you where you are. Our most popular offering is{" "}
                <a href="/services/recurring-cleaning">
                  recurring weekly and bi-weekly cleaning
                </a>{" "}
                — ongoing maintenance that keeps your home in a consistently
                clean state without you having to think about it. Ideal for busy
                families, working professionals, and anyone who simply wants
                their weekends back.
              </p>
              <p>
                When your home needs a full reset, our{" "}
                <a href="/services/deep-cleaning">deep cleaning service</a> goes
                top-to-bottom — baseboards, inside appliances, grout lines,
                ceiling fans, window sills, and every spot routine cleaning
                doesn&apos;t reach. And when life brings a big transition, our{" "}
                <a href="/services/move-in-move-out">
                  move-in and move-out cleaning
                </a>{" "}
                takes one major task completely off your plate so you can focus
                on the move itself.
              </p>
              <a href="/services" className="underline-link">
                See all services →
              </a>
            </div>

            {/* COMMUNITY */}
            <div className="section">
              <h2>Connected to Our Community</h2>
              <p>
                White Dove Cleaning NW isn&apos;t just a business — we&apos;re
                neighbors. We&apos;re proud to be well-known and well-connected
                in the Spokane and Tacoma business communities, and we genuinely
                believe in lifting others up alongside us. We support our
                military families and Veterans, and we collaborate with a
                network of trusted local partners when we can&apos;t serve you
                ourselves.
              </p>
              <p>
                Our referral partner network across{" "}
                <a href="/service-area">Spokane and the surrounding area</a>{" "}
                means that even if our schedule is full, we won&apos;t leave you
                without options. We&apos;d rather connect you with someone great
                than leave you without help.
              </p>
            </div>

            {/* SERVICE AREA + CTA */}
            <div className="section">
              <h2>Serving Spokane, Coeur d&apos;Alene, Tacoma &amp; Beyond</h2>
              <p>
                We proudly serve homeowners across Spokane, Spokane Valley,
                Coeur d&apos;Alene, Puyallup, Tacoma, and surrounding
                communities throughout Washington and North Idaho. Whether
                you&apos;re looking for a one-time deep clean or a long-term
                recurring plan, we&apos;d love to find the right fit for your
                home and your schedule.
              </p>
              <p>
                Getting started is simple — book a free 15-minute call and
                we&apos;ll walk you through your options, answer your questions,
                and get you set up with a cleaning plan that actually works for
                your life.
              </p>
              <a href="/contact" className="underline-link">
                Book a free call today →
              </a>
            </div>
          </div>
        </div>
        <div className="col-two">
          <SideBar />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
