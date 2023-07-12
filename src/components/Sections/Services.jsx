import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Website Development",
    content:
      " Web development services are used to design, build, support, and evolve all types of web-based software.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Mobile Application Development",
    content:
      "I use latest and greatest technology React Native to make a Android and IOS App.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "AI Powered Application Development",
    content:
      "I help business to extract meaningful information from a huge set of raw data through Artificial Intelligence.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "Automation",
    content:
      "I help businesses to Automate their manual Task. Automation reduce operating costs.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Web Scraping",
    content:
      "I help businesses to Scrape Publicly Available Information at bulk and then perform the meaningful operation with that data.",
    icon: "icon-note",
  },

  {
    id: 6,
    name: "API Development",
    content: "I help businesses to make secure and fast APIs.",
    icon: "icon-bubbles",
  },
  ,
  {
    id: 7,
    name: "Desktop Application Development",
    content:
      "Best Suited for the Business who don't want to live their application in the cloud.",
    icon: "icon-bubbles",
  },
  {
    id: 8,
    name: "Blockchain Application Development",
    content: "We build a fast and secure blockchain applications.",
    icon: "icon-bubbles",
  },
  {
    id: 9,
    name: "Support",
    content:
      "We help businesses to maintain their application and make them bug free.",
    icon: "icon-bubbles",
  },
  ,
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
