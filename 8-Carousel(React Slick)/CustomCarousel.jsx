import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

const CustomCarousel = ({
  children,
  responsive,
  slidesToShow,
  pagination = true,
  carouselClassName,
  containerClassName,
}) => {
  const paginationDots = (dots) => (
    <div>
      <ul style={{ paddingTop: "10px" }}>{dots}</ul>
    </div>
  );

  const settings = {
    arrows: true, // used to show navigation arrows
    accessibility: true, // used to enable scroll
    nextArrow: <ArrowRight />, // next navigation arrow
    prevArrow: <ArrowLeft />, // previous navigation arrow
    dots: pagination, // used to show pagination arrows
    dotsClass: "slick-dots",
    appendDots: paginationDots,
    autoplay: false,
    autoplaySpeed: 3000, // delay between each slide move
    centerMode: false, // used to show the current slide in the center of the page
    className: `${carouselClassName}`, // container className
    responsive: responsive,
    slidesToShow: slidesToShow, // number of slides shown in screen
    slidesToScroll: 1, // number of slides to scroll at each time
    speed: 500, // Animation speed in milliseconds
    draggable: true, // Enable scrollable via dragging on desktop
    swipe: true, // swipe on mobile
    focusOnSelect: true, // Go to slide on click
    infinite: false, // repeat scrolling
    initialSlide: 0, // the initial slide index
    pauseOnDotsHover: false, // Prevents autoplay while hovering on dots
    pauseOnFocus: false, // Prevents autoplay while focused on slides
    pauseOnHover: true, // Prevents autoplay while hovering
    rows: 1, // number of rows per slide in the slider, (enables grid mode)
    slidesPerRow: 1, // number of slides to display in grid mode, this is useful with rows option
    swipeToSlide: true, // move more than one slide at a time
    // variableWidth: true, // used to change the width and the gap between slides
    // lazyLoad: "progressive" || "ondemand", // Load images or render components on demand or progressively
    // rtl: false, // reverses the slides order
  };
  return (
    <div className={`${containerClassName} container`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CustomCarousel;

// appendDots: dots => (
//   <div
//     style={{
//       backgroundColor: "#ddd",
//       borderRadius: "10px",
//       padding: "10px"
//     }}
//   >
//     <ul style={{ margin: "0px" }}> {dots} </ul>
//   </div>
// ),

// customPaging: i => (
//   <div
//     style={{
//       width: "30px",
//       color: "blue",
//       border: "1px blue solid"
//     }}
//   >
//     {i + 1}
//   </div>
// )
// };
