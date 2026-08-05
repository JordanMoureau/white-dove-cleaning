import { FaRegStar, FaRegThumbsUp, FaRegSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaRegStar />,
    title: "Quality Unmatched in The Pacific Northwest",
    body: "We set the standard for excellence across the Pacific Northwest — and we don't cut corners.",
  },
  {
    icon: <FaRegThumbsUp />,
    title: "Timely Service & Reliable Professionals",
    body: "Our team shows up on time, every time, ready to get the job done right.",
  },
  {
    icon: <FaRegSmile />,
    title: "Customer Satisfaction Guaranteed",
    body: "Your satisfaction isn't just a promise — it's the foundation of everything we do.",
  },
];

export default function FeatureBar() {
  return (
    <div className="feature-bar">
      {features.map((f, i) => (
        <div className="feature-item" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}
