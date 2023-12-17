import { Box, Grid, Typography } from "@mui/material";
import a1 from "../assets/a1.jpg";

const Ab02 = () => {
  return (
    <div>
      <Grid container className="plumb02">
        <Grid item xs={12} sm={4} md={4}>
          <img src={a1} alt="plumbing" id="p2" />
        </Grid>
        <Grid item xs={12} sm={8} md={7} className="plumb02body">
          <Box>
            <Typography>
              VG Solutions employs plumbers, electrical contractors, AC
              technician to better serve customers throughout Erode, Salem,
              Coimbatore & Tirupur. It is always our goal to provide the best
              service and parts to our customers on every job.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              Our company was founded by the VG family four decades ago. Today,
              our team works with you from start to finish to complete new
              construction projects, remodels, light installation, electrical
              panel installation,AC equipment installation, and more.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ab02;
