import React, { useEffect } from "react";
import ProductsSection from "../components/home/ProductsSection";
import Meta from "../components/Meta";

const ProductsScreen = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <>
      <Meta title="Produits | Jarda" />
      <ProductsSection />
    </>
  );
};

export default ProductsScreen;
