import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUsScreen = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <Container className="lg-p-top4" fluid id="aboutUs">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <img src={require("../components/images/aboutUs/1.jpeg")} alt="" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img src={require("../components/images/aboutUs/2.jpeg")} alt="" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img src={require("../components/images/aboutUs/3.jpeg")} alt="" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img src={require("../components/images/aboutUs/4.jpeg")} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsScreen;
