import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/service-area/tacoma-wa";
const title = "House Cleaning in Tacoma, WA | White Dove Cleaning NW";
const description =
  "Professional house cleaning in Tacoma, WA. Weekly and bi-weekly recurring cleaning, deep cleaning, and move-in/move-out services. Request a quote.";

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
        alt: "House cleaning in Tacoma, WA",
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
        name: "Tacoma",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tacoma",
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
      { "@type": "ListItem", position: 3, name: "Tacoma", item: canonical },
    ],
  },
];

export default function ServiceAreaCityPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="service-area">
        <div className="container">
          <h1>House Cleaning in Tacoma, WA</h1>
          <h2>
            Professional weekly, bi-weekly, and one-time home cleaning in
            Tacoma.
          </h2>
        </div>
      </div>
      <div className="accent-cta">
        <a href="/contact">Request a house cleaning quote in Tacoma →</a>
      </div>
      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            <div className="section">
              <h2>Dependable Home Cleaning for Tacoma Households</h2>
              <p>
                Between commuting, work, family activities, and everything else
                on the calendar, Tacoma homeowners have plenty competing for
                their time. White Dove Cleaning NW provides home cleaning that
                helps take recurring chores off that list.
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
              <h2>Weekly and Bi-Weekly House Cleaning in Tacoma</h2>
              <p>
                Tacoma’s rainy stretches can mean muddy entryways and more
                frequent attention to floors and high-traffic areas. Consistent
                cleaning helps keep kitchens, bathrooms, and shared living
                spaces comfortable throughout the year.
              </p>
              <p>
                Weekly appointments can work well for active homes with
                children, pets, or frequently used shared spaces. Bi-weekly
                service is a popular alternative for households looking for
                dependable support on a regular schedule.
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
                Ask about recurring cleaning in Tacoma →
              </a>
            </div>
            <div className="section">
              <h2>Deep Cleaning for a Fresh Start</h2>
              <p>
                A detailed cleaning is a helpful option when routine maintenance
                is not enough, whether you are catching up after a busy stretch
                or preparing for a change in season.
              </p>
              <p>
                Our <a href="/services/deep-cleaning">deep cleaning services</a>{" "}
                focus on giving spaces the extra attention they need. If you are
                considering ongoing service, a deeper initial clean may also be
                worth discussing based on your home's current condition.
              </p>
            </div>
            <div className="section">
              <h2>Move-In and Move-Out Cleaning in Tacoma</h2>
              <p>
                From preparing a home before move-in to cleaning after
                belongings are packed, our move-related service can make one
                part of a Tacoma relocation easier.
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
              <h2>Cleaning Availability in Tacoma and Nearby Communities</h2>
              <p>
                We also discuss cleaning requests from Puyallup and surrounding
                Pierce County communities. Appointment availability depends on
                your exact address and our current schedule, so please check
                with us before assuming a specific neighborhood is covered.
              </p>
            </div>
            <div className="section">
              <h2>Frequently Asked Questions About House Cleaning in Tacoma</h2>
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
              <h3>Do you offer house cleaning in Puyallup?</h3>
              <p>
                Puyallup is included in the Pierce County area described on our
                main service area page. Contact our team with your address to
                confirm service availability and scheduling.
              </p>
              <h3>How do I get a quote for my home?</h3>
              <p>
                Use our <a href="/contact">contact page</a> to tell us your
                location, the size of your home, and the cleaning service you
                need. Our team can discuss next steps and availability.
              </p>
            </div>
            <div className="section">
              <h2>Request a House Cleaning Quote in Tacoma</h2>
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
