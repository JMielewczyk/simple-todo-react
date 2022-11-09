import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Zobacz nasze produkty w promocji!!!</h1>
      <ul className="products-wrapper">
        <NavLink className='products-item' to="/products/car">Car</NavLink>
        <NavLink className='products-item' to="/products/bike">Bike</NavLink>
        <NavLink className='products-item' to="/products/motorcycle">Motorcycle</NavLink>
      </ul>
    </div>
  );
};

export default Products;
