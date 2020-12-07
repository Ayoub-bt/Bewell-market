import React from "react";
import { Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Row className="lg-p-top3 mx-2">
        <Col>
          <img src={require("../images/cards.jpg")} width="100%" alt="jarda" />
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
