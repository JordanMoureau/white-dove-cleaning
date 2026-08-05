import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical =
  "https://whitedovecleaningnw.com/services/residential-cleaning";

export const metadata = {
  title:
    "Residential Cleaning Services in Spokane & Coeur d'Alene | White Dove Cleaning",
  description:
    "Professional residential house cleaning in Spokane, Coeur d'Alene, and Tacoma. White Dove Cleaning NW delivers reliable, thorough home cleaning tailored to your household.",
  alternates: { canonical },
  openGraph: {
    title: "Residential Cleaning Services | Spokane & Coeur d'Alene",
    description:
      "Trusted residential cleaning for homes in Spokane, Coeur d'Alene, and Tacoma. Book a free call with White Dove Cleaning NW today.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Residential cleaning services in Spokane and Coeur d'Alene",
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
    name: "Residential Cleaning Services Spokane & Coeur d'Alene",
    isPartOf: { "@id": "https://whitedovecleaningnw.com/#website" },
    description:
      "Professional residential cleaning services offered by White Dove Cleaning NW in Spokane, Coeur d'Alene, and Tacoma.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Cleaning Services",
    provider: {
      "@type": "LocalBusiness",
      name: "White Dove Cleaning NW",
      url: "https://whitedovecleaningnw.com",
    },
    areaServed: [
      "Spokane, WA",
      "Coeur d'Alene, ID",
      "Tacoma, WA",
      "Puyallup, WA",
      "Spokane Valley, WA",
    ],
    description:
      "Comprehensive residential house cleaning including recurring maintenance, deep cleaning, and move cleaning throughout Spokane and Coeur d'Alene.",
  },
];

export default function ResidentialCleaningPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="service-area">
        <div className="container">
          <h1>
            Residential Cleaning Services in Spokane &amp; Coeur d&apos;Alene
          </h1>
          <h2>
            Professional home cleaning tailored to your household — reliable,
            thorough, and built around your life.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/services/recurring-cleaning">
          Want consistent upkeep? See Our Recurring Cleaning Plans
        </a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>
                Professional Residential Cleaning in Spokane &amp; Coeur
                d&apos;Alene
              </h2>
              <p>
                Your home is where life happens — and keeping it clean
                shouldn&apos;t be another full-time job on top of everything
                else. White Dove Cleaning NW provides professional residential
                cleaning services for homeowners throughout Spokane, Spokane
                Valley, Coeur d&apos;Alene, Puyallup, and Tacoma. We handle the
                cleaning so you can focus on the parts of home life that
                actually matter to you.
              </p>
              <p>
                Every home is different, and every household has different
                needs. Whether you&apos;re looking for consistent weekly
                maintenance, a one-time deep reset, or cleaning support around a
                move, we offer a full range of{" "}
                <a href="/services">residential cleaning services</a> designed
                to meet you where you are — and keep your home in great shape
                long-term.
              </p>
            </div>

            {/* WHAT WE CLEAN */}
            <div className="section">
              <h2>What Our Residential Cleaning Covers</h2>
              <p>
                Our residential cleaning service covers every room in your home
                with consistent, thorough attention. Kitchens are wiped down,
                degreased, and scrubbed — counters, appliance exteriors, sinks,
                and stovetops. Bathrooms get a full clean including toilets,
                tubs, showers, sinks, mirrors, and fixtures. Bedrooms and living
                areas are dusted, vacuumed, and tidied throughout.
              </p>
              <p>
                For homes that need more than routine maintenance, our{" "}
                <a href="/services/deep-cleaning">deep cleaning service</a> goes
                further — inside appliances, grout lines, baseboards, ceiling
                fans, window sills, and all the spots that build up over time.
                We use eco-friendly cleaning products throughout, so your home
                is clean without harsh chemicals lingering in your living space.
              </p>
            </div>

            {/* SERVICE OPTIONS */}
            <div className="section">
              <h2>Residential Cleaning Services We Offer</h2>
              <p>
                We provide a full range of cleaning options for homeowners
                depending on what your home needs right now. Our{" "}
                <a href="/services/recurring-cleaning">
                  recurring weekly and bi-weekly cleaning
                </a>{" "}
                is our most popular service — ongoing maintenance that keeps
                your home consistently clean without you having to think about
                it. It&apos;s ideal for busy families, working professionals,
                and anyone who wants their weekends back.
              </p>
              <p>
                When a home needs a full reset, our{" "}
                <a href="/services/deep-cleaning">deep cleaning</a> provides a
                top-to-bottom clean that routine visits don&apos;t reach. And
                when life brings a transition, our{" "}
                <a href="/services/move-in-move-out">
                  move-in and move-out cleaning
                </a>{" "}
                takes the property clean completely off your plate so you can
                focus on the move itself. Whatever your situation, we have a
                service that fits.
              </p>
            </div>

            {/* WHO WE SERVE */}
            <div className="section">
              <h2>Residential Cleaning for Every Type of Household</h2>
              <p>
                We work with all kinds of homeowners across the Pacific
                Northwest. Families with kids and pets rely on us for consistent
                weekly cleaning that keeps the home manageable no matter how
                much activity is happening. Busy professionals use our bi-weekly
                service to maintain a clean, calm home without spending their
                limited free time scrubbing. Seniors and individuals who need
                reliable support with home upkeep trust us to show up on
                schedule and do the job right.
              </p>
              <p>
                We&apos;re also a go-to resource for landlords and property
                managers who need a dependable cleaning team for tenant
                turnovers and ongoing property maintenance. No matter the size
                of your home or the complexity of your needs, White Dove
                Cleaning NW is equipped to help.
              </p>
            </div>

            {/* SERVICE AREA */}
            <div className="section">
              <h2>
                Serving Spokane, Coeur d&apos;Alene, Tacoma &amp; Surrounding
                Communities
              </h2>
              <p>
                We provide residential cleaning throughout Spokane, Spokane
                Valley, Coeur d&apos;Alene, Puyallup, Tacoma, and surrounding
                areas in Washington and North Idaho. Our team is
                background-checked, experienced, and committed to delivering a
                consistent, thorough result on every visit — no matter the size
                of the home or the frequency of the schedule.
              </p>
              <p>
                Not sure if we cover your neighborhood? Reach out and we&apos;ll
                confirm right away. And if we&apos;re not the right fit for your
                area, we have a network of trusted local partners we&apos;re
                happy to refer you to.
              </p>
              <a href="/service-area" className="underline-link">
                View our full service area →
              </a>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>
                Why Spokane &amp; Coeur d&apos;Alene Homeowners Choose White
                Dove Cleaning
              </h2>
              <p>
                White Dove Cleaning NW is locally owned, faith-driven, and built
                on a single standard — serving you well is our number one
                priority. We use eco-friendly products, employ
                background-checked professionals, and offer flexible scheduling
                that adapts to your life. Our clients don&apos;t just hire us
                once. They stay with us because we show up, we communicate, and
                we deliver results they can count on.
              </p>
              <p>
                If you&apos;re ready for a cleaner home without the hassle of
                doing it yourself, we&apos;d love to help. Book a free 15-minute
                call and we&apos;ll put together a cleaning plan that fits your
                home, your schedule, and your budget.
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
