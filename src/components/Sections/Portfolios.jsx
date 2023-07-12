import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
];

const allData = [
  {
    id: 1,
    name: "WhizCo Portal",
    category: ["Influencer Marketing Platform"],
    image: "images/portfolio/whizco-1.png",
    slug: "whizco-portal",
  },
  {
    id: 2,
    name: "WhizCo Mobile App",
    category: ["Influencer Marketing App"],
    image: "images/portfolio/whizcoapp.jpeg",
    slug: "whizco-mobileapp",
  },
  {
    id: 3,
    name: "Property Management Software",
    category: ["Real Estate"],
    image: "images/portfolio/property-1.jpeg",
    slug: "property-management-software",
  },
  {
    id: 4,
    name: "Influencer Onboarding Software",
    category: ["Influecer Marketing"],
    image: "images/portfolio/onboarding-1.png",
    slug: "influencer-onboarding-software",
  },
  {
    id: 5,
    name: "Clinic Management Software",
    category: ["Health"],
    image: "images/portfolio/clinic-1.png",
    slug: "clinic-management-software",
  },
  {
    id: 6,
    name: "Gym Management Software",
    category: ["Health"],
    image: "images/portfolio/gym-1.png",
    slug: "gym-management-software",
  },
  {
    id: 7,
    name: "Multi-Author Blog Website",
    category: ["Blogs"],
    image: "images/portfolio/blog-1.png",
    slug: "blog-website",
  },
  {
    id: 8,
    name: "OpenSkill",
    category: ["EdTech"],
    image: "images/portfolio/skill-1.png",
    slug: "edtech",
  },

  {
    id: 9,
    name: "Automate WhatsApp Message Sender Bot",
    category: ["Marketing"],
    image: "images/portfolio/whatsapp.png",
    slug: "automate-whatsapp",
  },

  {
    id: 10,
    name: "AI Bot To Generate Facebook Ads Content",
    category: ["Marketing"],
    image: "images/portfolio/karabot-1.webp",
    slug: "kara-bot",
  },
  {
    id: 11,
    name: "Khanik Bot",
    category: ["Facebook Ads Optimisation Tool"],
    image: "images/portfolio/khanikbot-1.png",
    slug: "khanik-bot",
  },
  {
    id: 12,
    name: "Krishik Bot",
    category: ["Facebook Ads Optimisation Tool"],
    image: "images/portfolio/krishikbot.png",
    slug: "krishik-bot",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(60);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 60));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      {/* <ul className="portfolio-filter list-inline"> */}
      {/* {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))} */}
      {/* </ul> */}

      {/* <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div> */}

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>
      {/* 
      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )} */}
    </>
  );
}

export default Portfolios;
