
import { Box, Grid } from '@mui/material';
import AddressCard from './../Checkout/AddressCard';
import OrderTracker from './OrderTracker';
import StarBorderIcon from "@mui/icons-material/Star";
import { deepPurple } from '@mui/material/colors';
const OrderDetail = () => {
    return (
      <div className="px:5 lg:px-20">
        <div className=" ml-5">
          <h1 className=" font-bold text-xl py-7">Delivery Address</h1>
          <AddressCard />
        </div>
        <div className=" py-20">
          <OrderTracker activestep={3} />
        </div>
        <Grid className="space-x-5" container>
          {[1, 1, 1, 1, 1].map((i) => (
            <Grid
              item
              container
              className=" shadow-md shadow-blue-600 rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid items xs={6}>
                <div className="flex items-center space-x-4">
                  <img
                    className=" w-[10rem] h-[10rem] object-cover object-top "
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                    alt="img"
                  />
                  <div className=" space-y-2 ml-5">
                    <p className=" font-semibold">
                      The Basic Tee 6-Pack allows you vibrant personality
                    </p>
                    <p className=" space-x-5 opacity-50 text-sm font-semibold ">
                      <span>Color: White</span> <span>Size: M</span>
                    </p>
                    <p>Seller Rajputi style</p>
                    <p>₹2099</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className=" px-2 text-xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    );
}

export default OrderDetail;