import React from "react";
import "./ProductFilter.css";

const ProductFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="product-filter">
      <div className="product-filter-main">
        <label>Select No. of Passengers:</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
