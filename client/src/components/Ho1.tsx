import { Box, Grid, Typography } from "@mui/material";
import h1 from "../assets/h1.jpg";

const Ho1 = () => {
  return (
    <div>
      <h4 className="p3h2">PLUMBING AND ELECTRICAL CONTRACTORS NEAR YOU</h4>
      <Grid container className="plumb02" style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={4} md={4}>
          <a href="tel:+919585453106">
            <img src={h1} alt="plumbing" id="p2" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8} md={7} className="plumb02body">
          <Box>
            <Typography>
              We have SHOCKINGLY good services you can count on. (Pun intended.)
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              Not only do we have a team of dedicated electricians, but we also
              employ local plumbers so your home stays dry and free of water
              damage year-round.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              Whether you need the lights in your barn rewired or AC installed
              in your home, trust us for excellent customer service.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ho1;
