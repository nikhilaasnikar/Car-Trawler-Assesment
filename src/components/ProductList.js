import React from "react";
import "./ProductList.css";
import { useTheme, useThemeUpdate } from "../Context/ThemeContext";
import FetchProducts from "./FetchProducts";

const ProductList = (props) => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
  };
  return (
    <div style={themeStyles}>
      <button className="btn-theme" onClick={toggleTheme}>
        Change Theme
      </button>
      <FetchProducts />
    </div>
  );
};

export default ProductList;
