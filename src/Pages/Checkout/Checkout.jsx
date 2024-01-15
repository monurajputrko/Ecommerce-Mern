import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Address from "./Address";
import Summary from "./Summary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const step = query.get("step");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginBottom:"3%"  }}>
             
            </Box>
            <div className=" ml-10">{step == 2 ? <Address /> : <Summary />}</div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
