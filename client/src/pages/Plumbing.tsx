import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Plumb01 from "../components/Plumb01.tsx";
import Plumb02 from "../components/Plumb02.tsx";
import "./Plumbing.css";
import Plumb03 from "../components/Plumb03.tsx";

const Plumbing = () => {
  return (
    <div>
      <Grid>
        <Plumb01 />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Grid>
            <Plumb02 />
            <Plumb03 />
          </Grid>
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Plumbing;
