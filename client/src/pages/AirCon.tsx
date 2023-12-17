import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import "./Plumbing.css";
import Ac02 from "../components/Ac02.tsx";
import Ac03 from "../components/Ac03.tsx";
import Ac01 from "../components/Ac01.tsx";

const AirCon = () => {
  return (
    <div>
      <Grid>
        <Ac01 />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Grid>
            <Ac02 />
            <Ac03 />
          </Grid>
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default AirCon;
