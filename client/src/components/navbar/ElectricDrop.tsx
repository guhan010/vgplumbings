import "./Dropdown.css";
import { Eitems } from "./Eitems.tsx";
import { Link } from "react-router-dom";

import { useState } from "react";

const ElectricDrop = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {Eitems.map((item) => (
          <li key={item.title}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ElectricDrop;
