import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import Packages from "../components/pages/package";
import Places from "../components/pages/places";
import Home from "../components/pages/home";
const Router1 = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/package" element={<Packages />} />
                <Route path="/places" element={<Places />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    )
}
export default Router1;