import React from "react";
import { Row, Col } from "react-bootstrap";

const HeroSection2 = () => {
  return (
    <Row className="lg-p-top2 mx-5" id="heroHead">
      <Col lg={12} md={12} sm={12} className="text-center">
        <h4 className="hero-title">
          UN PROCESSUS SUIVANT DES NORMES EUROPÉENNES
        </h4>
      </Col>
      <Col lg={3} md={3} sm={12} className="mb-5 text-center">
        <img src={require("../images/hero/1.png")} alt="" />
      </Col>
      <Col lg={3} md={3} sm={12} className="mb-5 text-center">
        <img src={require("../images/hero/2.png")} alt="" />
      </Col>
      <Col lg={3} md={3} sm={12} className="mb-5 text-center">
        <img src={require("../images/hero/3.png")} alt="" />
      </Col>
      <Col lg={3} md={3} sm={12} className="mb-5 text-center">
        <img src={require("../images/hero/4.png")} alt="" />
      </Col>
    </Row>
  );
};

export default HeroSection2;
