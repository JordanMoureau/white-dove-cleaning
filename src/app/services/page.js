import SideBar from "../components/sideBar";
import JsonLd from "../components/JsonLd";
import ContactForm from "../components/ContactForm";
import "../styles/services.css";
import InlineOffer from "../components/InlineOffer";

const canonical = "https://whitedovecleaningnw.com/services";

export const metadata = {
  title:
    "House Cleaning Services in Spokane & Coeur d’Alene | White Dove Cleaning",
  description:
    "Explore house cleaning services in Spokane and Coeur d’Alene including recurring cleaning, deep cleaning, and more. Find the right cleaning plan for your home.",
  alternates: { canonical },
  openGraph: {
    title: "House Cleaning Services | Spokane & Coeur d’Alene",
    description:
      "Recurring cleaning, deep cleaning, and customized home cleaning services designed for consistent, stress-free homes.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "House cleaning services in Spokane and CDA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "House Cleaning Services Spokane & Coeur d’Alene",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    description:
      "Overview of house cleaning services offered by White Dove Cleaning.",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "House Cleaning Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://whitedovecleaningnw.com/services/recurring-cleaning",
        name: "Recurring House Cleaning",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://whitedovecleaningnw.com/services/deep-cleaning",
        name: "Deep Cleaning Services",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="hero-services">
        <div className="container">
          <h1>Our Services At White Dove Cleaning</h1>
          <h2>We offer weekly, bi-weekly, monthly, deep cleanings and more.</h2>
        </div>
      </div>
      <div className="accent-cta">
        <a href="/">Find Out More about Our Weekly & Bi-Weekly Cleanings</a>
      </div>
      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>
                Professional Home Cleaning Services in Spokane &amp; Coeur
                d&apos;Alene
              </h2>
              <p>
                At White Dove Cleaning NW, we believe a clean home isn&apos;t a
                luxury — it&apos;s a foundation for a calmer, healthier life. We
                serve homeowners across Spokane, Spokane Valley, Coeur
                d&apos;Alene, Puyallup, and Tacoma with reliable, professional
                cleaning services tailored to fit your schedule and your home.
                Whether you need someone in every week or just want a deep reset
                before the holidays, we have a plan that works for you.
              </p>
              <p>
                Every member of our team is trained, background-checked, and
                committed to delivering a consistent, thorough clean — every
                single visit. We don&apos;t cut corners, and we don&apos;t
                disappear after the first booking. When you choose White Dove,
                you&apos;re choosing a cleaning partner you can actually count
                on.
              </p>

              <InlineOffer />
            </div>

            {/* RECURRING */}
            <div className="section">
              <h2>
                <a href="/services/recurring-cleaning">
                  Weekly &amp; Bi-Weekly House Cleaning in Spokane and Coeur
                  d&apos;Alene
                </a>
              </h2>
              <p>
                Our most popular service, recurring cleaning keeps your home in
                a consistently clean state without you having to think about it.
                We offer weekly and bi-weekly schedules designed for busy
                households — families, working professionals, and anyone who
                simply wants their weekends back.
              </p>
              <p>
                Each recurring visit covers your kitchens, bathrooms, living
                areas, and bedrooms with the same thorough attention every time.
                No guessing what got done. No chasing someone down to come back.
                Just a clean home, on schedule, week after week. Serving
                Spokane, Spokane Valley, Coeur d&apos;Alene, and surrounding
                areas.
              </p>
              <a href="/services/recurring-cleaning" className="underline-link">
                Learn more about recurring cleaning →
              </a>
            </div>

            {/* DEEP CLEAN */}
            <div className="section">
              <h2>
                <a href="/services/deep-cleaning">
                  Deep Cleaning Services for Spokane &amp; Coeur d&apos;Alene
                  Homes
                </a>
              </h2>
              <p>
                Sometimes a home needs more than a standard clean. Our deep
                cleaning service is a top-to-bottom reset — baseboards, inside
                appliances, grout lines, ceiling fans, window sills, and all the
                spots that routine cleaning doesn&apos;t always reach. It&apos;s
                the clean you feel the moment you walk in the door.
              </p>
              <p>
                Deep cleaning is ideal as a first-time service before starting a
                recurring plan, after a renovation, before or after a major life
                event, or simply when the home needs a thorough refresh. We
                recommend it for anyone who hasn&apos;t had a professional clean
                in six months or more. Available throughout Spokane, Coeur
                d&apos;Alene, and the surrounding Pacific Northwest region.
              </p>
              <a href="/services/deep-cleaning" className="underline-link">
                Learn more about deep cleaning →
              </a>
            </div>

            {/* MOVE IN / MOVE OUT */}
            <div className="section">
              <h2>Move-In &amp; Move-Out Cleaning Services</h2>
              <p>
                Moving is already stressful enough. Our move-in and move-out
                cleaning service takes one major task completely off your plate
                — so you can focus on the transition, not the scrubbing. We
                clean the property from top to bottom: inside cabinets and
                drawers, inside the fridge and oven, bathrooms, closets, and
                every surface in between.
              </p>
              <p>
                Whether you&apos;re a homeowner prepping a property for sale, a
                renter trying to get your deposit back, or someone moving into a
                new space and wanting a fresh start, we&apos;ve got you covered.
                Our move cleaning teams serve Spokane, Coeur d&apos;Alene, and
                surrounding communities with prompt, thorough service.
              </p>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>
                Why Spokane &amp; Coeur d&apos;Alene Homeowners Choose White
                Dove Cleaning
              </h2>
              <p>
                There&apos;s no shortage of cleaning services in the Pacific
                Northwest — but White Dove stands apart. We&apos;re locally
                rooted, highly rated, and genuinely invested in the homes we
                care for. Our clients don&apos;t just hire us once; they stick
                with us because we show up on time, communicate clearly, and
                deliver results they can see.
              </p>
              <p>
                We&apos;re proud to serve families, professionals, and property
                owners across Spokane, Spokane Valley, Coeur d&apos;Alene,
                Puyallup, and Tacoma. If you&apos;re looking for a cleaning
                company that treats your home like it matters — because it does
                — reach out today for a free quote. We&apos;d love to show you
                the difference a great clean makes.
              </p>
              <a href="/contact" className="underline-link">
                Get a free quote →
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
