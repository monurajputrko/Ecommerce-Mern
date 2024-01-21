import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
    return (
      <div className="p-5 shadow-lg text-left rounded-md">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem]">
            <img
              className=" w-full h-full object-cover object-top "
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt="img"
            />
          </div>
          <div className=" ml-5 space-y-1 ">
            <p className=" font-semibold">
              The Basic Tee 6-Pack allows you to fully express your vibrant
              personality
            </p>
            <p className=" opacity-70">Size: L : White</p>
            <p className=" opacity-70">Seller: Rajputi Style</p>
            <div className="flex space-x-5 items-centertext-gray-900 pt-4">
              <p className="font-semibold">$200</p>
              <p className="opacity-50 line-through ">$211</p>
              <p className="text-green-600 font-semibold">5% off</p>
            </div>
          </div>
        </div>

        <div className=" lg: flex items-center lg:space-x-10 pt-4">
          <div className=" flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className=" py-1 px-7ed-sm">3</span>
            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>

          <div>
            <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
          </div>
        </div>
      </div>
    );
}

export default CartItem;