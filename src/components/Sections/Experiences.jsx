import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Aug 2023 - present",
    degree: "Founder, Manage My Bhoomi",
    content:
      "Manage My Bhoomi is a Property Management Software for the Realtors.",
  },
  {
    id: 2,
    year: "Feb 2022 - June 2023",
    degree: "CTO at WhizCo",
    content:
      "I have played a key role at WhizCo in establishing a robust network of over 100,000 talented content creators spanning across 15+ diverse categories and 12+ languages. As part of my contributions, I developed an influential influencer discovery platform and a comprehensive campaign management and monitoring portal. Additionally, I crafted a user-friendly WhizCo mobile application exclusively designed for content creators. Furthermore, I took the initiative to create several customized in-house software solutions for WhizCo, enhancing their overall operational efficiency.              (ABOUT WHIZCO) -WhizCo is one of India’s leading Influencer Marketing and Creator Management agencies. With a network of 1,00,000+ content creators across more than 15+ categories and 12+ languages, WhizCo has successfully completed various influencer marketing campaigns for 100+ leading brands in the past such as Facebook, Instagram, Snapchat, Pinterest, Amazon, Swiggy, Pocket FM, Healthkart, UNIQLO, Titan and Country Delight to name a few.",
  },
  {
    id: 3,
    year: "Jan 2020 - Jan 2022",
    degree: "Freelance Software Developer",
    content:
      "Build Total of 15 Amazing Applications for the different business in the different Industry",
  },
  {
    id: 4,
    year: "Nov 2020 - Oct 2021",
    degree: "Co-Founder, Jimm ( Gym Management Software)",
    content: "It's my First Startup and I failed but I learned.",
  },
  {
    id: 5,
    year: "June 2019 - Nov 2019",
    degree: "Bachelor’s Degree in Computer Science",
    content: "Dropped Out.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
