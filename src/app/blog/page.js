import Link from "next/link";
import BlogLinks from "../components/BlogLinks";
import JsonLd from "../components/JsonLd";
import ContactForm from "../components/ContactForm";
import InlineOffer from "../components/InlineOffer";
import "../styles/services.css";

const canonical = "https://whitedovecleaningnw.com/blog";

export const metadata = {
  title: "House Cleaning Tips & Resources | White Dove Cleaning Northwest",
  description:
    "Explore professional house cleaning tips, allergy-friendly cleaning advice, eco-friendly practices, and home care resources for Spokane, Tacoma, and Puyallup homeowners.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "House Cleaning Tips & Resources | White Dove Cleaning",
    description:
      "Practical cleaning advice and professional home care resources for homeowners throughout Spokane, Tacoma, and Puyallup.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "House cleaning tips from White Dove Cleaning Northwest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const blogPosts = [
  {
    title: "Lifeproof Your Home",
    excerpt:
      "Learn how Lifeproof ceramic surface treatment helps protect appliances, sinks, shower glass, and other frequently used areas from everyday buildup.",
    href: "/blog/lifeproof-your-home",
  },
  {
    title: "Spokane’s Secrets for Professional-Level Window Cleaning",
    excerpt:
      "Get clearer glass, cleaner tracks, and fewer streaks with practical window-cleaning techniques designed for Spokane homes.",
    href: "/blog/spokanes-secrets-for-professional-level-window-cleaning",
  },
  {
    title: "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
    excerpt:
      "Discover practical ways to reduce harsh chemicals, unnecessary waste, and heavy fragrances while maintaining a fresh home.",
    href: "/blog/the-spokane-homeowners-guide-to-eco-friendly-cleaning-practices",
  },
  {
    title: "The Ultimate Guide to Home Cleaning in Tacoma, WA",
    excerpt:
      "Build a manageable cleaning routine and learn when professional house cleaning can save time and improve your home.",
    href: "/blog/the-ultimate-guide-to-home-cleaning-in-tacoma-wa",
  },
  {
    title: "Top 10 Cleaning Tips for Puyallup Homeowners",
    excerpt:
      "Use these ten straightforward cleaning habits to keep your Puyallup home fresher, healthier, and easier to maintain.",
    href: "/blog/top-10-cleaning-tips-for-puyallup-homeowners",
  },
  {
    title: "Top 10 Cleaning Tips to Keep Your Tacoma Home Allergy-Free",
    excerpt:
      "Reduce dust, pollen, pet dander, moisture, and other common household allergens with a more effective cleaning routine.",
    href: "/blog/top-10-cleaning-tips-to-keep-your-tacoma-home-allergy-free",
  },
  {
    title: "Why Tacoma Residents Trust White Dove Cleaning NW",
    excerpt:
      "See why local homeowners rely on White Dove Cleaning for professional service, dependable scheduling, and careful attention to detail.",
    href: "/blog/why-tacoma-residents-trust-white-dove-cleaning-nw",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "White Dove Cleaning Blog",
    description:
      "House cleaning tips, professional cleaning advice, and home care resources from White Dove Cleaning Northwest.",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    mainEntity: {
      "@id": `${canonical}#blog-list`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonical}#blog-list`,
    name: "White Dove Cleaning Articles",
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://whitedovecleaningnw.com${post.href}`,
      name: post.title,
    })),
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
        item: canonical,
      },
    ],
  },
];

export default function BlogPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="hero-services">
        <div className="container">
          <h1>Cleaning Tips &amp; Home Care Resources</h1>
          <h2>
            Practical advice for cleaner, healthier, and easier-to-manage homes.
          </h2>
        </div>
      </div>

      <div className="accent-cta">
        <Link href="/contact">Request Professional House Cleaning</Link>
      </div>

      <div className="content-container">
        <div className="col-one">
          <main className="content-interior">
            {/* INTRO */}
            <div className="section">
              <h2>Professional Cleaning Advice From White Dove Cleaning</h2>

              <p>
                Keeping a home clean takes more than the occasional burst of
                motivation and a suspicious number of paper towels. A consistent
                routine, the right techniques, and professional support can make
                maintaining your home much easier.
              </p>

              <p>
                Explore cleaning tips, allergy-conscious home care, eco-friendly
                practices, surface protection, and professional cleaning
                guidance for homeowners throughout Spokane, Spokane Valley,
                Tacoma, Puyallup, Coeur d&apos;Alene, and surrounding
                communities.
              </p>

              <InlineOffer />
            </div>

            {/* BLOG POSTS */}
            {blogPosts.map((post) => (
              <article className="section" key={post.href}>
                <h2>
                  <Link href={post.href}>{post.title}</Link>
                </h2>

                <p>{post.excerpt}</p>

                <Link href={post.href} className="underline-link">
                  Read article →
                </Link>
              </article>
            ))}

            {/* FINAL CTA */}
            <div className="section">
              <h2>Ready to Spend Less Time Cleaning?</h2>

              <p>
                White Dove Cleaning Northwest provides recurring cleaning, deep
                cleaning, move-in and move-out cleaning, and customized home
                cleaning services throughout Spokane, Spokane Valley, Coeur
                d&apos;Alene, Tacoma, and Puyallup.
              </p>

              <p>
                Let our team handle the cleaning so you can enjoy a fresher home
                without giving up your evenings and weekends.
              </p>

              <Link href="/contact" className="underline-link">
                Request a free cleaning quote →
              </Link>
            </div>
          </main>
        </div>

        <div className="col-two">
          <BlogLinks />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
