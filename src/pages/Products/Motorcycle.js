import React from "react";
import { NavLink } from "react-router-dom";

const Motorcycle = () => {
    return (
        <div className="motorcycle-wrapper">
        <NavLink to="/products" >Powrót</NavLink>
        <p>Motorcycle</p>
        </div>
    )
}

export default Motorcycle