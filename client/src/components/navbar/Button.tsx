import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/contact">
      <button className="btn">Contact Us</button>
    </Link>
  );
};

export default Button;
