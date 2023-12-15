import { Grid } from "@mui/material";
import SidePanel from "../components/SidePanel.tsx";
import Elec01 from "../components/Elec01.tsx";

const Electrical = () => {
  return (
    <div>
      <Grid>
        <Elec01 />
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

export default Electrical;
