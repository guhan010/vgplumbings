import { Grid } from "@mui/material";
import Ab01 from "../components/Ab01.tsx";
import SidePanel from "../components/SidePanel.tsx";
import Ab02 from "../components/Ab02.tsx";
import Ab03 from "../components/Ab03.tsx";

const About = () => {
  return (
    <div>
      <Grid>
        <Ab01 />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Grid>
            <Ab02 />
            <Ab03 />
          </Grid>
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default About;
