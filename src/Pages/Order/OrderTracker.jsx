import { Step, StepLabel, Stepper } from "@mui/material";


const step = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Deliverd"
]


const OrderTracker = ({activestep}) => {
    return <div className=" w-full">
        <Stepper activeStep={activestep} alternativeLabel>
            {
                step.map((lable) => <Step>
                    <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>{lable}</StepLabel>
                </Step>)
            }
        </Stepper>
    </div>;
}

export default OrderTracker;