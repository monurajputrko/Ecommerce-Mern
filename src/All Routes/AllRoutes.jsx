
import { Route, Routes } from "react-router-dom"
import Product from "../Pages/Products/Product";
import { Home } from "../Pages/Home/Home";
import ProductDetails from "../Pages/Product Details/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Order from "../Pages/Order/Order";
import OrderDetail from "../Pages/Order/OrderDetail";

export const AllRoutes = () => {
    
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/productdetail" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/orderdetails" element={<OrderDetail />}></Route>
      </Routes>
    );

}