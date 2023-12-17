import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Elec01 from "../components/Elec01.tsx";
import Elec02 from "../components/Elec02.tsx";
import Elec03 from "../components/Elec03.tsx";
import "./Plumbing.css";

const Electrical = () => {
  return (
    <div>
      <Grid>
        <Elec01 />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Grid>
            <Elec02 />
            <Elec03 />
          </Grid>
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Electrical;
