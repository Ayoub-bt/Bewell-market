import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import ModalVideo from "react-modal-video";

const HomeCarousel = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Carousel pause="hover" className="bg-dark" interval={2000}>
        <Carousel.Item className="carousel-item">
          <Link to="/products">
            <img src={require("./images/carousel/3.jpg")} alt="Jarda" />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" style={{ cursor: "pointer" }}>
          <img
            src={require("./images/carousel/4.jpg")}
            onClick={() => setOpen(true)}
            alt="Jarda"
          />
        </Carousel.Item>
        {/* <Carousel.Item className="carousel-item carousel-video">
          <ModalVideo />
        </Carousel.Item> */}
      </Carousel>
      <ModalVideo
        channel="youtube"
        videoId="12kyh3Y8Uuc"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        autoplay
      />
    </>
  );
};

export default HomeCarousel;
