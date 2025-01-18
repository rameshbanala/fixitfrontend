// src/components/Carousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

// Styled components for Carousel
const CarouselContainer = styled.div`
  max-width: 900px;
  margin: 20px auto;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3) 10%,
    rgba(0, 0, 0, 0) 20%
  );
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CustomCarousel = () => {
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
      <Carousel fade interval={3000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <StyledImage src={item.image} alt={item.alt} />
            <StyledCarouselCaption>
              <h5>{item.caption}</h5>
            </StyledCarouselCaption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CustomCarousel;
