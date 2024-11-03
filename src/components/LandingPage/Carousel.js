import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const CarouselItem = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.5s ease-in-out;
  max-height: 400px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 15px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  border-radius: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

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
      image: "electrician.jpeg",
      alt: "Electrician",
      caption: "Expert Electricians at Your Service",
    },
    {
      image: "plumber.jpeg",
      alt: "Plumber",
      caption: "Reliable Plumbers for All Your Needs",
    },
    {
      image: "carpenter1.jpg",
      alt: "Carpenter",
      caption: "Skilled Carpenters to Craft Your Vision",
    },
    {
      image: "appliance123.jpeg",
      alt: "Appliance Repair Technician",
      caption: "Quick and Efficient Appliance Repairs",
    },
    {
      image: "gardener.jpg",
      alt: "Gardener",
      caption: "Professional Gardeners for a Greener Tomorrow",
    },
    {
      image: "painter.jpg",
      alt: "Painter",
      caption: "Expert Painters to Beautify Your Home",
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
