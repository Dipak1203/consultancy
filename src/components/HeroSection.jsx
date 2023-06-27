import React from "react";
import SliderComponent from "./SliderComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const HeroSection = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />, 
        autoplay: true,
        autoplaySpeed: 3000,
      };

  return (
    <Slider {...sliderSettings} className="container">
      <SliderComponent
        heading1="moonlight"
        heading2="Education Consultancy"
        heading3="Help to study abroad"
        description="we are well established educational consultancy located in the heart of 
        Kathmandu. We deal with Student Test Preparation and applying for
        study abroad services."
        img="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg"
      />
      <SliderComponent
        heading1="moonlight"
        heading2="Education Consultancy"
        heading3="Help to study abroad"
        description="we are well established educational consultancy located in the heart of 
        Kathmandu. We deal with Student Test Preparation and applying for
        study abroad services."
        img="https://img.freepik.com/free-vector/studying-concept-illustration_114360-1294.jpg?w=2000"
      />
      <SliderComponent
        heading1="moonlight"
        heading2="Education Consultancy"
        heading3="Help to study abroad"
        description="we are well established educational consultancy located in the heart of 
        Kathmandu. We deal with Student Test Preparation and applying for
        study abroad services."
        img="https://previews.123rf.com/images/microone/microone2008/microone200800023/153103538-studying-process-student-reading-at-desk-online-learning-girl-study-homework-on-computer-science.jpg"
      />
    </Slider>
  );
};

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <span className={className} style={{ ...style, display: "block",color:"black" }}>
        <ArrowBackIosNewIcon onClick={onClick} />
      </span>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <span className={className} style={{ ...style, display: "block",color:"black"}}>
        <ArrowForwardIosIcon onClick={onClick} />
      </span>
    );
  };

export default HeroSection;
