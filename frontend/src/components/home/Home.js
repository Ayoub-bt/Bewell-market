import React, { useEffect } from "react";
import HeadSection from "./HeadSection";
import "./style.css";
import Meta from "../Meta";
import BlogSectionSmall from "./BlogSectionSmall";
import HeroSection2 from "./HeroSection2";
import { Typography } from "@material-ui/core";
import ProductsSection from "./ProductsSection";
import ModalVideoo from "../ModalVideoo";
import "../modal-video.min.css";

function Home({ history }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <>
      <Meta />
      <HeadSection />
      <ModalVideoo />
      <ProductsSection />
      <HeroSection2 />
      {/* <HeroSection /> */}
      {/* <HeroSection /> */}
      <Typography
        variant="h4"
        align="center"
        style={{ backgroundColor: "#fff" }}
        className="sectionTitle lg-p-top3"
      >
        Blog
      </Typography>
      <BlogSectionSmall />
      {/* <PricingSection /> */}
    </>
  );
}

export default Home;
