import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
import sampleDesk from "../../img/sample_desk.jpeg";
import sampleDesk2 from "../../img/sample_desk2.jpeg";
import SlideItem from "./slideItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "0",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "0",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <SlideItem img={sampleDesk} />
      <SlideItem img={sampleDesk2} />
    </Slider>
  );
};

export default Sliders;
