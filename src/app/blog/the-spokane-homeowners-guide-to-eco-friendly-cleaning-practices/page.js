import BlogLinks from "@/app/components/BlogLinks";
import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/ContactForm";
import InlineOffer from "@/app/components/InlineOffer";

const canonical =
  "https://whitedovecleaningnw.com/the-spokane-homeowners-guide-to-eco-friendly-cleaning-practices";

export const metadata = {
  title: "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
  description:
    "Learn practical eco-friendly cleaning practices for Spokane homes, including safer products, waste reduction, and sustainable cleaning habits.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
    description:
      "Simple, practical ways Spokane homeowners can maintain a cleaner home while reducing harsh chemicals and unnecessary waste.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eco-friendly home cleaning in Spokane, Washington",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical}#article`,
    headline:
      "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
    description:
      "A practical guide to eco-friendly cleaning habits, safer products, and sustainable home care for Spokane homeowners.",
    url: canonical,
    author: {
      "@type": "Organization",
      name: "White Dove Cleaning Northwest",
      url: "https://whitedovecleaningnw.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "White Dove Cleaning Northwest",
      url: "https://whitedovecleaningnw.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://whitedovecleaningnw.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: {
      "@type": "ImageObject",
      url: "https://whitedovecleaningnw.com/og-image.jpg",
      width: 1200,
      height: 630,
    },
    articleSection: "Eco-Friendly Cleaning",
    keywords: [
      "eco-friendly cleaning Spokane",
      "green cleaning Spokane WA",
      "natural cleaning products",
      "sustainable house cleaning",
      "Spokane house cleaning",
      "White Dove Cleaning Northwest",
    ],
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
        name: "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
        item: canonical,
      },
    ],
  },
];

export default function SpokaneEcoFriendlyCleaningGuidePage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="hero-services">
        <div className="container">
          <h1>
            The Spokane Homeowner&apos;s Guide to Eco-Friendly Cleaning
            Practices
          </h1>
          <h2>
            Practical ways to keep your home fresh while reducing harsh
            chemicals and unnecessary waste.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <a href="/contact">Schedule Professional House Cleaning in Spokane</a>
      </div>

      <div className="content-container">
        <div className="col-one">
          <article className="content-interior">
            {/* INTRO */}
            <div className="section">
              <p>
                A clean home should feel comfortable, healthy, and safe for the
                people who live there. For many Spokane homeowners, that means
                finding ways to clean effectively without relying on excessive
                amounts of harsh chemicals, disposable products, and heavily
                scented cleaners.
              </p>

              <p>
                Eco-friendly cleaning does not require replacing every product
                in your cabinet or following an unrealistic routine. Small,
                practical changes can reduce waste, improve indoor air quality,
                and make everyday home care more sustainable.
              </p>

              <p>
                This guide covers straightforward cleaning practices Spokane
                homeowners can use to maintain a fresh home while making more
                thoughtful choices about products, supplies, and water use.
              </p>

              <InlineOffer />
            </div>

            {/* WHY IT MATTERS */}
            <div className="section">
              <h2>Why Eco-Friendly Cleaning Matters</h2>

              <p>
                Traditional household cleaners can be effective, but using more
                product than necessary or combining multiple strong chemicals
                may create irritating fumes and leave residue on frequently
                touched surfaces.
              </p>

              <p>
                Choosing gentler cleaning methods where appropriate can help
                reduce unnecessary chemical exposure, particularly in homes with
                children, pets, or family members who are sensitive to strong
                fragrances.
              </p>

              <p>
                Sustainable cleaning habits can also reduce the amount of
                plastic packaging, paper waste, and water used during routine
                household maintenance.
              </p>
            </div>

            {/* LABELS */}
            <div className="section">
              <h2>Read Cleaning Product Labels Carefully</h2>

              <p>
                Product labels provide important information about ingredients,
                proper use, surface compatibility, ventilation, and safety.
                Avoid assuming that more product will create a better clean.
              </p>

              <p>
                Follow the recommended dilution and application instructions.
                Concentrated products often require only a small amount, and
                using too much may leave behind residue that attracts additional
                dirt.
              </p>

              <p>
                Never mix household cleaning chemicals unless the product
                manufacturer specifically states that it is safe. Certain
                combinations can create dangerous fumes.
              </p>
            </div>

            {/* MULTI PURPOSE */}
            <div className="section">
              <h2>Choose Versatile Cleaning Products</h2>

              <p>
                A crowded cabinet full of specialized cleaners is not always
                necessary. A small collection of reliable products can often
                handle most everyday cleaning tasks.
              </p>

              <p>
                A quality all-purpose cleaner may work for sealed countertops,
                cabinet fronts, tables, and many other washable surfaces. Glass
                cleaner, bathroom cleaner, dish soap, and a suitable floor
                product can cover much of the remaining routine.
              </p>

              <p>
                Before using any cleaner, confirm that it is appropriate for the
                surface. Natural stone, unfinished wood, and specialty finishes
                may require specific care.
              </p>
            </div>

            {/* REUSABLE SUPPLIES */}
            <div className="section">
              <h2>Replace Disposable Supplies With Reusable Options</h2>

              <p>
                Paper towels and disposable wipes are convenient, but they can
                create a large amount of household waste over time. Washable
                microfiber cloths are useful for dusting, wiping surfaces,
                polishing fixtures, and cleaning mirrors.
              </p>

              <p>
                Assign cloths by task or room to reduce cross-contamination. For
                example, use separate cloths for kitchens, bathrooms, glass, and
                general dusting.
              </p>

              <p>
                Wash reusable cleaning cloths after use and allow them to dry
                completely before storing them. Reusable mop pads and dusting
                heads can also reduce reliance on single-use products.
              </p>
            </div>

            {/* WATER */}
            <div className="section">
              <h2>Use Water More Efficiently</h2>

              <p>
                Cleaning does not require leaving the faucet running throughout
                the entire process. Fill a bucket or sink with the amount of
                water needed for the task, and turn off the tap while scrubbing
                or wiping.
              </p>

              <p>
                Avoid soaking surfaces unnecessarily. In many cases, a damp
                cloth is enough to remove dust, fingerprints, and light residue.
                This is especially important when cleaning wood, laminate, and
                other moisture-sensitive materials.
              </p>

              <p>
                Using the correct amount of cleaning solution also reduces the
                amount of rinsing needed afterward.
              </p>
            </div>

            {/* AIR */}
            <div className="section">
              <h2>Improve Indoor Air While You Clean</h2>

              <p>
                Dust, pet dander, pollen, and other particles can collect on
                floors, furniture, vents, and fabrics. Regular dusting and
                vacuuming can improve how the home feels and reduce visible
                buildup.
              </p>

              <p>
                Use a vacuum with a well-maintained filter, and empty or replace
                the collection container as recommended. A clogged filter can
                reduce performance and allow fine particles to circulate back
                into the room.
              </p>

              <p>
                When weather and outdoor air conditions allow, open windows
                briefly during cleaning to improve ventilation. During periods
                of wildfire smoke or poor air quality, keep windows closed and
                rely on indoor filtration instead.
              </p>
            </div>

            {/* FRAGRANCE */}
            <div className="section">
              <h2>Reduce Heavy Fragrances</h2>

              <p>
                A strong scent is not the same thing as cleanliness. Fragranced
                sprays may temporarily cover odors without removing the source
                of the problem.
              </p>

              <p>
                Focus first on removing trash, washing fabrics, cleaning pet
                areas, wiping spills, and controlling moisture. These steps
                address the cause of odors rather than simply masking them.
              </p>

              <p>
                Unscented or lightly scented products may be more comfortable
                for households with allergies, asthma, pets, or fragrance
                sensitivities.
              </p>
            </div>

            {/* KITCHEN */}
            <div className="section">
              <h2>Prevent Kitchen Waste and Buildup</h2>

              <p>
                Cleaning kitchen messes promptly reduces the need for stronger
                products later. Wipe spills before they dry, wash dishes before
                food hardens, and clean cooking surfaces after they cool.
              </p>

              <p>
                Check the refrigerator regularly for expired food and forgotten
                leftovers. Keeping shelves organized helps reduce food waste and
                makes spills easier to notice and clean.
              </p>

              <p>
                Use washable containers when possible and clean them thoroughly
                between uses. Regularly wipe refrigerator handles, cabinet
                pulls, counters, and other high-touch kitchen surfaces.
              </p>
            </div>

            {/* BATHROOM */}
            <div className="section">
              <h2>Control Bathroom Moisture Naturally</h2>

              <p>
                Moisture contributes to mildew, odors, and stubborn bathroom
                buildup. Run the exhaust fan during showers and continue using
                it afterward to help reduce humidity.
              </p>

              <p>
                Wipe excess water from shower walls, glass, fixtures, and
                counters. Hang towels where they can dry fully rather than
                leaving them bunched on floors or hooks.
              </p>

              <p>
                Regular maintenance is usually more eco-friendly than waiting
                until heavy buildup requires stronger products and extensive
                scrubbing.
              </p>
            </div>

            {/* DECLUTTER */}
            <div className="section">
              <h2>Declutter Before Buying More Storage</h2>

              <p>
                Cleaning becomes more difficult when surfaces, cabinets, and
                closets are overloaded. Before purchasing additional bins or
                organizers, review what you already own.
              </p>

              <p>
                Donate usable items, recycle appropriate materials, and dispose
                of damaged belongings responsibly. Reducing clutter makes rooms
                easier to dust, vacuum, and maintain.
              </p>

              <p>
                A simpler space often requires fewer cleaning supplies, less
                time, and less effort to keep under control.
              </p>
            </div>

            {/* PROFESSIONAL CLEANING */}
            <div className="section">
              <h2>Ask About Eco-Conscious Professional Cleaning Options</h2>

              <p>
                Professional house cleaning can support a more sustainable home
                routine by keeping dirt and buildup from reaching the point
                where aggressive cleaning is required.
              </p>

              <p>
                When hiring a cleaning service, ask what products and supplies
                the company uses. You can also discuss household sensitivities,
                preferred products, pets, children, and any surfaces that
                require special care.
              </p>

              <p>
                Clear communication helps the cleaning team choose methods that
                fit your home while still delivering a thorough result.
              </p>
            </div>

            {/* CTA */}
            <div className="section">
              <h2>Eco-Conscious House Cleaning in Spokane, WA</h2>

              <p>
                White Dove Cleaning Northwest helps Spokane homeowners maintain
                cleaner, more comfortable homes with professional service
                tailored to their needs. Our team can assist with recurring
                cleaning, deep cleaning, and other household cleaning services.
              </p>

              <p>
                Whether you are trying to reduce harsh products, improve your
                routine, or simply spend less time cleaning, professional
                support can make home care easier and more consistent.
              </p>

              <a href="/contact" className="underline-link">
                Request professional house cleaning in Spokane →
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
