import { Button, Grid, Link, Typography } from "@mui/material"

export const Footer = () => {
    
    return (
      <div>
        <Grid
          className="bg-black text-white text-center mt-10"
          container
          sx={{ bgcolor: "black", color: "white", py: 3 }}
        >
          <Grid items xs={12} sm={6} md={3}>
            <div>
              <Button className="pb-5" variant="h6">
                Company
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                About
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Blog
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Jobs
              </Button>
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3}>
            <div>
              <Button className="pb-5" variant="h6">
                Solutions
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Web-Devlopment
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                App-Devlopment
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Web-Designing
              </Button>
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3}>
            <div>
              <Button className="pb-5" variant="h6">
                Documentation
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                API
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Installment
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Platforms
              </Button>
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3}>
            <div>
              <Button className="pb-5" variant="h6">
                Legal
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Claim
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Copyright
              </Button>
            </div>
          </Grid>
          <Grid className="pt-20" item xs={12}>
            <Typography variant="bdy2" component="p" align="center">
              &copy; 2024 All Right Reserved
            </Typography>
            <Typography variant="bdy2" component="p" align="center">
              Made With Love By Monu Rajput
            </Typography>
            <Typography variant="bdy2" component="p" align="center">
              Linkedin = 
              <Link href="https://www.linkedin.com/in/monurajputrko/"> Connect</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );

}