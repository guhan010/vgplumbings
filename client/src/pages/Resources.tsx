import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Res01 from "../components/Res01.tsx";
import Res03 from "../components/Res03.tsx";
import "./Plumbing.css";

const Resources = () => {
  return (
    <div>
      <Grid>
        <Res01 />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Res03 />
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Resources;
