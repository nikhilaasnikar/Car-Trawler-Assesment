import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductFilter from "./Filter/ProductFilter";

const FetchProducts = () => {
  const [filterProduct, setFilteredProduct] = useState("4");
  const [vehicles, setVehicles] = useState([]);

  // Below function will fetch the vehicle data from the URL
  useEffect(() => {
    async function fetchdata() {
      try {
        {
          const res = await fetch(
            `https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json`
          );
          const data = await res.json();
          setVehicles(data);
        }
      } catch (err) {
        alert(`Somthing Went wrong 💥💥💥 ErrorMessage: ${err.message}`);
      }
    }
    fetchdata();
  }, []);

  const FilterChangeHandler = (selectedProduct) => {
    setFilteredProduct(selectedProduct);
  };

  const FilteredProduct = vehicles.filter((vehicle) => {
    return vehicle.product.maxSeats.toString() === filterProduct;
  });

  return (
    <div>
      <ProductFilter
        selected={filterProduct}
        onChangeFilter={FilterChangeHandler}
      />

      <div className="container">
        {FilteredProduct.sort((a, b) => (a.eta > b.eta ? 1 : -1)).map(
          (vehicle, index) => (
            <div key={index}>
              <Link to={{ pathname: "/details", state: { vehicle } }}>
                <div className="container">
                  <article className="vehicle ${className}">
                    <img
                      className="vehicle__img"
                      src={
                        require(`../assets/vehicle-${vehicle.category.productType.toLowerCase()}-${vehicle.category.vehicleType.toLowerCase()}.svg`)
                          .default
                      }
                      alt="vehicle-img"
                    />
                    <div className="vehicle__data">
                      <span>
                        <img
                          className="supplier__img"
                          src={
                            require(`../assets/supplier-${vehicle.supplier.supplierKey}.svg`)
                              .default
                          }
                          height={40}
                          width={60}
                          alt="supplier-logo"
                        />
                      </span>
                      <h3 className="supplier__name">
                        {vehicle.supplier.supplierName}
                      </h3>
                      <h4 className="product__type">
                        {vehicle.category.productType}
                      </h4>
                      <p className="product__row">
                        <span>
                          <img
                            src="https://img.icons8.com/dusk/64/000000/car--v1.png"
                            height={30}
                            alt="icon"
                          />
                        </span>
                        Type: {vehicle.category.vehicleType}
                      </p>
                      <p className="product__row">
                        <span>
                          <img
                            src="https://img.icons8.com/cute-clipart/64/000000/money-bag.png"
                            height={30}
                            alt="icon"
                          />
                        </span>
                        Price:
                        {vehicle.price.amount}
                        {vehicle.price.currency}
                      </p>
                      <p className="product__row">
                        <span>
                          <img
                            src="https://img.icons8.com/nolan/64/time.png"
                            height={30}
                            alt="icon"
                          />
                        </span>
                        ETA: {vehicle.eta} minutes
                      </p>
                    </div>
                  </article>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FetchProducts;
