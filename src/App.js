import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom"
import Product from "./components/products/product";
import ProductDetail from "./components/products/productDetail";

function App() {


    return (
        <Routes>
            <Route path="/" exact element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
    );
}

export default App;
