import { Box, Grid, Typography } from "@mui/material";
import "./Plumb02.css";
import p3 from "../assets/p3.jpg";

const Plumb02 = () => {
  return (
    <div>
      <Grid container className="plumb02">
        <Grid item xs={12} sm={4} md={4}>
          <img src={p3} alt="plumbing" id="p2" />
        </Grid>
        <Grid item xs={12} sm={8} md={6} className="plumb02body">
          <Box>
            <Typography>
              Count on us to flush out your plumbing problems. We pride
              ourselves on excellent customer service, which is why our plumbing
              contractors always strive to meet and exceed your expectations. If
              you have any questions or concerns, call us today!
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              Whether you need <b>emergency plumbing service</b> or water heater
              maintenance, you can trust our years of experience. We&apos;re
              able to tackle both residential and construction plumbing
              projects, giving you peace of mind that the job will be done
              right.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Plumb02;
