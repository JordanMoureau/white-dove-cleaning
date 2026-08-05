import { FaStar } from "react-icons/fa";
import "../styles/sidebar.css";

const services = [
  { label: "Weekly Cleanings", href: "/services/weekly" },
  { label: "Bi-Weekly Cleanings", href: "/services/bi-weekly" },
  { label: "Monthly Cleanings", href: "/services/monthly" },
  { label: "Deep Cleanings", href: "/services/deep" },
  { label: "Move In / Move Out Cleans", href: "/services/move" },
];

const topRated = [
  { label: "Quality of Clean", href: "/about" },
  { label: "Timeliness", href: "/about" },
  { label: "Reliability", href: "/about" },
  { label: "Attention to Detail", href: "/about" },
];

const reviews = [
  {
    quote:
      "I just love these cleaning people! They do what they say plus extra!",
    author: "Cyndi Nelson",
  },
  {
    quote:
      "An excellent experience! Stephanie and her crew are very thorough and very thoughtful. This whole thing has been stressful for me because of some personal issues and Stephanie just stepped in like balm to a wound. They did a great job and they were very fast, which I really appreciate! Thank you!",
    author: "Melanie Sargent",
  },
  {
    quote:
      "The ladies were fantastic! They came in and did all that was asked, the house was sparkling.. Thank you White Dove crew",
    author: "Christy Hall",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* We Provide */}
      <div>
        <h2 className="sidebar-heading">We Provide…</h2>
        <ul className="sidebar-links">
          {services.map((s) => (
            <li key={s.label}>
              <a href={s.href}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Rated For */}
      <div>
        <div className="sidebar-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <h2 className="sidebar-heading">We&apos;re Top Rated For…</h2>
        <ul className="sidebar-links">
          {topRated.map((r) => (
            <li key={r.label}>
              <a href={r.href}>{r.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div>
        <h3 className="sidebar-heading">Some of Our Recent Reviews</h3>
        <div className="sidebar-reviews">
          {reviews.map((r, i) => (
            <div className="sidebar-review" key={i}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <cite>-{r.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
