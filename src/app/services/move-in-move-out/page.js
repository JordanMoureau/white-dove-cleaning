import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/services/move-in-move-out";

export const metadata = {
  title:
    "Move-In & Move-Out Cleaning Services in Spokane & Coeur d'Alene | White Dove Cleaning",
  description:
    "Professional move-in and move-out cleaning in Spokane, Coeur d'Alene, and Tacoma. White Dove Cleaning NW cleans every corner so you can focus on your move.",
  alternates: { canonical },
  openGraph: {
    title: "Move-In & Move-Out Cleaning | Spokane & Coeur d'Alene",
    description:
      "Moving in or out? White Dove Cleaning NW handles the full clean so you don't have to. Serving Spokane, Coeur d'Alene, and Tacoma.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Move-in and move-out cleaning services in Spokane and Coeur d'Alene",
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
    name: "Move-In & Move-Out Cleaning Services Spokane & Coeur d'Alene",
    isPartOf: { "@id": "https://whitedovecleaningnw.com/#website" },
    description:
      "Professional move-in and move-out cleaning services offered by White Dove Cleaning NW in Spokane, Coeur d'Alene, and Tacoma.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Move-In & Move-Out Cleaning Services",
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
      "Full move-in and move-out cleaning including inside cabinets, appliances, bathrooms, closets, and every surface in between.",
  },
];

export default function MoveInMoveOutPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="move-services">
        <div className="container">
          <h1>
            Move-In &amp; Move-Out Cleaning in Spokane &amp; Coeur d&apos;Alene
          </h1>
          <h2>
            One less thing on your list — we handle the clean so you can focus
            on the move.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/services/deep-cleaning">
          Need a deep reset without a move? See Our Deep Cleaning Services
        </a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>
                Move-In &amp; Move-Out Cleaning Services in Spokane &amp; Coeur
                d&apos;Alene
              </h2>
              <p>
                Moving is one of the most stressful things a person can do — and
                cleaning the property is usually the last thing you want to deal
                with on top of everything else. White Dove Cleaning NW takes
                that task completely off your plate. We provide thorough,
                professional move-in and move-out cleaning for homeowners,
                renters, landlords, and property managers throughout Spokane,
                Coeur d&apos;Alene, Puyallup, and Tacoma.
              </p>
              <p>
                Whether you&apos;re leaving a place behind or starting fresh in
                a new one, we come in and clean every surface, every corner, and
                every space that needs attention — so the property is genuinely
                clean, not just surface-level presentable.
              </p>
            </div>

            {/* WHO IT'S FOR */}
            <div className="section">
              <h2>Who Our Move Cleaning Service Is For</h2>
              <p>
                Our move cleaning service is built for anyone in the middle of a
                transition. Renters use it to get their security deposit back
                without the stress of scrubbing every inch themselves.
                Homeowners use it to prepare a property for sale or hand it off
                in spotless condition. Landlords and property managers use it to
                turn a unit between tenants quickly and professionally.
              </p>
              <p>
                If you&apos;re moving into a new space and want to start fresh
                before bringing in your furniture and family, a move-in clean
                gives you that peace of mind. And if you need a deeper level of
                ongoing care after your move, our{" "}
                <a href="/services/recurring-cleaning">
                  recurring cleaning plans
                </a>{" "}
                are a natural next step once you&apos;re settled in.
              </p>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="section">
              <h2>What&apos;s Included in Our Move-In &amp; Move-Out Clean</h2>
              <p>
                Our move cleaning is thorough by design. In the kitchen we clean
                inside the oven, microwave, and refrigerator, wipe down all
                cabinet interiors and exteriors, scrub the sink and fixtures,
                and degrease every surface that has accumulated buildup.
                Bathrooms receive a full deep scrub — toilets, tubs, showers,
                tile, grout, mirrors, and fixtures.
              </p>
              <p>
                Throughout the rest of the property we clean inside closets and
                cabinets, wipe baseboards and door frames, clean window sills
                and ledges, dust ceiling fans and light fixtures, and vacuum and
                mop all floors. We use eco-friendly products that are safe for
                families and pets — no harsh chemicals left behind in a space
                someone is about to move into. If you&apos;re not sure whether
                your situation calls for a move clean or a{" "}
                <a href="/services/deep-cleaning">deep cleaning</a>, we&apos;re
                happy to help you figure out the right fit.
              </p>
            </div>

            {/* DEPOSIT / SALE */}
            <div className="section">
              <h2>Get Your Deposit Back &amp; Leave the Right Impression</h2>
              <p>
                One of the most common reasons renters lose part of their
                security deposit is cleaning — not damage, just cleaning.
                Landlords notice. Property managers document. A professional
                move-out clean from White Dove gives you the best possible shot
                at a full deposit return because we clean to the standard that
                actually gets inspected.
              </p>
              <p>
                For sellers, first impressions matter — and a spotless home
                photographs better, shows better, and signals to buyers that the
                property has been well maintained. Whether you&apos;re working
                with a realtor or selling on your own, our move-out clean is a
                straightforward investment that pays off.
              </p>
            </div>

            {/* SERVICE AREA */}
            <div className="section">
              <h2>
                Serving Spokane, Coeur d&apos;Alene, Tacoma &amp; Surrounding
                Communities
              </h2>
              <p>
                We provide move-in and move-out cleaning throughout Spokane,
                Spokane Valley, Coeur d&apos;Alene, Puyallup, Tacoma, and the
                surrounding Pacific Northwest region. Our team is
                background-checked, experienced, and focused on delivering
                results that hold up to inspection — literally.
              </p>
              <p>
                Timing matters when you&apos;re moving, and we understand that.
                Reach out as early as possible to get on our schedule, and
                we&apos;ll work with you to find a date that fits your move
                timeline.
              </p>
              <a href="/service-area" className="underline-link">
                View our full service area →
              </a>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>
                Why Spokane &amp; Coeur d&apos;Alene Choose White Dove for Move
                Cleaning
              </h2>
              <p>
                White Dove Cleaning NW is locally owned and built on a
                straightforward promise — serving you well is our number one
                priority. We don&apos;t cut corners on a move clean any more
                than we do on a routine visit. Every property we clean gets the
                same thorough attention, and we don&apos;t call the job done
                until it actually is.
              </p>
              <p>
                Moving is stressful enough. Let us handle the clean. Book a free
                15-minute call and we&apos;ll get you on the schedule and taken
                care of.
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
