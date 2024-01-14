
import { Route, Routes } from "react-router-dom"
import Product from "../Pages/Products/Product";
import { Home } from "../Pages/Home/Home";
import ProductDetails from "../Pages/Product Details/ProductDetails";

export const AllRoutes = () => {
    
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/productdetail" element={<ProductDetails />}></Route>
      </Routes>
    );

}