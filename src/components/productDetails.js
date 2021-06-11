import React from "react";

const ProductDetails = (props) => {
  console.log(props.location.state.vehicle);
  let vehicle = props.location.state.vehicle;
  return (
    <div>
      <h1>{vehicle.category.subCategory}</h1>
      <div className="container">
        <article className="vehicle">
          <img
            className="vehicle__img"
            src={
              require(`../assets/vehicle-${vehicle.category.productType.toLowerCase()}-${vehicle.category.vehicleType.toLowerCase()}.svg`)
                .default
            }
            alt="Vehicle-img"
          />
          <div className="vehicle__data">
            <span>
              <img
                className="supplier__img"
                src={
                  require(`../assets/supplier-${vehicle.supplier.supplierKey}.svg`)
                    .default
                }
                height={30}
                alt="Supplier-logo"
              />
            </span>
            <h3 className="supplier__name">{vehicle.supplier.supplierName}</h3>
            <h4 className="product__type">{vehicle.category.productType}</h4>
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

            <p className="product__row">
              <span>
                <img
                  src="https://img.icons8.com/offices/30/000000/occupied-theatre-seat.png"
                  height={30}
                  alt="icon"
                />
              </span>
              SeatingCapacity: {vehicle.product.maxSeats}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetails;
