import React from "react";
import { NavLink } from "react-router-dom";

const Bike = () => {
    return (
        <div className="bike-wrapper">
        <NavLink to="/products" >Powrót</NavLink>
        <p>Bike</p>
        </div>
    )
}

export default Bike