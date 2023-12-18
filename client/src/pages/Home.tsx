import { Grid } from "@mui/material";
import Slide from "../components/Slide.tsx";
import SideForm from "../components/SideForm.tsx";
import Ho1 from "../components/Ho1.tsx";
import Ho2 from "../components/Ho2.tsx";

const Home = () => {
  return (
    <div>
      <Grid>
        <Slide />
      </Grid>
      <div className="main-container">
        <div className="sub-div1">
          <Ho1 />
          <Ho2 />
        </div>
        <div className="plumbcontainer">
          <SideForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
