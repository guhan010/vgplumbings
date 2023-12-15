import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Plumb01 from "../components/Plumb01.tsx";

const Plumbing = () => {
  return (
    <div>
      <Grid>
        <Plumb01 />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}></Grid>
        <Grid item xs={12} sm={4} md={4}>
          <SidePanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Plumbing;
