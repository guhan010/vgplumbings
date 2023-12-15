import { Box, Grid, Typography } from "@mui/material";
import e4 from "../assets/e4.jpg";
const Elec02 = () => {
  return (
    <div>
      <Grid container className="plumb02">
        <Grid item xs={12} sm={4} md={4}>
          <img src={e4} alt="plumbing" id="p2" />
        </Grid>
        <Grid item xs={12} sm={8} md={7} className="plumb02body">
          <Box>
            <Typography>
              We employ both residential and commercial electricians, which
              means you can trust all your electrical work to be done by the
              same company. We strive to provide you with the best electrical
              parts and service on every job! Please contact us with any
              questions or concerns.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              Whether you need an electrical panel upgrade or ceiling fan
              installation, you can trust our qualified electrical contractors
              for the job. We also offer <b>emergency electrical services</b> 24
              hours a day, 365 days a year so you&apos;re never left in the
              dark.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Elec02;
