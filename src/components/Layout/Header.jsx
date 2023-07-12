import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";

const headerData = {
  name: "Rishabh Gupta",
  designation: "",
  imageThumb: "/images/rishabh logo.png",
  social: {
    linkedin: "https://www.linkedin.com/in/rishabh-gupta-80a291198/",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/",
    youtue: "https://www.youtube.com/",
    dribbble: "https://rishabhgupta.info/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column center">
          <Link className="align-center" to="/">
            <img
              height={70}
              width={70}
              src={headerData.imageThumb}
              alt={headerData.name}
            />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Experience
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-graduation"></i>Experience
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Portfolio
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Portfolio
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-blogs"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-pencil"></i>Blog
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-pencil"></i>Blog
                  </Link>
                )}
              </li> */}
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-center">
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.linkedin}>
                    <FaLinkedin />
                  </a>
                </li>
              )}
              {/* {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.youtue ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.youtue}>
                    <FaYoutube />
                  </a>
                </li>
              )} */}
              {!headerData.social.dribbble ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.dribbble}>
                    <FaDribbble />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
      <Toaster
        toastOptions={{
          style: {
            background: "#FF6969",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default Header;
