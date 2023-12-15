import { Box, Grid } from "@mui/material";
import "./Plumb03.css";

const Plumb03 = () => {
  return (
    <div className="plumb03">
      <h1 className="p3title">VG PLUMBING SOLUTIONS</h1>
      <h4 className="p3h2">For Your Convience...</h4>
      <Grid container className="plumb3">
        <Grid item xs={12} sm={6} md={5}>
          <ul>
            <li className="plum3li">Residential Plumbing</li>
            <li className="plum3li">Construction Plumbing</li>
            <li className="plum3li">Water & Drain Piping</li>
            <li className="plum3li">Dishwasher Installation</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <ul>
            <li className="plum3li">Fixture Replacement</li>
            <li className="plum3li">Water Heater Repair & Installation</li>
            <li className="plum3li">Emergency Plumbing Services</li>
            <li className="plum3li">Gate Valve Replacement</li>
          </ul>
        </Grid>
      </Grid>
      <h2 className="p3h3">Why Choose VG Solutions?</h2>
      <Grid xs={12}>
        <Box className="marginSpan">
          Our emergency plumbers are able to answer your call 24 hours a day,
          365 days a year. We understand that there&apos;s never a good time for
          a leaking water heater or flooded basement, which is why we offer our
          <b>emergency plumbing service</b>.
        </Box>
        <Box className="marginSpan">
          Even if you don&apos;t have an emergency, we do everything we can to
          schedule your service visit as soon as possible. You can also trust
          our <b>plumbing contractors</b> to always be respectful and polite
          while working in your building.
        </Box>
        <Box className="marginSpan">
          Our plumbing contractors in Erode, Coimbatore, Salem, and Tirupur work
          hard to earn your business. To request a quote for any of our plumbing
          services, <b>call VG Solutions at +91 9585453106</b>.
        </Box>
      </Grid>
    </div>
  );
};

export default Plumb03;
