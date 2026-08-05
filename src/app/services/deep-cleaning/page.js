import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/services/deep-cleaning";

export const metadata = {
  title:
    "Deep Cleaning Services in Spokane & Coeur d'Alene | White Dove Cleaning",
  description:
    "Professional deep cleaning services in Spokane, Coeur d'Alene, and Tacoma. White Dove Cleaning NW goes top-to-bottom — baseboards, appliances, grout, and every spot routine cleaning misses.",
  alternates: { canonical },
  openGraph: {
    title: "Deep Cleaning Services | Spokane & Coeur d'Alene",
    description:
      "Top-to-bottom deep cleaning for homes in Spokane, Coeur d'Alene, and Tacoma. Book a free call with White Dove Cleaning NW today.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deep cleaning services in Spokane and Coeur d'Alene",
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
    name: "Deep Cleaning Services Spokane & Coeur d'Alene",
    isPartOf: { "@id": "https://whitedovecleaningnw.com/#website" },
    description:
      "Professional deep cleaning services offered by White Dove Cleaning NW in Spokane, Coeur d'Alene, and Tacoma.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deep Cleaning Services",
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
    ],
    description:
      "Top-to-bottom deep cleaning including baseboards, inside appliances, grout lines, ceiling fans, and more.",
  },
];

export default function DeepCleaningPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="deep-clean-services">
        <div className="container">
          <h1>Deep Cleaning Services in Spokane &amp; Coeur d&apos;Alene</h1>
          <h2>
            A top-to-bottom reset for your home — every corner, every surface.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/services/recurring-cleaning">
          Looking for ongoing maintenance? See Our Recurring Cleaning Plans
        </a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>What Is a Deep Cleaning Service?</h2>
              <p>
                A deep cleaning is a comprehensive, top-to-bottom clean that
                goes well beyond what a standard maintenance visit covers. Where
                routine cleaning maintains a home that&apos;s already in good
                shape, deep cleaning gets into the details — the buildup, the
                neglected corners, the spots that accumulate grime over months
                of daily living.
              </p>
              <p>
                At White Dove Cleaning NW, our deep cleaning service covers
                baseboards, inside appliances, grout lines, ceiling fans, window
                sills, inside cabinets, light fixtures, and every surface in
                between. It&apos;s the clean you feel the moment you walk
                through the door — and the one your home has been waiting for.
              </p>
            </div>

            {/* WHEN YOU NEED IT */}
            <div className="section">
              <h2>When Is a Deep Clean the Right Choice?</h2>
              <p>
                Deep cleaning is ideal in a number of situations. If you
                haven&apos;t had a professional clean in six months or more,
                this is where to start. It&apos;s also the right move before
                beginning a{" "}
                <a href="/services/recurring-cleaning">
                  recurring cleaning plan
                </a>{" "}
                — getting your home to a consistent baseline so our team can
                maintain it efficiently on every future visit.
              </p>
              <p>
                Other great times for a deep clean include after a renovation or
                construction project, before or after hosting a major event,
                seasonal resets like spring or fall cleaning, and anytime life
                has gotten busy and the home has fallen behind. If you&apos;re
                preparing to list a property or just moved into a new space, our{" "}
                <a href="/services/move-in-move-out">
                  move-in and move-out cleaning
                </a>{" "}
                service may also be a strong fit.
              </p>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="section">
              <h2>What&apos;s Included in Our Deep Cleaning Service</h2>
              <p>
                Our deep cleaning covers your entire home with a level of detail
                that standard cleaning simply doesn&apos;t reach. In the
                kitchen, we clean inside the oven, microwave, and refrigerator,
                wipe down cabinet fronts and interiors, scrub the sink and
                fixtures, and degrease surfaces that accumulate buildup over
                time. Bathrooms get a full scrub — tile, grout, fixtures,
                toilets, and all the areas that harbor hidden grime.
              </p>
              <p>
                Throughout the rest of the home we dust and wipe ceiling fans,
                light fixtures, and vents; clean baseboards and door frames;
                wipe window sills and ledges; vacuum and mop all floors; and
                address the general buildup that comes from everyday living. We
                bring eco-friendly cleaning products that are safe for your
                family, your pets, and your home — no harsh chemicals, no
                overpowering fumes.
              </p>
            </div>

            {/* SERVICE AREA */}
            <div className="section">
              <h2>
                Deep Cleaning Available in Spokane, Coeur d&apos;Alene, Tacoma
                &amp; Surrounding Areas
              </h2>
              <p>
                We provide professional deep cleaning services throughout
                Spokane, Spokane Valley, Coeur d&apos;Alene, Puyallup, Tacoma,
                and the surrounding Pacific Northwest region. Whether
                you&apos;re in the heart of the city or a surrounding community,
                our team is ready to come to you.
              </p>
              <p>
                Not sure if we serve your area? Reach out — we&apos;re happy to
                confirm coverage and get you on the schedule. Our team is
                background-checked, experienced, and committed to delivering the
                same thorough result on every visit, no matter the size of the
                home.
              </p>
              <a href="/service-area" className="underline-link">
                View our full service area →
              </a>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>Why Choose White Dove Cleaning NW for Your Deep Clean?</h2>
              <p>
                White Dove Cleaning NW is locally owned, faith-driven, and built
                on a simple standard: serving you well is our number one
                priority. We don&apos;t rush through a deep clean to get to the
                next job. We work methodically, communicate clearly, and
                don&apos;t consider a room done until it&apos;s actually done.
              </p>
              <p>
                Our clients across Spokane and Coeur d&apos;Alene keep coming
                back because we show up when we say we will and deliver results
                they can see. If a deep cleaning is what your home needs, we
                would love to be the team that does it. Book a free 15-minute
                call and we&apos;ll get you taken care of.
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
