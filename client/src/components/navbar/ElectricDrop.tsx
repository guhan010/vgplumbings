import "./Dropdown.css";
import { Eitems } from "./Eitems.tsx";

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
          <li key={item.title} className={item.cName}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ElectricDrop;
