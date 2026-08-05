import SideBar from "@/app/components/sideBar";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/services.css";

const canonical = "https://whitedovecleaningnw.com/services/recurring-cleaning";

export const metadata = {
  title:
    "Recurring House Cleaning in Spokane & Coeur d'Alene | White Dove Cleaning",
  description:
    "Weekly and bi-weekly house cleaning services in Spokane, Coeur d'Alene, and Tacoma. White Dove Cleaning NW keeps your home consistently clean — on schedule, every time.",
  alternates: { canonical },
  openGraph: {
    title: "Recurring House Cleaning | Spokane & Coeur d'Alene",
    description:
      "Reliable weekly and bi-weekly cleaning for busy households in Spokane, Coeur d'Alene, and Tacoma. Book a free call with White Dove Cleaning NW.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recurring house cleaning services in Spokane and Coeur d'Alene",
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
    name: "Recurring House Cleaning Spokane & Coeur d'Alene",
    isPartOf: { "@id": "https://whitedovecleaningnw.com/#website" },
    description:
      "Weekly and bi-weekly recurring house cleaning services offered by White Dove Cleaning NW in Spokane, Coeur d'Alene, and Tacoma.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recurring House Cleaning",
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
      "Consistent weekly and bi-weekly house cleaning covering kitchens, bathrooms, living areas, and bedrooms throughout Spokane and Coeur d'Alene.",
  },
];

export default function RecurringCleaningPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="recurring-services">
        <div className="container">
          <h1>Recurring House Cleaning in Spokane &amp; Coeur d&apos;Alene</h1>
          <h2>
            Weekly and bi-weekly cleaning that keeps your home consistently
            clean — without you having to think about it.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/services/deep-cleaning">
          Starting fresh? We recommend a Deep Clean before your first recurring
          visit
        </a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>
                Weekly &amp; Bi-Weekly House Cleaning in Spokane &amp; Coeur
                d&apos;Alene
              </h2>
              <p>
                Recurring cleaning is our most popular service — and for good
                reason. Life is busy. Between work, kids, errands, and
                everything else on your plate, finding time to clean your home
                thoroughly and consistently just doesn&apos;t happen. White Dove
                Cleaning NW steps in so you don&apos;t have to choose between a
                clean home and the rest of your life.
              </p>
              <p>
                We serve homeowners across Spokane, Spokane Valley, Coeur
                d&apos;Alene, Puyallup, and Tacoma with dependable weekly and
                bi-weekly cleaning schedules designed to keep your home in
                consistently great shape — not just clean once and forgotten.
              </p>
            </div>

            {/* HOW IT WORKS */}
            <div className="section">
              <h2>How Our Recurring Cleaning Service Works</h2>
              <p>
                Getting started is simple. First, we schedule a free 15-minute
                call to learn about your home, your schedule, and what matters
                most to you. From there, we build a cleaning plan tailored to
                your space and set you up on a regular schedule — weekly or
                bi-weekly, depending on what fits your household best.
              </p>
              <p>
                If your home hasn&apos;t had a professional clean in a while, we
                recommend starting with a{" "}
                <a href="/services/deep-cleaning">deep cleaning</a> to get
                everything to a solid baseline. That way, every recurring visit
                after that is efficient, thorough, and consistent — maintaining
                the standard rather than catching up to it.
              </p>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="section">
              <h2>What&apos;s Included in Every Recurring Visit</h2>
              <p>
                Every scheduled visit covers the full routine — kitchens,
                bathrooms, living areas, and bedrooms cleaned with the same
                attention every time. In the kitchen we wipe counters, clean
                appliance exteriors, scrub the sink, and clean stovetop
                surfaces. Bathrooms get a full scrub including toilets, sinks,
                tubs, showers, and mirrors. Living areas and bedrooms are
                dusted, vacuumed, and tidied throughout.
              </p>
              <p>
                No guessing what got done. No chasing someone down when they
                miss something. You get a consistent clean on a reliable
                schedule, using eco-friendly products that are safe for your
                family and your pets. We show up when we say we will — and we do
                what we said we&apos;d do, every single visit.
              </p>
            </div>

            {/* WEEKLY VS BI-WEEKLY */}
            <div className="section">
              <h2>Weekly vs. Bi-Weekly — Which Schedule Is Right for You?</h2>
              <p>
                Weekly cleaning is ideal for larger households, families with
                young children or pets, or anyone who simply wants their home to
                feel consistently fresh at all times. If your home sees a lot of
                daily activity and builds up quickly between cleans, weekly is
                the right fit.
              </p>
              <p>
                Bi-weekly cleaning — every two weeks — works well for smaller
                households, couples, or individuals who maintain a reasonably
                tidy home between visits and just want consistent professional
                upkeep. It&apos;s our most popular schedule and a great starting
                point if you&apos;re new to recurring cleaning. Not sure which
                is right for you? We&apos;ll help you figure it out on your free
                call.
              </p>
            </div>

            {/* SERVICE AREA */}
            <div className="section">
              <h2>
                Serving Spokane, Coeur d&apos;Alene, Tacoma &amp; Surrounding
                Areas
              </h2>
              <p>
                We provide weekly and bi-weekly house cleaning throughout
                Spokane, Spokane Valley, Coeur d&apos;Alene, Puyallup, Tacoma,
                and surrounding communities. Our team is background-checked,
                trained, and committed to showing up consistently — because
                consistent cleaning only works if you can count on your cleaning
                team.
              </p>
              <p>
                If you&apos;re not sure whether we serve your neighborhood,
                reach out and we&apos;ll confirm quickly. We&apos;re always
                happy to help you figure out the right fit, even if it means
                pointing you toward one of our trusted{" "}
                <a href="/service-area">referral partners in the area</a>.
              </p>
              <a href="/service-area" className="underline-link">
                View our full service area →
              </a>
            </div>

            {/* WHY WHITE DOVE */}
            <div className="section">
              <h2>
                Why Spokane &amp; Coeur d&apos;Alene Homeowners Trust White Dove
                for Recurring Cleaning
              </h2>
              <p>
                There&apos;s a difference between a cleaning company that shows
                up and one you can actually rely on. White Dove Cleaning NW is
                locally owned, faith-driven, and built around one simple
                standard: serving you well is our number one priority. Our
                recurring clients don&apos;t just hire us once — they stay with
                us because we&apos;re consistent, communicative, and genuinely
                invested in keeping their homes in great shape.
              </p>
              <p>
                If you&apos;re ready to get your weekends back and stop thinking
                about when the house is going to get cleaned, we&apos;d love to
                help. Book a free 15-minute call and we&apos;ll get you set up
                with a plan that works for your home and your life.
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
