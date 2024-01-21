import { Avatar, Box, Grid, Rating } from "@mui/material"

export const ProductReview = () => {

    const reviews = [
      {
        name: "Monu Singh",
        Rating: 4,
        date: "3 Oct 2023",
        review: "Great Product Everyone Must Buy",
      },
      {
        name: "Premu",
        Rating: 5,
        date: "24 Nov 2023",
        review: "Nice Product I like the Fitting",
      },
      {
        name: "Gora Bai",
        Rating: 4.5,
        date: "13 Oct 2023",
        review: "Love The Product",
      },
      {
        name: "Sonu",
        Rating: 4,
        date: "6 Dec 2023",
        review: "Value for Money Must Buy",
      },
    ];
    

    return (
      <>
        {reviews.map((item) => (
          <div className=" items-center text-left ml-5">
            <Grid item mb="5%">
              <Box>
                <Avatar
                  className="text-white"
                  sx={{ width: 45, bgcolor: "#9155fd" }}
                ></Avatar>
              </Box>
            </Grid>
            <Grid container spacing={2} gap={1}>
              <Grid className="ml-5 ">
                <div className="space-y-2">
                  <div>
                    <p className=" font-semibold text-lg">{item.name}</p>
                    <p className=" opacity-70">{item.date}</p>
                  </div>
                </div>
                <Rating value={item.Rating} name="read-only" readOnly />
                <p>
                  <strong>{item.review}</strong>
                </p>
              </Grid>
            </Grid>
          </div>
        ))}
      </>
    );

}