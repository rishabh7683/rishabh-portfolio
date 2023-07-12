import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content: "Rishabh Works smartly to deliver innovative solutions.",
    authorImage: "images/customer-1.jpeg",
    authorName: "Yuzdi N. Badhniwalla ",
    authorStatus: "Founder at The Digital Marketing Agency",
  },
  {
    id: 2,
    content:
      "Rishabh is excellent with tech work and he delivers work on the promised date.",
    authorImage: "images/customer-2.jpeg",
    authorName: "Keshav Jindal",
    authorStatus: "Co-Founder, WhizCo",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
