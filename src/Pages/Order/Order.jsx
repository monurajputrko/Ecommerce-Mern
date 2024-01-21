import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const Order = () => {
    const orderStatus = [
        { value: "On the Way", label: "On the Way"},
        { value: "Deliverd" },
    { value: "Cancelled" },
        { value: "Returned" },
    ];
    return (
      <div className="px:5 lg:px-20">
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item xs={2.5}>
            <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
              <h1 className="font-bold text-lg">Filter</h1>
              <div className=" space-y-4 mt-10">
                <h1 className=" font-semibold">ORDER STATUS</h1>
                {orderStatus.map((item) => (
                  <div className="flex items-center">
                    <input
                      defaultValue={item.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={item.value}
                      className=" ml-3 text-sm text-gray-600"
                    >
                      {item.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={9}>
            {[1, 1, 1, 1, 1].map((e) => (
              <OrderCard />
            ))}
          </Grid>
        </Grid>
      </div>
    );
}

export default Order;