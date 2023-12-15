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
      <Grid container spacing={4} className="plumbcontainer">
        <Grid item xs={12} sm={8} md={8}>
          <Grid>
            <Elec02 />
            <Elec03 />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SidePanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Electrical;
