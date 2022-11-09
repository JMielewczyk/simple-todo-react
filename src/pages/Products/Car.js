import React from "react";
import { NavLink } from "react-router-dom";

const Car = () => {
    return (
        <div className="car-wrapper">
        <NavLink to="/products" >Powrót</NavLink>
        <p>Car</p>
        </div>
    )
}

export default Car