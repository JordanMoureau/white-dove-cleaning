import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/service-area";

export const metadata = {
  title:
    "House Cleaning Service Areas in Washington & North Idaho | White Dove Cleaning",

  description:
    "White Dove Cleaning NW provides professional house cleaning in Spokane, Coeur d'Alene, Tacoma, Puyallup, and surrounding communities. Explore our cleaning service areas.",

  alternates: {
    canonical,
  },

  openGraph: {
    title:
      "House Cleaning Service Areas | Spokane, Coeur d'Alene, Tacoma & Puyallup",
    description:
      "Professional house cleaning throughout Spokane, Coeur d'Alene, Tacoma, Puyallup, and surrounding communities in Washington and North Idaho.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Dove Cleaning NW service areas",
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
    name: "White Dove Cleaning NW Service Areas",
    description:
      "House cleaning service areas for White Dove Cleaning NW throughout Eastern Washington, North Idaho, Tacoma, Puyallup, and Pierce County.",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    about: {
      "@type": "LocalBusiness",
      name: "White Dove Cleaning NW",
      url: "https://whitedovecleaningnw.com",
      areaServed: [
        {
          "@type": "City",
          name: "Spokane",
          addressRegion: "WA",
        },
        {
          "@type": "City",
          name: "Coeur d'Alene",
          addressRegion: "ID",
        },
        {
          "@type": "City",
          name: "Tacoma",
          addressRegion: "WA",
        },
        {
          "@type": "City",
          name: "Puyallup",
          addressRegion: "WA",
        },
        {
          "@type": "AdministrativeArea",
          name: "Pierce County, Washington",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "White Dove Cleaning NW Service Areas",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Place",
          name: "Spokane, Washington",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Place",
          name: "Coeur d'Alene, Idaho",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Place",
          name: "Tacoma, Washington",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Place",
          name: "Puyallup, Washington",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Place",
          name: "Pierce County, Washington",
        },
      },
    ],
  },
];

export default function ServiceAreaPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="service-area">
        <div className="container">
          <h1>Serving Washington &amp; North Idaho &amp; Tacoma</h1>

          <h2>
            Professional home cleaning in Spokane, Coeur d&apos;Alene, Tacoma,
            Puyallup, and surrounding communities.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/contact">
          Not sure if we clean in your neighborhood? Ask our team
        </a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>Local House Cleaning Across the Pacific Northwest</h2>

              <p>
                White Dove Cleaning NW provides professional house cleaning
                across communities in Washington and North Idaho. Our primary
                service areas include Spokane, Coeur d&apos;Alene, Tacoma,
                Puyallup, and communities throughout the surrounding areas.
              </p>

              <p>
                Whether you need help keeping up with your home every week, want
                a bi-weekly cleaning schedule, or need an occasional deep clean,
                our goal is simple: take cleaning off your list and give you
                more time for everything else that matters.
              </p>
            </div>

            {/* SPOKANE */}
            <div className="section">
              <h2>House Cleaning in Spokane, Washington</h2>

              <p>
                White Dove Cleaning provides reliable home cleaning for
                households throughout the Spokane area. Our cleaning team helps
                busy families, professionals, homeowners, and anyone who would
                rather spend their time doing something other than keeping up
                with an endless cleaning list.
              </p>

              <p>
                Spokane clients can choose from recurring weekly or bi-weekly
                cleaning, one-time cleaning, deep cleaning, and move-related
                cleaning depending on what their home needs.
              </p>

              <a href="/contact" className="underline-link">
                Get a house cleaning quote in Spokane →
              </a>
            </div>

            {/* CDA */}
            <div className="section">
              <h2>House Cleaning in Coeur d&apos;Alene, Idaho</h2>

              <p>
                Our Spokane-area team also serves homes in Coeur d&apos;Alene
                and North Idaho. We provide dependable residential cleaning
                designed around the needs of your household and the schedule
                that works best for you.
              </p>

              <p>
                From ongoing home maintenance to a deeper seasonal reset, White
                Dove Cleaning can build a cleaning plan that helps keep your
                Coeur d&apos;Alene home comfortable, fresh, and easier to
                maintain.
              </p>

              <a href="/contact" className="underline-link">
                Get a house cleaning quote in Coeur d&apos;Alene →
              </a>
            </div>

            {/* TACOMA */}
            <div className="section">
              <h2>House Cleaning in Tacoma &amp; Pierce County</h2>

              <p>
                White Dove Cleaning NW serves homeowners throughout Tacoma and
                Pierce County with professional recurring and one-time house
                cleaning. Our Tacoma team provides dependable service with
                flexible scheduling built around your household.
              </p>

              <p>
                For clients who want their home consistently maintained, weekly
                and bi-weekly cleaning are at the heart of what we do. We can
                also help when your home needs a one-time clean, deeper
                attention, or cleaning during a move.
              </p>

              <a href="/contact" className="underline-link">
                Get a house cleaning quote in Tacoma →
              </a>
            </div>

            {/* PUYALLUP */}
            <div className="section">
              <h2>House Cleaning in Puyallup, Washington</h2>

              <p>
                Our Pierce County service area includes Puyallup, where White
                Dove Cleaning provides professional home cleaning for clients
                who want reliable help keeping their homes clean without losing
                hours of their own time every week.
              </p>

              <p>
                We&apos;ll work with you to determine the right cleaning plan
                for your home, priorities, and schedule — from recurring
                maintenance to occasional cleaning when you need an extra hand.
              </p>

              <a href="/contact" className="underline-link">
                Get a house cleaning quote in Puyallup →
              </a>
            </div>

            {/* SURROUNDING AREAS */}
            <div className="section">
              <h2>Cleaning Services in Surrounding Communities</h2>

              <p>
                Live near one of our primary service areas? Reach out. Our
                cleaning teams work throughout the communities surrounding
                Spokane, Coeur d&apos;Alene, Tacoma, and Puyallup, and service
                availability can depend on your location and our current
                schedule.
              </p>

              <p>
                If our schedule or service area doesn&apos;t allow us to take
                care of your home, we may also be able to connect you with one
                of the trusted cleaning partners in our local network.
              </p>

              <a href="/contact" className="underline-link">
                Check availability in your neighborhood →
              </a>
            </div>

            {/* SERVICES */}
            <div className="section">
              <h2>Cleaning Services Available Throughout Our Service Area</h2>

              <p>
                White Dove Cleaning NW provides a range of residential cleaning
                options throughout our Washington and North Idaho service areas.
                Our{" "}
                <a href="/services/recurring-cleaning">
                  recurring cleaning services
                </a>{" "}
                are designed for homeowners who want consistent weekly or
                bi-weekly help keeping their homes in great shape.
              </p>

              <p>
                When your home needs more attention, our{" "}
                <a href="/services/deep-cleaning">deep cleaning services</a>{" "}
                tackle the buildup and less frequently cleaned areas that
                routine maintenance doesn&apos;t always reach. We also provide{" "}
                <a href="/services/move-in-move-out">
                  move-in and move-out cleaning
                </a>{" "}
                and one-time cleaning for homes that need professional help
                without an ongoing schedule.
              </p>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>Why Homeowners Choose White Dove Cleaning NW</h2>

              <p>
                Serving our clients well is the standard behind White Dove
                Cleaning NW. Our experienced cleaning professionals provide
                dependable service, flexible scheduling, and thoughtful care for
                your home.
              </p>

              <p>
                We use eco-friendly cleaning products whenever possible to help
                create a cleaner, healthier home, and we work with each client
                to create a cleaning schedule that fits their needs rather than
                forcing every household into the same plan.
              </p>

              <p>
                Whether you&apos;re looking for dependable weekly help in
                Tacoma, bi-weekly cleaning in Spokane, a deep clean in Coeur
                d&apos;Alene, or professional house cleaning in Puyallup,
                we&apos;d love to talk about how we can help.
              </p>

              <a href="/contact" className="underline-link">
                Set up a time to chat →
              </a>
            </div>

            {/* FINAL CTA */}
            <div className="section">
              <h2>Find House Cleaning Near You</h2>

              <p>
                Ready to get cleaning off your list? Tell us where you&apos;re
                located and what kind of help you&apos;re looking for.
                We&apos;ll confirm service availability and help you choose a
                cleaning plan that fits your home, schedule, and priorities.
              </p>

              <a href="/contact" className="underline-link">
                Get started with White Dove Cleaning →
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
