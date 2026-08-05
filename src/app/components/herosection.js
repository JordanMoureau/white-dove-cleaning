import { FaStar } from "react-icons/fa";
import "../styles/herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <h1>
          Top Rated Home Cleaning Services in Pierce County, Spokane, WA and
          Coeur d&apos;Alene, ID
        </h1>

        <p>
          Welcome to White Dove Cleaning NW! We provide top-notch home cleaning
          services in Pierce County and Spokane, WA, including the areas of
          Puyallup, Tacoma, and Spokane. Our professional and reliable team is
          dedicated to delivering exceptional cleaning solutions tailored to
          your needs. Contact us today for a free quote and experience the
          difference in home cleaning services!
        </p>

        <div className="hero-buttons">
          <a href="/about" className="hero-btn-outline">
            Find Out More
          </a>
          <a href="/contact" className="hero-btn-solid">
            Book A Clean
          </a>
        </div>
      </div>
    </section>
  );
}
