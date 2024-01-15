import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
// The Basic Tee 6-Pack allows you to fully express your vibrant personality
const OrderCard = () => {
    return (
      <div className="text-left mt-10 mr-10 p-5 shadow-md shadow-blue-500 hover:shadow-2xl">
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className="flex  cursor-pointer">
              <img
                className=" w-[10rem] h-[10rem] object-cover object-top"
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="img"
              />
              <div className=" ml-5 space-y-2">
                <p className=" mb-2">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality
                </p>
                <p className=" opacity-50 text-xs font-semibold">Size : M</p>
                <p className=" opacity-50 text-xs font-semibold">
                  Color: Black
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p>₹299</p>
          </Grid>
          <Grid item xs={4}>
            {false ? (
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className=" text-green-600 mr-2 text-sm"
                />
                <span>Deliverd on 22 Jan</span>
              </p>
            ) : (
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className=" text-green-600 mr-2 text-sm"
                />
                <span>Expected Delivery on 22 Jan</span>
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    );
}

export default OrderCard;