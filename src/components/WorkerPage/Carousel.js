// src/components/Carousel.js
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Styled components for Carousel
const CarouselContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
`;

const CarouselItem = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  transition: transform 0.5s ease-in-out;
  max-height: 100%;

  /* Hover effect: image zooms */
  ${CarouselItem}:hover & {
    transform: scale(1.05);
  }
`;

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3) 10%,
    rgba(0, 0, 0, 0) 20%
  );
  border-radius: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  max-width: 95%;

  /* Show caption when slide is active and afterChange is triggered */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Always show the caption on hover */
  ${CarouselItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    fade: true,
    beforeChange: () => setCaptionVisible(false),
    afterChange: (index) => {
      setActiveSlide(index);
      setTimeout(() => setCaptionVisible(true), 500);
    },
  };

  const carouselItems = [
    {
      image: "/perks.jpg",
      alt: "Safety",
      caption: "Your safety is our priority. Join a trusted team.",
    },
    {
      image: "/electrician1.jpg",
      alt: "Electrician",
      caption: "Showcase your skills as an expert electrician.",
    },
    {
      image: "/plumber1.jpg",
      alt: "Plumber",
      caption: "Deliver reliable plumbing solutions to customers.",
    },
    {
      image: "/carpenter1.jpg",
      alt: "Carpenter",
      caption: "Craft beautiful creations with your carpentry skills.",
    },
    {
      image: "/workers.jpg",
      alt: "Workers",
      caption: "We are all for you only.",
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={item.image} alt={item.alt} />
            <CarouselCaption
              className={
                captionVisible && activeSlide === index ? "visible" : ""
              }
            >
              {item.caption}
            </CarouselCaption>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
