import { Grid } from "@mui/material";
import Recieve from "../assets/Recieve.png";
import "./SidePanel.css";
const SidePanel = () => {
  return (
    <div className="sidepanel">
      <Grid container className="containerGrid">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className="item1"
          sx={{ marginBottom: "30px" }}
        >
          <span className="side1">
            WE WORK <br />
            FOR &nbsp;YOUR <br />
            &nbsp;SATISFACTION
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className="item2"
          sx={{ marginBottom: "30px" }}
        >
          <span className="side2">Plumbing</span>
          <ul>
            <li className="q-peitems">Residential Plumbing</li>
            <li className="q-peitems">Construction Plumbing</li>
            <li className="q-peitems">Emergency Plumbing</li>
            <li className="q-peitems">Taps Repair</li>
            <li className="q-peitems">and many..</li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className="item3"
          sx={{ marginBottom: "26px" }}
        >
          <a href="/request-quote">
            <img className="image1" src={Recieve} alt="Get Quote" />
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className="item2"
          sx={{ marginBottom: "30px" }}
        >
          <span className="side2">Electrical</span>
          <ul>
            <li className="q-peitems">Residential Electrical</li>
            <li className="q-peitems">Construction Electrical</li>
            <li className="q-peitems">Emergency Electrical</li>
            <li className="q-peitems">Rewiring Services</li>
            <li className="q-peitems">and many..</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default SidePanel;
