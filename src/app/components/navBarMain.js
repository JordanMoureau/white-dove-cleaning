"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "About White Dove", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Move In / Move Out", href: "/services/move-in-move-out" },
      { label: "Recurring Cleaning", href: "/services/recurring-cleaning" },
      { label: "Residential Cleaning", href: "/services/residential-cleaning" },
    ],
  },
  { label: "Service Area", href: "/service-area" },

  { label: "Contact", href: "/contact" },
  // {
  //   label: "Customer Portal",
  //   href: "#",
  //   dropdown: [
  //     { label: "House Cleaning", href: "/house-cleaning" },
  //     { label: "Lifeproof Your Home", href: "/lifeproof-your-home" },
  //     { label: "Payments", href: "/payments" },
  //   ],
  // },
];

export default function NavBar({ color = "inherit" }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const pathname = usePathname();

  const alternateNav = pathname === "/contact";

  const navColor = {
    color: alternateNav ? "#192e57" : "white",
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href={"/"}>
          <img
            src="/logo.png"
            alt="White Dove Cleaning Northwest specializes in weekly and bi-weekly cleanings in Spokane and Coeur d'Alene"
          />
        </Link>
      </div>

      <div className="links">
        {links.map((link) =>
          link.dropdown ? (
            <div key={link.label} className="dropdown-wrapper">
              <div className="dropdown-trigger" style={navColor}>
                <a href={link.href === "#" ? "/services" : link.href}>
                  {link.label}
                </a>
                <span onClick={() => toggleDropdown(link.label)}>▾</span>
              </div>
              {openDropdown === link.label && (
                <div className="dropdown-menu">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="dropdown-item"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={navColor}
            >
              {link.label}
            </a>
          )
        )}
        <Link
          href="https://calendly.com/whitedovecleaning/15-minute-call-to-get-help-cleaning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="secondary-button">Book A Clean</div>
        </Link>
      </div>
    </div>
  );
}
