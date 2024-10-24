import UserNavBar from "../UserNavBar";
import Footer from "../Footer";

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  StyledCard,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Heading,
  SubHeading,
  CardLink,
} from "./styledComponents";

const professionsConfig = [
  {
    id: "electricians",
    title: "Electricians",
    description:
      "Experts in electrical systems, installations, and repairs for homes and businesses.",
    image: "/electrician.jpeg", // Replace with a real image URL
  },
  {
    id: "plumbers",
    title: "Plumbers",
    description:
      "Skilled in plumbing systems, ensuring efficient water flow and repairs.",
    image: "/plumber.jpeg",
  },
  {
    id: "carpenters",
    title: "Carpenters",
    description:
      "Craftsmen who design, cut, and assemble wood structures and furniture.",
    image: "/carpenter.jpg",
  },
  {
    id: "mechanics",
    title: "Mechanics",
    description:
      "Experts in diagnosing and repairing vehicles for smooth performance.",
    image: "/mechanic.jpg",
  },
  {
    id: "ac technicians",
    title: "AC Technicians",
    description:
      "Professionals in HVAC systems, ensuring proper temperature control in buildings.",
    image: "/acTechnician.jpg",
  },
  {
    id: "painters",
    title: "Painters",
    description:
      "Experienced in enhancing the aesthetic appeal of spaces through expert painting.",
    image: "/painter.jpg",
  },
  {
    id: "electronic repairs",
    title: "Electronic Repairs",
    description:
      "Technicians skilled in repairing and maintaining electronic gadgets and devices.",
    image: "/electronicRepair.jpg",
  },
  {
    id: "welders",
    title: "Welders",
    description:
      "Metalworkers who use high heat to fuse metal components for construction or repair.",
    image: "/welder.jpg",
  },
  {
    id: "handymen",
    title: "Handymen",
    description:
      "Multi-skilled professionals who handle various home repairs and maintenance tasks.",
    image: "/handyMan.jpg",
  },
];

const ProfessionCards = () => {
  return (
    <Container>
      <Heading>Choose The Service</Heading>
      <SubHeading>
        Browse through our list of trusted professionals. Select the service you
        need, from expert electricians to skilled carpenters, and submit your
        request with confidence. Each card below represents a dedicated
        professional ready to assist with your home or business needs.
      </SubHeading>
      <Row className="g-4 mt-4 mb-5">
        {professionsConfig.map((profession) => (
          <Col key={profession.id} md={4} lg={4}>
            <CardLink to={`/user/services/${profession.id}`}>
              <StyledCard>
                <CardImage src={profession.image} alt={profession.title} />
                <CardBody>
                  <CardTitle>{profession.title}</CardTitle>
                  <CardText>{profession.description}</CardText>
                </CardBody>
              </StyledCard>
            </CardLink>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const UserServices = () => {
  return (
    <>
      <UserNavBar />
      {ProfessionCards()}
      <Footer />
    </>
  );
};

export default UserServices;
