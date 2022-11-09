import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import StartPage from "../pages/StartPage.js";
import Products from "../pages/Products.js";
import Motorcycle from "../pages/Products/Motorcycle.js";
import Bike from "../pages/Products/Bike.js";
import Car from "../pages/Products/Car.js";
import Contact from "../pages/Contact.js";
import AdminPanel from "../pages/AdminPanel";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header className="header">
            <img
              className="header-image"
              src="https://picsum.photos/1024/768"
              alt=""
            />
          </header>
          <section className="main">
            <aside>
              <Nav />
            </aside>
            <section className="pages">
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/motorcycle" element={<Motorcycle />} />
                <Route path="/products/bike" element={<Bike />} />
                <Route path="/products/car" element={<Car />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminPanel />}></Route>
              </Routes>
            </section>
          </section>
          <footer>STOPKA</footer>
        </div>
      </Router>
    );
  }
}

export default App;
