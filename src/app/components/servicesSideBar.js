import { FaCheck } from "react-icons/fa";
import "../styles/sidebar.css";

const regularCleaning = [
  "Dust surfaces and decorative items",
  "Spot wipe surfaces as needed",
  "Clean mirrors and glass tables",
  "Sweep and vacuum floors",
  "Vacuum and shake out rugs",
  "Damp mop floors",
  "Make beds",
  "Change sheets on one bed when clean sheets are left out",
  "Take out garbage and recycling",
  "Clean microwave inside and out",
  "Clean stovetop",
  "Wipe countertops and backsplash",
  "Wipe down small appliances",
  "Clean fronts of appliances",
  "Clean kitchen sink and polish faucet",
  "Scrub showers and tubs",
  "Clean toilets inside, outside, and behind",
  "Clean bathroom counters and sinks",
  "Clean and polish bathroom faucets and mirrors",
];

const asNeededCleaning = [
  "Quick dust blinds",
  "Dust baseboards and door moldings",
  "Dust chandeliers and light fixtures",
  "Dust picture frames",
  "Clean kitchen window",
  "Clean back slider and front door glass",
  "Remove cobwebs",
];

const deepCleaning = [
  "Clean windows and tracks",
  "Individually clean blinds",
  "Spot clean walls, baseboards, and doors",
  "Clean light switches",
  "Clean light fixtures",
  "Clean HVAC vent covers",
  "Clean tile grout",
  "Vacuum couches and under cushions",
  "Vacuum or mop under furniture when accessible",
  "Clean inside oven",
  "Clean inside refrigerator and freezer",
  "Clean behind and around appliances when added",
  "Clean cupboard fronts",
  "Clean bathroom vent fan covers",
];

export default function ServicesSidebar() {
  return (
    <aside className="sidebar">
      {/* REGULAR CLEANING */}
      <div>
        <h2 className="sidebar-heading">Regular Cleaning Includes…</h2>

        <ul className="sidebar-links">
          {regularCleaning.map((item) => (
            <li key={item}>
              <FaCheck className="sidebar-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* AS NEEDED */}
      <div>
        <h2 className="sidebar-heading">As Needed…</h2>

        <ul className="sidebar-links">
          {asNeededCleaning.map((item) => (
            <li key={item}>
              <FaCheck className="sidebar-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* DEEP CLEANING */}
      <div>
        <h2 className="sidebar-heading">Deep Cleaning Options…</h2>

        <ul className="sidebar-links">
          {deepCleaning.map((item) => (
            <li key={item}>
              <FaCheck className="sidebar-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a href="/services/deep-cleaning" className="underline-link">
          Learn more about deep cleaning →
        </a>
      </div>
    </aside>
  );
}
