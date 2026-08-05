import "../styles/offerpage.css";
import {
  FaStar,
  FaCalendarAlt,
  FaShieldAlt,
  FaLeaf,
  FaSmileBeam,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaDollarSign,
  FaHeart,
  FaCheckCircle,
  FaThumbsUp,
  FaLock,
  FaBroom,
  FaMedal,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import HousecallProButton from "../components/HouseCallProButton";

// ─────────────────────────────────────────
// SEO METADATA (Next.js App Router)
// Move this to your page.js if SpecialOffer
// is imported as a component rather than
// used directly as the page.
// Update all placeholder URLs before launch.
// ─────────────────────────────────────────

export const metadata = {
  title: "Book a $50 Home Clean | White Dove Cleaning NW",
  description:
    "First-time clients: get your home deep cleaned for just $50. White Dove Cleaning serves Spokane, WA and Coeur d'Alene, ID. This exclusive offer is only available through this page — book now before it's gone.",

  // noindex: this is an exclusive funnel page, not meant to be
  // discovered via search. Remove if you want it indexed.
  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Get a Clean Home for $50 | White Dove Cleaning NW",
    description:
      "Book a 90-minute home clean for just $50. First-time clients only — this offer is exclusive to this page. Serving Spokane, WA and Coeur d'Alene, ID.",
    url: "https://whitedovecleaning.com/offer", // ← update
    siteName: "White Dove Cleaning NW",
    images: [
      {
        url: "https://whitedovecleaning.com/og-offer.jpg", // ← update with real OG image
        width: 1200,
        height: 630,
        alt: "White Dove Cleaning — $50 Home Clean Offer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Get a Clean Home for $50 | White Dove Cleaning NW",
    description:
      "First-time clients: book a 90-minute clean for just $50. Serving Spokane & Coeur d'Alene.",
    images: ["https://whitedovecleaning.com/og-offer.jpg"], // ← update
  },
};

// ─────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://whitedovecleaning.com/#business", // ← update
      name: "White Dove Cleaning NW",
      url: "https://whitedovecleaning.com", // ← update
      telephone: "+15091234567", // ← update
      email: "info@whitedovecleaning.com", // ← update
      image: "https://whitedovecleaning.com/og-offer.jpg", // ← update
      description:
        "Professional home cleaning service serving Spokane, WA and Coeur d'Alene, ID. Background checked, eco-friendly, and satisfaction guaranteed.",
      priceRange: "$$",
      areaServed: [
        {
          "@type": "City",
          name: "Spokane",
          containedInPlace: { "@type": "State", name: "Washington" },
        },
        {
          "@type": "City",
          name: "Coeur d'Alene",
          containedInPlace: { "@type": "State", name: "Idaho" },
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Spokane",
        addressRegion: "WA",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "150",
      },
    },
    {
      "@type": "Offer",
      name: "$50 90-Minute Home Reset",
      description:
        "First-time clients receive a 90-minute home cleaning for $50. Choose to continue with bi-weekly service and $50 is all you pay. Otherwise, the remaining balance is charged after your appointment.",
      price: "50.00",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      seller: {
        "@type": "LocalBusiness",
        name: "White Dove Cleaning NW",
      },
    },
  ],
};

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────

const includedItems = [
  {
    title: "Kitchen & Bathroom Refresh",
    desc: "Counters, sinks, appliances (exteriors), and more.",
  },
  {
    title: "Floors & Surface Cleaning",
    desc: "Vacuuming, mopping, and surface wipe-downs.",
  },
  {
    title: "Dusting & Tidying",
    desc: "We tackle visible dust and straighten up throughout.",
  },
  {
    title: "Customized to Your Home",
    desc: "We focus on the areas that need it most.",
  },
  {
    title: "And More...",
    desc: "Every home is different — just let us know what matters most to you.",
  },
];

const whyItems = [
  { icon: <FaUsers />, label: "Consistent & Trusted Team" },
  { icon: <FaDollarSign />, label: "Upfront Pricing" },
  { icon: <FaSmileBeam />, label: "Satisfaction Guaranteed" },
  { icon: <FaMapMarkerAlt />, label: "Locally Owned & Operated" },
];

const trustItems = [
  { icon: <FaShieldAlt />, label: "Background Checked & Insured" },
  { icon: <FaLeaf />, label: "Eco-Friendly Products" },
  { icon: <FaMedal />, label: "100% Satisfaction Guarantee" },
  { icon: <FaHeart />, label: "Proudly Serving Our Community" },
];

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export default function SpecialOffer() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="offer-container">
        <div className="offer-inner">
          {/* ── TOPPER ── */}
          <div className="offer-topper">
            <p>
              <strong>
                LIMITED TIME OFFER: This offer is available only through this
                page.
              </strong>{" "}
              Book today because you may not see it again.
            </p>
          </div>

          {/* ── HERO ── */}
          <div className="offer-hero">
            <div className="offer-image-block">
              <img
                src="/logo.png"
                alt="White Dove Cleaning Service in Spokane and Coeur d'Alene"
              />
              <div className="offer-hero-reviews">
                <h2>50++</h2>
                <p>Five Star Reviews</p>
                <div className="offer-widge__stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="offer-widge__star">
                      <FaStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="offer-text-hero">
              <h1>Book A Clean Home.</h1>
              <h2>Get back more time for your family.</h2>

              <div className="offer-reset">
                <h2>$50</h2>
                <p>For A 90-Minute Home Reset</p>
              </div>

              <p className="offer-body-text">
                We&apos;ll focus on the areas that matter most so you can enjoy
                a cleaner home and more time with your family.
              </p>

              <div className="simple-transparent">
                <h2>Simple &amp; Transparent</h2>
                <p>
                  Pay $50 today for your 90-minute clean. If you choose to
                  continue with bi-weekly service, $50 is all you pay. If you
                  decide not to continue, the remaining balance for the clean
                  will be charged after your appointment.
                </p>
              </div>

              <HousecallProButton />
            </div>
          </div>

          {/* ── ONLY AVAILABLE THROUGH THIS LINK ── */}
          <div className="offer-exclusive">
            <div className="offer-exclusive__interior">
              <div className="offer-exclusive__icon">
                <IoTime />
              </div>
              <div className="offer-exclusive__text">
                <h2>Only Available Through This Link!</h2>
                <p>
                  This exclusive $50 offer is not available on our main website
                  or anywhere else online. <strong>Book now</strong> to secure
                  your spot before it&apos;s gone.
                </p>
              </div>
            </div>
          </div>

          {/* ── HOW IT WORKS ── */}
          <section className="offer-how">
            <h2 className="offer-how__title">How It Works</h2>
            <div className="offer-how__steps">
              <div className="offer-how__step">
                <div className="offer-how__step-icon">
                  <FaCalendarAlt />
                  <span className="offer-how__step-number">1</span>
                </div>
                <h3>Book Your $50 Clean</h3>
                <p>
                  Choose a time that works for you and pay $50 to reserve your
                  90-minute cleaning.
                </p>
              </div>

              <div className="offer-how__step">
                <div className="offer-how__step-icon">
                  <FaBroom />
                  <span className="offer-how__step-number">2</span>
                </div>
                <h3>We Clean What Matters Most</h3>
                <p>
                  Our team focuses on your top priorities to deliver a
                  noticeable difference.
                </p>
              </div>

              <div className="offer-how__step">
                <div className="offer-how__step-icon">
                  <FaThumbsUp />
                  <span className="offer-how__step-number">3</span>
                </div>
                <h3>Continue or Not — It&apos;s Up to You</h3>
                <p>
                  Love it? Join our bi-weekly service and your $50 is all you
                  pay.
                </p>
              </div>
            </div>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="offer-included">
            <div className="offer-included__top">
              <img
                className="offer-included__image"
                src="/cleaning-gloves.jpg"
                alt="White Dove cleaner working in a Spokane home"
              />

              <div className="offer-included__content">
                <h2 className="offer-included__title">
                  What&apos;s Included In Your 90-Minute Clean
                </h2>
                <div className="offer-included__list">
                  {includedItems.map((item, i) => (
                    <div key={i} className="offer-included__item">
                      <FaCheckCircle className="offer-included__check" />
                      <div className="offer-included__item-text">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="offer-why">
              <h3 className="offer-why__title">
                Why Families Choose White Dove
              </h3>
              <div className="offer-why__list">
                {whyItems.map((item, i) => (
                  <div key={i} className="offer-why__item">
                    <span className="offer-why__item-icon">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── GET YOUR WEEKEND BACK ── */}
          <section className="offer-weekend">
            <img
              className="offer-weekend__image"
              src="/hero.jpeg"
              alt="Family enjoying time together in a clean home"
            />
            <div className="offer-weekend__content">
              <h2>Get Your Saturday Back</h2>
              <p>
                Spend less time cleaning and more time making memories. Let us
                handle the mess.
              </p>
              <div className="offer-weekend__cta-group">
                <HousecallProButton className="offer-weekend__btn" />
                <span className="offer-weekend__secure">
                  <FaLock /> Easy online booking. Secure &amp; private.
                </span>
              </div>
            </div>
            <div className="offer-weekend__dontwait">
              <h4>
                <IoTime /> Don&apos;t Wait!
              </h4>
              <p>
                This special offer won&apos;t last forever. Book now to secure
                your $50 rate.
              </p>
            </div>
          </section>

          {/* ── LOCATION BAR ── */}
          <div className="offer-location">
            <p className="offer-location__label">
              Questions? We&apos;re here to help.
            </p>
            <div className="offer-location__items">
              <a href="tel:+15091234567" className="offer-location__item">
                <FaPhone /> (509) 123-4567
              </a>
              <a
                href="mailto:info@whitedovecleaning.com"
                className="offer-location__item"
              >
                <FaEnvelope /> info@whitedovecleaning.com
              </a>
              <span className="offer-location__item">
                <FaMapMarkerAlt /> Spokane, WA &amp; Coeur d&apos;Alene, ID
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
