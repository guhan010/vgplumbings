import { Box, Grid, Typography } from "@mui/material";
import ac2 from "../assets/ac2.jpg";
import "./Plumb02.css";

const Ac02 = () => {
  return (
    <div>
      <Grid container className="plumb02">
        <Grid item xs={12} sm={4} md={4}>
          <img src={ac2} alt="plumbing" id="p2" />
        </Grid>
        <Grid item xs={12} sm={8} md={7} className="plumb02body">
          <Box>
            <Typography>
              With scorching summers and unpredictable weather, having a
              reliable air conditioning system is not just a luxury; it&apos;s a
              necessity. Whether you need a brand-new unit, regular maintenance
              to ensure peak performance, or prompt repairs to beat the heat,
              our local AC contractor in Erode, Coimbatore, Tirupur, and Salem
              is here to provide tailored solutions that suit your specific
              requirements and budget.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px" }}>
              To request a quote or schedule a service visit, please call{" "}
              <b>+91 9585453106</b>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ac02;
