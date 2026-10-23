import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/service-area/spokane-wa";
const title = "House Cleaning in Spokane, WA | White Dove Cleaning NW";
const description =
  "Professional house cleaning in Spokane, WA. Weekly and bi-weekly recurring cleaning, deep cleaning, and move-in/move-out services. Request a quote.";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "White Dove Cleaning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "House cleaning in Spokane, WA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://whitedovecleaningnw.com/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": "https://whitedovecleaningnw.com/#website" },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    about: {
      "@type": "Service",
      name: "Residential house cleaning",
      serviceType: "House cleaning",
      provider: {
        "@type": "Organization",
        name: "White Dove Cleaning NW",
        url: "https://whitedovecleaningnw.com/",
      },
      areaServed: {
        "@type": "City",
        name: "Spokane",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Spokane",
          addressRegion: "WA",
          addressCountry: "US",
        },
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://whitedovecleaningnw.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://whitedovecleaningnw.com/service-area",
      },
      { "@type": "ListItem", position: 3, name: "Spokane", item: canonical },
    ],
  },
];

export default function ServiceAreaCityPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="service-area">
        <div className="container">
          <h1>House Cleaning in Spokane, WA</h1>
          <h2>
            Professional weekly, bi-weekly, and one-time home cleaning in
            Spokane.
          </h2>
        </div>
      </div>
      <div className="accent-cta">
        <a href="/contact">Request a house cleaning quote in Spokane →</a>
      </div>
      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            <div className="section">
              <h2>Dependable Home Cleaning for Spokane Households</h2>
              <p>
                From established South Hill homes to busy households in North
                Spokane, keeping up with everyday cleaning can be difficult when
                work, school, and family schedules fill the week.
              </p>
              <p>
                Our{" "}
                <a href="/services/residential-cleaning">
                  residential cleaning services
                </a>{" "}
                are designed to fit your home, priorities, and schedule. Whether
                you want regular appointments or help with a specific cleaning
                project, we can talk through the options and confirm
                availability in your neighborhood.
              </p>
            </div>
            <div className="section">
              <h2>Weekly and Bi-Weekly House Cleaning in Spokane</h2>
              <p>
                Spokane households deal with everything from tracked-in grit
                during wet weather to dust that collects during dry summer
                months. A consistent cleaning schedule helps keep the kitchen,
                bathrooms, floors, and everyday living spaces under control.
              </p>
              <p>
                For busy Spokane families, weekly visits can help keep high-use
                rooms consistently tidy. Bi-weekly cleaning offers a practical
                rhythm for households that can handle lighter upkeep between
                appointments.
              </p>
              <p>
                With{" "}
                <a href="/services/recurring-cleaning">
                  recurring house cleaning
                </a>
                , you can spend less time trying to catch up and more time
                enjoying a home that feels cared for. Tell us about your home
                and we can discuss a cleaning frequency that makes sense for
                you.
              </p>
              <a className="underline-link" href="/contact">
                Ask about recurring cleaning in Spokane →
              </a>
            </div>
            <div className="section">
              <h2>Deep Cleaning for a Fresh Start</h2>
              <p>
                A deeper cleaning can be useful before guests arrive, after a
                particularly busy season, or when routine housekeeping has
                fallen behind.
              </p>
              <p>
                Our <a href="/services/deep-cleaning">deep cleaning services</a>{" "}
                focus on giving spaces the extra attention they need. If you are
                considering ongoing service, a deeper initial clean may also be
                worth discussing based on your home's current condition.
              </p>
            </div>
            <div className="section">
              <h2>Move-In and Move-Out Cleaning in Spokane</h2>
              <p>
                Whether you are settling into a new Spokane home or preparing to
                leave one, move-related cleaning can help you focus on the
                logistics instead of scrubbing.
              </p>
              <p>
                Explore our{" "}
                <a href="/services/move-in-move-out">
                  move-in and move-out cleaning services
                </a>{" "}
                to see how professional cleaning can support your transition. We
                can discuss the size and condition of the home when preparing a
                quote.
              </p>
            </div>
            <div className="section">
              <h2>Choosing the Right Cleaning Service</h2>
              <p>
                If you are not sure which service fits, start with our{" "}
                <a href="/services">complete cleaning services overview</a>. Our{" "}
                <a href="/services/residential-cleaning">
                  home cleaning options
                </a>{" "}
                cover everyday household needs, while recurring visits focus on
                maintaining a comfortable space over time.
              </p>
              <p>
                For a home that needs a bigger reset, consider{" "}
                <a href="/services/deep-cleaning">deep cleaning</a>. If you are
                changing addresses,{" "}
                <a href="/services/move-in-move-out">moving cleaning</a> may be
                the better fit. Our team can help you choose the appropriate
                service when you reach out.
              </p>
            </div>
            <div className="section">
              <h2>Why Choose White Dove Cleaning NW?</h2>
              <p>
                White Dove Cleaning NW emphasizes dependable cleaning, flexible
                scheduling, and thoughtful attention to each household's
                priorities. We use eco-friendly cleaning products whenever
                possible and work with clients to discuss a plan that fits their
                needs.
              </p>
              <p>
                Learn more{" "}
                <a href="/about-white-dove">about White Dove Cleaning</a>, or
                explore the <a href="/service-area">full service area</a> to see
                the communities we serve across Washington and North Idaho.
              </p>
            </div>
            <div className="section">
              <h2>Cleaning Availability in Spokane and Nearby Communities</h2>
              <p>
                We also discuss cleaning requests from Spokane Valley, South
                Hill, North Spokane, and surrounding Spokane neighborhoods.
                Appointment availability depends on your exact address and our
                current schedule, so please check with us before assuming a
                specific neighborhood is covered.
              </p>
            </div>
            <div className="section">
              <h2>
                Frequently Asked Questions About House Cleaning in Spokane
              </h2>
              <h3>Can I schedule weekly or bi-weekly cleaning?</h3>
              <p>
                Yes. Weekly and bi-weekly recurring cleaning are core services.
                Contact us to discuss your preferred frequency and current
                appointment availability.
              </p>
              <h3>Do you offer one-time cleaning?</h3>
              <p>
                We also offer one-time cleaning options, including{" "}
                <a href="/services/deep-cleaning">deep cleaning</a> and{" "}
                <a href="/services/move-in-move-out">move-related cleaning</a>,
                depending on your needs and scheduling availability.
              </p>
              <h3>Do you clean homes in Spokane Valley as well as Spokane?</h3>
              <p>
                Spokane Valley and nearby neighborhoods are within the broader
                area we discuss with prospective clients. Contact us with your
                address so we can confirm current scheduling and availability.
              </p>
              <h3>How do I get a quote for my home?</h3>
              <p>
                Use our <a href="/contact">contact page</a> to tell us your
                location, the size of your home, and the cleaning service you
                need. Our team can discuss next steps and availability.
              </p>
            </div>
            <div className="section">
              <h2>Request a House Cleaning Quote in Spokane</h2>
              <p>
                Ready to take cleaning off your to-do list? Whether you are
                interested in a weekly schedule, bi-weekly appointments, or a
                one-time clean, tell us what your home needs. We would love to
                help you find the right fit.
              </p>
              <a className="underline-link" href="/contact">
                Contact White Dove Cleaning NW →
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
