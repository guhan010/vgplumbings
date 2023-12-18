import Req from "../components/Req.tsx";
import SidePanel from "../components/SidePanel.tsx";

const Quote = () => {
  return (
    <div>
      <div className="main-container">
        <div className="sub-div1">
          <Req />
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Quote;
