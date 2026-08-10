"use client";

import { FaStar } from "react-icons/fa";
import "../styles/offerwidge.css";

export default function OfferWidge() {
  return (
    <div className="offer-widge">
      <div className="offer-widge__body">
        <div className="offer-widge__image">
          <img
            src="/gettimeback.jpeg"
            alt="Parent and child enjoying a clean home"
          />
        </div>
        <div className="offer-widge__content">
          <h2 className="offer-widge__headline">
            Get a Clean Home This Week & Get Back Time With Your Family!
          </h2>
          <p className="offer-widge__body-copy">
            First Time Clients get $150 in cleaning credit with a bi-weekly sign
            up. Get your home deep cleaned this week risk free! Decide later if
            you want to sign up for bi-weekly cleanings.
          </p>
          <a
            className="offer-widge__cta"
            href="https://calendly.com/whitedovecleaning/15-minute-call-to-get-help-cleaning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Clean
          </a>
          <div className="offer-widge__social-proof">
            <div className="offer-widge__stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="offer-widge__star">
                  <FaStar />
                </span>
              ))}
            </div>
            <a
              className="offer-widge__reviews-link"
              href="https://share.google/T1MAr42ye3T906cwW"
            >
              Read Our Reviews
            </a>
          </div>
        </div>
      </div>
      <div className="offer-widge__banner" aria-hidden="true">
        First Time Clients Get $150 In Cleaning Credit! That's a Full Deep
        Clean! Free!
      </div>
    </div>
  );
}
