import FormC from "../components/FormC.tsx";
import SidePanel from "../components/SidePanel.tsx";

const Contact = () => {
  return (
    <div>
      <div className="main-container">
        <div className="sub-div1">
          <FormC />
        </div>
        <div className="plumbcontainer">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Contact;
