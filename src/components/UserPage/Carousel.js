// src/components/AutoSlidingCarousel.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components
const CarouselContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CarouselItem = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
  text-align: center;
  position: relative;
  transition: opacity 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 8px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const AutoSlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: "/security.jpg",
      alt: "Security",
      caption: "FixIt takes care of your safety and security.",
    },
    {
      image: "/helpdesk.jpg",
      alt: "Helpdesk",
      caption: "We are here to help you.",
    },
    {
      image: "/workers.jpg",
      alt: "Workers",
      caption: "We are always available to you.",
    },
    {
      image: "/electrician1.jpg",
      alt: "Electrician",
      caption: "Expert Electricians at Your Service.",
    },
    {
      image: "/plumber1.jpg",
      alt: "Plumber",
      caption: "Reliable Plumbers for All Your Needs.",
    },
    {
      image: "/carpenter1.jpg",
      alt: "Carpenter",
      caption: "Skilled Carpenters to Craft Your Vision.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <CarouselContainer>
      {carouselItems.map((item, index) => (
        <CarouselItem key={index} $active={currentIndex === index}>
          <CarouselImage src={item.image} alt={item.alt} />
          <CarouselCaption>{item.caption}</CarouselCaption>
        </CarouselItem>
      ))}
      <PrevButton onClick={prevSlide}>{"<"}</PrevButton>
      <NextButton onClick={nextSlide}>{">"}</NextButton>
    </CarouselContainer>
  );
};

export default AutoSlidingCarousel;
