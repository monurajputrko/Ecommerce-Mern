import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "./AddressCard";

const Address = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
          address: data.get("address"),
          city: data.get("city"),
          state: data.get("state"),
          pincode: data.get("pincode"),
          phone: data.get("phone"),
        };
        
        console.log("hi ", address);
    }

    return (
      <div>
        <Grid container spacing={4}>
          <Grid
            xs={12}
            lg={5}
            className="border rounded-e-md h-[30.5rem] overflow-y-scroll"
          >
            <div className=" text-left p-5 py-7 border-b cursor-pointer">
              <AddressCard />
                        <Button
                            
                sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                size="large"
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="string"
                      required
                      id="firstname"
                      name="firstname"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastname"
                      name="lastname"
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                                        id="address"
                                        name="address"
                      label="Address"
                      fullWidth
                      autoComplete="given-name"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                                        id="city"
                                        name="city"
                      label="City"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                                        id="state"
                                        name="state"
                      label="State"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      required
                                        id="pincode"
                                        name="pincode"
                      label="Pin Code"
                      fullWidth
                      autoComplete="shiping postel-code"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      placeholder="10 Digit Phone No."
                      required
                                        id="phone"
                                        name="phone"
                      label="Phone No."
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Button
                    type="submit"
                    sx={{ mt: 2, ml: 3, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
}

export default Address;