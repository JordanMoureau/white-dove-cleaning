import JsonLd from "../components/JsonLd";
import "../../styles/aboutpage.css";
import ContactForm from "../components/ContactForm";

const canonical = "https://whitedovecleaningnw.com/join-our-team";

export const metadata = {
  title: "Join Our Team | White Dove Cleaning NW",
  description:
    "Interested in joining White Dove Cleaning NW? Learn more about working with our growing cleaning team serving Spokane, Coeur d’Alene, Tacoma, and surrounding communities.",
  alternates: { canonical },
  openGraph: {
    title: "Join Our Team | White Dove Cleaning NW",
    description:
      "Join a locally rooted cleaning company serving Spokane, Coeur d’Alene, Tacoma, and surrounding communities.",
    url: canonical,
    siteName: "White Dove Cleaning",
    images: [
      {
        url: "https://whitedovecleaningnw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join the White Dove Cleaning team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Join Our Team | White Dove Cleaning NW",
    isPartOf: {
      "@id": "https://whitedovecleaningnw.com/#website",
    },
    description: "Learn more about joining the White Dove Cleaning NW team.",
  },
];

export default function JoinOurTeamPage() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <div className="about-hero">
        <div className="container">
          <h1>Join the White Dove Cleaning Team</h1>
          <p>
            Looking for meaningful, dependable work with a locally rooted
            cleaning company? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="content-container">
        <div className="col-one">
          <div className="content-interior">
            <div className="section">
              <h2>Interested in Working With White Dove?</h2>
              <p>
                White Dove Cleaning NW is always interested in connecting with
                reliable, hardworking people who take pride in doing excellent
                work and treating clients&apos; homes with care.
              </p>

              <p>
                We serve homes throughout Spokane, Spokane Valley, Coeur
                d&apos;Alene, Tacoma, Puyallup, and surrounding communities. As
                our company continues to grow, we&apos;re looking for team
                members who value consistency, communication, attention to
                detail, and showing up for the people we serve.
              </p>

              <p>
                If you&apos;re interested in joining our team, fill out the form
                below and tell us a little about yourself, your experience, and
                the area where you&apos;re looking to work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
