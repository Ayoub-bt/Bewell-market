import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <link rel="icon" href="https://i.ibb.co/V2237dM/jarda-logo.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Jarda",
  description: "We sell the best vegetables for cheap",
  keywords: "jarda, legumes, fruits, panier",
};

export default Meta;
