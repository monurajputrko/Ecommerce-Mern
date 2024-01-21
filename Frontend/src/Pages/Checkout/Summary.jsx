import { Button } from "@mui/material";
import AddressCard from "./AddressCard";
import CartItem from './../Cart/CartItem';

const Summary = () => {
    return (
      <div>
        <div className="p-5 shadow-lg rounded-s-md border">
          <AddressCard />
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
                      <span className="text-green-600 font-semibold">
                        -₹100
                      </span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                      <span>Delivery Charge</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                      <span className=" font-bold">Total Amount</span>
                      <span className="text-green-600 font-semibold">
                        ₹2399
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-10"
                    variant="contained"
                    sx={{
                      px: "2rem",
                      py: "1rem",
                      bgcolor: "#9155fd",
                      mt: "3%",
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Summary;