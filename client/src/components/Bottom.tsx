import "./Bottom.css";
import "../styles/FontStyles.css";
import { Box, Grid } from "@mui/material";
import { Pitems } from "./navbar/Pitems.tsx";
import { Eitems } from "./navbar/Eitems.tsx";

const Bottom = () => {
  return (
    <div>
      <Grid container spacing={3} className="customGridContainer">
        <Grid item xs={12} sm={6} md={3}>
          <Box className="customGrid">
            <span className="customTypography">ABOUT US</span>
            <span className="customBody aboutbd">
              With Experience for several years, our technicians and unmatched
              customer care are your best bet when you need installation or any
              plumbing, AC, and electrical services. Learn more about our{" "}
              <a href="/about">electrical, AC, & plumbing contractors!</a>
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="customGrid">
            <span className="customTypography">PLUMBING</span>
            <Grid className="customBody">
              <ul className="ul-bottom">
                {Pitems.map((item) => (
                  <li key={item.title} className="ep-items">
                    {item.title}
                  </li>
                ))}
              </ul>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="customGrid">
            <span className="customTypography">ELECTRICAL</span>
            <Grid className="customBody">
              <ul className="list-b">
                {Eitems.map((item) => (
                  <li key={item.title} className="ep-items">
                    {item.title}
                  </li>
                ))}
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bottom;
