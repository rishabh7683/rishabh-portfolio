import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Rishabh Gupta",
  aboutMe:
    "Full Stack Web Developer | Mobile Application Developer | AI Powered Application Developer | Problem Solver",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.jpeg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
