import { Box, Grid } from "@mui/material";

const Ho2 = () => {
  return (
    <div className="plumb03">
      <h4 className="p3h2">
        OUR LOCAL PLUMBERS AND ELECTRICIANS ARE PROUD TO SERVE:
      </h4>

      <Grid container className="plumb3">
        <Grid item xs={12} sm={6} md={5}>
          <ul>
            <li className="plum3li">Erode</li>
            <li className="plum3li">Coimbatore</li>
            <li className="plum3li">Salem</li>
            <li className="plum3li">Tirupur </li>
          </ul>
        </Grid>
      </Grid>
      <Box className="marginSpan">
        You can depend on our team of plumbers and electricians to always be
        professional. You can also trust us to be courteous and polite while
        working in your home. We understand that you have to take time out of
        your busy schedule for a service visit, which is why we work to solve
        problems efficiently.
      </Box>
      <Box className="marginSpan">
        We have experience in repair, new construction, and remodeling, which
        means you can count on our expertise during your next project. When you
        request a consultation, one of our local electricians or plumbers will
        come to the site and help you find a solution. We offer services for
        your home and commercial building.
      </Box>
      <Box className="marginSpan">
        To request a service visit from a member of our team, call our
        experienced electrical and plumbing contractors at VG Solutions at +91
        9585453106.
      </Box>
    </div>
  );
};

export default Ho2;
