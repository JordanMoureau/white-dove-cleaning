"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

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
];

export default function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-bar">
        <Link href="/" className="mobile-logo">
          <img
            src="/logo.png"
            alt="White Dove Cleaning Northwest specializes in weekly and bi-weekly cleanings in Spokane and Coeur d'Alene"
          />
        </Link>

        <button
          className="mobile-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}>
        <div className="mobile-drawer-inner">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="mobile-dropdown">
                <div className="mobile-dropdown-trigger">
                  <a href={link.href} className="mobile-nav-link">
                    {link.label}
                  </a>
                  <button
                    className={`mobile-chevron ${
                      openDropdown === link.label ? "mobile-chevron--open" : ""
                    }`}
                    onClick={() => toggleDropdown(link.label)}
                    aria-label={`Toggle ${link.label} submenu`}
                  >
                    <FiChevronDown />
                  </button>
                </div>

                {openDropdown === link.label && (
                  <div className="mobile-dropdown-items">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="mobile-dropdown-item"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.label} href={link.href} className="mobile-nav-link">
                {link.label}
              </a>
            )
          )}

          <a
            href="https://calendly.com/whitedovecleaning/15-minute-call-to-get-help-cleaning"
            className="mobile-book-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Call
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={toggleMenu} />}
    </nav>
  );
}
