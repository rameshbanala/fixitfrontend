import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

// Carousel items data
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

// Styled components
const CarouselContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

const Caption = styled(Carousel.Caption)`
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  color: #fff;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
`;

function LandingPageCarousel() {
  return (
    <CarouselContainer>
      <Carousel fade>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <CarouselImage src={item.image} alt={item.alt} />
            <Caption>
              <h3>{item.caption}</h3>
            </Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default LandingPageCarousel;
