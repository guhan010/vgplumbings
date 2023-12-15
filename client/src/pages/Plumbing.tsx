import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Plumb01 from "../components/Plumb01.tsx";
import Plumb02 from "../components/Plumb02.tsx";
import "./Plumbing.css";

const Plumbing = () => {
  return (
    <div>
      <Grid>
        <Plumb01 />
      </Grid>
      <Grid container spacing={4} className="plumbcontainer">
        <Grid item xs={12} sm={8} md={8}>
          <Grid>
            <Plumb02 />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SidePanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Plumbing;
