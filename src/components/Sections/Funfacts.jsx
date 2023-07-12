import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Lines of Code",
    count: 200000,
    icon: "icon-emotsmile",
  },
  {
    id: 2,
    title: "Hours of Coding",
    count: 4000,
    icon: "icon-clock",
  },
  {
    id: 3,
    title: "Projects Completed",
    count: 20,
    icon: "icon-like",
  },
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {funfactData.map((funfact) => (
          <div className="col-md-4 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
