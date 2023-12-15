import { Box, Grid } from "@mui/material";

const Elec03 = () => {
  return (
    <div className="plumb03">
      <h1 className="p3title">VG ELECTRICAL SOLUTIONS</h1>
      <Box className="marginSpan">
        &nbsp;Our <b>electrical contractors</b> have experience working with a
        range of industries, including farms and factories. We also have
        experience working on projects of all sizes, from simple repairs to new
        construction. Our team of local electricians are able to solve problems
        to come up with real-world solutions for your home or commercial
        building. We also make sure you understand what needs to be done during
        every step of the process.
      </Box>
      <h4 className="p3h2">Our Electrical Services Include:</h4>
      <Grid container className="plumb3">
        <Grid item xs={12} sm={6} md={5}>
          <ul>
            <li className="plum3li">Residential Electrical</li>
            <li className="plum3li">New Construction Electrical</li>
            <li className="plum3li">Light & Fan Installation</li>
            <li className="plum3li">Rewiring </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <ul>
            <li className="plum3li">Emergency Electrical Services</li>
            <li className="plum3li">New Panel Installation</li>
            <li className="plum3li">Service Upgrades</li>
            <li className="plum3li">Circuit Installation</li>
          </ul>
        </Grid>
      </Grid>
      <Box className="marginSpan">
        Our electricians in Erode, Coimbatore, Salem, and Tirupur are ready to
        answer your call. We pride ourselves on being able to solve electrical
        problems quickly and efficiently. To request your quote for any of our
        electrical services, call<b> VG Solutions at +91 9585453106</b>.
      </Box>
    </div>
  );
};

export default Elec03;
