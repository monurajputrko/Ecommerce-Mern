import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";

const Cart = () => {
    return (
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className=" col-span-2">
            {[1, 1, 1, 1].map((e) => (
              <CartItem />
            ))}
          </div>
          <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-6">
            <div className=" ">
              <p className=" uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className=" space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹2499</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600 font-semibold">-₹100</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className=" font-bold">Total Amount</span>
                  <span className="text-green-600 font-semibold">₹2399</span>
                </div>
              </div>
              <Button
                className="w-full mt-10"
                variant="contained"
                sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "3%" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;
