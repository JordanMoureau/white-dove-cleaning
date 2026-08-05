import Link from "next/link";
import "../styles/sidebar.css";

const blogPosts = [
  {
    label: "Lifeproof Your Home",
    href: "/blog/lifeproof-your-home",
  },
  {
    label: "Spokane’s Secrets for Professional-Level Window Cleaning",
    href: "/blog/spokanes-secrets-for-professional-level-window-cleaning",
  },
  {
    label: "The Spokane Homeowner’s Guide to Eco-Friendly Cleaning Practices",
    href: "/blog/the-spokane-homeowners-guide-to-eco-friendly-cleaning-practices",
  },
  {
    label: "The Ultimate Guide to Home Cleaning in Tacoma, WA",
    href: "/blog/the-ultimate-guide-to-home-cleaning-in-tacoma-wa",
  },
  {
    label: "Top 10 Cleaning Tips for Puyallup Homeowners",
    href: "/blog/top-10-cleaning-tips-for-puyallup-homeowners",
  },
  {
    label: "Top 10 Cleaning Tips to Keep Your Tacoma Home Allergy-Free",
    href: "/blog/top-10-cleaning-tips-to-keep-your-tacoma-home-allergy-free",
  },
  {
    label: "Why Tacoma Residents Trust White Dove Cleaning NW",
    href: "/blog/why-tacoma-residents-trust-white-dove-cleaning-nw",
  },
];

export default function BlogLinks() {
  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-heading">Cleaning Resources</h2>

        <ul className="sidebar-links">
          {blogPosts.map((post) => (
            <li key={post.href}>
              <Link href={post.href}>{post.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-blog-cta">
        <h2 className="sidebar-heading">Ready for a Cleaner Home?</h2>

        <p>
          Let White Dove Cleaning take care of the cleaning so you can spend
          your time on everything else.
        </p>

        <Link href="/contact" className="underline-link">
          Request a free quote →
        </Link>
      </div>
    </aside>
  );
}
