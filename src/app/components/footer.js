import Link from "next/link";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="top-foot">
        <h2>White Dove is a Faith Based Business</h2>
        <h2 className="blue">Serving you is our #1 priority</h2>
        <h2>Colossians 3:23</h2>
      </div>
      <footer>
        <div className="footer-inner">
          <div className="row">
            <img
              src="/logo.png"
              alt="white dove cleaning northwest spokane coeur d alene and tacoma cleaning service"
            />

            <h2>
              White Dove Cleaning Is Spokane, Tacoma & Coeur D'Alene's Go-To For
              Weekly & Bi-Weekly Cleaning Services
            </h2>
          </div>

          <div className="lower-row">
            <div className="col">
              <Link href="/services">Our Services</Link>
              <div className="indented">
                <Link href="/services/deep-cleaning">Deep Cleaning</Link>
                <Link href="/services/move-in-move-out">
                  Move In / Move Out
                </Link>
                <Link href="/services/recurring-cleaning">
                  Recurring Cleaning
                </Link>
                <Link href="/services/residential-cleaning">
                  Residential Cleaning
                </Link>
              </div>
            </div>

            <div className="col">
              <Link href="/about">Customer Care</Link>
              <div className="indented">
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact White Dove</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>

            <div className="cta-container">
              <Link href={"/"} className="secondary-button">
                Book A Call
              </Link>
              <Link href="/contact" className="secondary-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-inner lower row">
          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link href="/terms-of-service">Terms of Service</Link>

          <p>© {new Date().getFullYear()} White Dove Cleaning NW</p>

          <Link
            href="https://freelancejordan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site built by Freelance Jordan
          </Link>
        </div>
      </footer>
    </>
  );
}
