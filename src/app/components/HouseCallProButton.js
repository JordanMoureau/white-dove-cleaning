"use client";

import { FaCalendarAlt } from "react-icons/fa";
import Script from "next/script";

export default function HousecallProButton({
  className = "offer-book-btn",
  children,
}) {
  const openBookingModal = () => {
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    } else {
      console.error("Housecall Pro widget has not loaded yet.");
    }
  };

  return (
    <>
      <button
        className={className}
        data-token="a3a67a1192a6443d88e0a028d5a262b4"
        data-orgname="White-Dove-Cleaning-NW--Spokane"
        onClick={openBookingModal}
      >
        {children ?? (
          <>
            <FaCalendarAlt /> Book Your $50 Clean Now
          </>
        )}
      </button>

      <Script
        id="housecall-pro-booking"
        src="https://online-booking.housecallpro.com/script.js?token=a3a67a1192a6443d88e0a028d5a262b4&orgName=White-Dove-Cleaning-NW--Spokane"
        strategy="afterInteractive"
      />
    </>
  );
}
