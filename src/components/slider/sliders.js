import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
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
        width: "25px",
        height: "25px",
        marginRight: "10px",
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
        width: "25px",
        height: "25px",
        marginLeft: "10px",
      }}
      onClick={onClick}
    />
  );
}

const Sliders = ({ images }) => {
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
      {images.map((image, idx) => (
        <SlideItem key={idx} img={image} />
      ))}
    </Slider>
  );
};

export default Sliders;
