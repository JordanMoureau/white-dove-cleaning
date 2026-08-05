import BlogLinks from "@/app/components/BlogLinks";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import InlineOffer from "@/app/components/InlineOffer";

const canonical = "https://whitedovecleaningnw.com/lifeproof-your-home";

export const metadata = {
  title:
    "Lifeproof Your Home | Ceramic Surface Protection by White Dove Cleaning",
  description:
    "Protect stainless steel, appliances, glass, sinks, and other hard surfaces with Lifeproof non-toxic ceramic coating from White Dove Cleaning Northwest.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Lifeproof Your Home With White Dove Cleaning",
    description:
      "Learn how Lifeproof ceramic coating helps protect household surfaces from fingerprints, spills, hard water, soap scum, and everyday buildup.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lifeproof ceramic surface treatment by White Dove Cleaning",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Lifeproof Ceramic Surface Treatment",
    description:
      "A non-toxic ceramic coating treatment for protecting household surfaces from fingerprints, food spills, hard water, spotting, and soap scum.",
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
      name: "White Dove Cleaning Northwest",
      url: "https://whitedovecleaningnw.com/",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Spokane",
      },
      {
        "@type": "City",
        name: "Spokane Valley",
      },
      {
        "@type": "City",
        name: "Coeur d'Alene",
      },
      {
        "@type": "City",
        name: "Tacoma",
      },
      {
        "@type": "City",
        name: "Puyallup",
      },
    ],
    serviceType: "Ceramic Surface Protection",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "10",
      highPrice: "60",
      offerCount: "12",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Lifeproof Your Home",
    description:
      "Information about Lifeproof ceramic coating treatments offered by White Dove Cleaning Northwest.",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    mainEntity: {
      "@id": `${canonical}#service`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Blog",
        item: "https://whitedovecleaningnw.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Lifeproof Your Home",
        item: canonical,
      },
    ],
  },
];

const surfacePrices = [
  {
    name: "Front of Refrigerator",
    price: "$30",
  },
  {
    name: "Inside Refrigerator",
    price: "$60",
  },
  {
    name: "Front of Dishwasher",
    price: "$20",
  },
  {
    name: "Front of Oven",
    price: "$20",
  },
  {
    name: "Stovetop",
    price: "$30",
  },
  {
    name: "Front of Microwave",
    price: "$10",
  },
  {
    name: "Inside Microwave",
    price: "$20",
  },
  {
    name: "Range Hood",
    price: "$15–$30",
  },
  {
    name: "Kitchen Sink",
    price: "$15",
  },
  {
    name: "Window Above Sink",
    price: "$15",
  },
  {
    name: "Shower Glass Doors",
    price: "$30–$40",
  },
  {
    name: "Bathroom Sink",
    price: "$10",
  },
  {
    name: "Mirrors",
    price: "$10–$20",
  },
];

export default function LifeproofYourHomePage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="hero-services">
        <div className="container">
          <h1>Lifeproof Your Home</h1>
          <h2>
            Protect frequently used surfaces from fingerprints, spills, hard
            water, soap scum, and everyday buildup.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/contact">Ask About Lifeproof Surface Treatment</a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <article className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>Non-Toxic Ceramic Protection for Household Surfaces</h2>

              <p>
                Lifeproof is a non-toxic ceramic coating treatment that can be
                applied to many of the hard surfaces throughout your home. It
                creates a protective barrier that helps reduce fingerprints,
                smudges, food residue, water spots, hard-water buildup, and soap
                scum.
              </p>

              <p>
                Before the treatment is applied, White Dove Cleaning thoroughly
                cleans and prepares the selected surface. We then apply two
                coats to create the strongest possible bond and provide better
                protection and longevity.
              </p>

              <p>
                Once treated, many everyday marks can be removed with a simple
                wipe rather than repeated scrubbing or heavy applications of
                specialty cleaner.
              </p>

              <InlineOffer />
            </div>

            {/* PROCESS */}
            <div className="section">
              <h2>How the Lifeproof Treatment Process Works</h2>

              <h3>Step 1: Thorough Surface Cleaning</h3>

              <p>
                The surface must be completely cleaned before treatment. Dirt,
                grease, hard-water residue, soap scum, and previously applied
                polishing products can interfere with the ceramic coating and
                prevent it from bonding correctly.
              </p>

              <h3>Step 2: Surface Preparation</h3>

              <p>
                We prepare the surface according to its material and condition.
                Stainless-steel appliances, glass, sinks, and appliance
                interiors may each require a slightly different cleaning
                approach before coating.
              </p>

              <h3>Step 3: Two Protective Coats</h3>

              <p>
                White Dove Cleaning applies two coats of Lifeproof treatment.
                This helps create the best possible bond, lifespan, and
                protection for the selected surface.
              </p>

              <h3>Step 4: Sealing and Curing</h3>

              <p>
                The treated surface cannot be touched for approximately two
                hours while it seals. We recommend avoiding normal use for a
                total of 12 hours so the coating has adequate time to cure.
              </p>

              <h3>Step 5: Reapplication Tracking</h3>

              <p>
                The expected lifespan varies based on the type of surface and
                how frequently it is used. White Dove management can track the
                expected life of the treatment and contact you when it may be
                time to schedule reapplication.
              </p>
            </div>

            {/* STAINLESS */}
            <div className="section">
              <h2>Lifeproof Treatment for Stainless Steel</h2>

              <p>
                Stainless-steel appliances and fixtures can look beautiful, but
                they also show fingerprints, smudges, and water marks almost
                immediately. Lifeproof can be applied to stainless-steel
                refrigerator doors, dishwashers, ovens, microwaves, range hoods,
                and faucets.
              </p>

              <p>
                The protective coating helps prevent marks from bonding as
                strongly to the surface. When fingerprints or smudges appear,
                they can often be wiped away with a damp microfiber cloth
                instead of requiring a full application of stainless-steel
                cleaner.
              </p>

              <p>
                A Lifeproof treatment on stainless steel may last for up to 12
                months, depending on use and maintenance.
              </p>
            </div>

            {/* APPLIANCES */}
            <div className="section">
              <h2>Protect Appliance Interiors From Food Spills</h2>

              <p>
                Lifeproof can also be applied inside selected appliances,
                including refrigerators and microwaves, as well as to stovetop
                surfaces.
              </p>

              <p>
                These areas regularly encounter spills, splatters, crumbs,
                grease, and food residue. The ceramic treatment helps make those
                messes easier to wipe away before they become stubborn buildup.
              </p>

              <p>
                Treatments applied to appliance interiors and cooking surfaces
                generally have an expected lifespan of approximately four to six
                months.
              </p>
            </div>

            {/* GLASS */}
            <div className="section">
              <h2>Protect Glass From Hard Water and Soap Scum</h2>

              <p>
                Glass surfaces, particularly shower doors, can quickly develop
                cloudy hard-water deposits, spotting, and soap scum. Lifeproof
                creates a protective coating that helps prevent those materials
                from bonding as strongly to the glass.
              </p>

              <p>
                Regular maintenance is still necessary, but treated glass is
                generally easier to wipe down and keep clear between deeper
                cleanings.
              </p>

              <p>
                Lifeproof treatment on glass may last approximately three to six
                months, depending on water hardness and frequency of use.
              </p>
            </div>

            {/* SINKS */}
            <div className="section">
              <h2>Protect Kitchen and Bathroom Sinks</h2>

              <p>
                Kitchen and bathroom sinks are exposed to water, soap, food,
                toothpaste, cosmetics, and other residue throughout the day.
                Lifeproof can help reduce water spots, hard-water buildup, and
                food sticking to the sink surface.
              </p>

              <p>
                Treated sinks remain easier to maintain because ordinary marks
                and residue can often be wiped away more quickly. The expected
                lifespan of a sink treatment ranges from approximately two to
                six months, depending on how heavily the sink is used.
              </p>
            </div>

            {/* PRICING */}
            <div className="section">
              <h2>Lifeproof Surface Treatment Prices</h2>

              <p>
                Lifeproof pricing is based on the surface being treated, its
                size, and the amount of preparation required. Current starting
                prices include:
              </p>

              <div className="service-price-list">
                {surfacePrices.map((surface) => (
                  <div className="service-price-item" key={surface.name}>
                    <h3>{surface.name}</h3>
                    <p>{surface.price}</p>
                  </div>
                ))}
              </div>

              <p>
                Final pricing may vary based on surface size, current condition,
                accessibility, and the amount of cleaning required before the
                ceramic coating can be applied.
              </p>
            </div>

            {/* SINK RESULTS */}
            <div className="section">
              <h2>Lifeproof Results on a Frequently Used Kitchen Sink</h2>

              <p>
                One of White Dove Cleaning&apos;s original Lifeproof tests was
                completed on a kitchen sink used regularly throughout the day.
                The home had very hard water, and the sink typically developed
                visible hard-water residue and grime between monthly cleanings.
              </p>

              <p>
                The sink was thoroughly scrubbed and then treated with
                Lifeproof. Immediately after treatment, the finish appeared
                noticeably shinier and cleaner.
              </p>

              <p>
                One week later, the sink remained visibly improved despite
                frequent use and regular exposure to water. At the two-week
                check, the surface was dried for inspection and continued to
                hold up well.
              </p>
            </div>

            {/* DISHWASHER RESULTS */}
            <div className="section">
              <h2>Lifeproof Results on a Stainless-Steel Dishwasher</h2>

              <p>
                White Dove Cleaning also tested Lifeproof on a stainless-steel
                dishwasher that was loaded and handled repeatedly throughout the
                day.
              </p>

              <p>
                Before treatment, the dishwasher was normally cleaned every
                couple of weeks with stainless-steel cleaner. To prepare the
                surface, all existing cleaner and polishing residue was removed
                before the Lifeproof coating was applied.
              </p>

              <p>
                After one week, the dishwasher remained shiny. A few smudges
                near the handle were removed using only a very damp microfiber
                cloth rather than spraying and polishing the entire appliance.
              </p>

              <p>
                At the two-week update, the frequently touched area near the top
                needed only a quick wipe to return to a clean, even finish.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="section">
              <h2>Why Add Lifeproof to Your Cleaning Service?</h2>

              <p>
                Lifeproof does not eliminate the need to clean, but it can make
                routine maintenance significantly easier. Protected surfaces are
                less likely to hold tightly onto fingerprints, food residue,
                water spots, and soap buildup.
              </p>

              <ul>
                <li>Spend less time scrubbing high-use surfaces.</li>
                <li>
                  Reduce repeated use of stainless-steel polish and specialty
                  cleaners.
                </li>
                <li>
                  Help protect surfaces from hard water, spills, and everyday
                  residue.
                </li>
                <li>
                  Keep appliances, sinks, mirrors, and glass looking cleaner
                  between appointments.
                </li>
                <li>
                  Pair the treatment with a professional cleaning for proper
                  surface preparation.
                </li>
              </ul>
            </div>

            {/* CARE */}
            <div className="section">
              <h2>How to Care for Lifeproof-Treated Surfaces</h2>

              <p>
                Avoid touching the surface during the initial two-hour sealing
                period and refrain from using it normally for approximately 12
                hours.
              </p>

              <p>
                After curing, many everyday smudges and light marks can be
                removed using a damp microfiber cloth. Avoid abrasive pads,
                harsh scraping tools, or products that may damage either the
                coating or the surface beneath it.
              </p>

              <p>
                Follow any care instructions provided by White Dove Cleaning
                after treatment. Proper maintenance can help the coating remain
                effective for as long as possible.
              </p>
            </div>

            {/* CTA */}
            <div className="section">
              <h2>Schedule a Lifeproof Surface Treatment</h2>

              <p>
                White Dove Cleaning Northwest can clean, prepare, and protect
                many of the most frequently used hard surfaces in your home.
                Lifeproof can be added to eligible surfaces during a cleaning
                appointment or discussed as part of a customized home cleaning
                plan.
              </p>

              <p>
                Contact our team to ask whether your appliances, sinks, mirrors,
                shower glass, or other hard surfaces are suitable for Lifeproof
                treatment.
              </p>

              <a href="/contact" className="underline-link">
                Ask about Lifeproof treatment →
              </a>
            </div>
          </article>
        </div>

        <div className="col-two">
          <BlogLinks />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
