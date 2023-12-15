import "./Dropdown.css";
import { Pitems } from "./Pitems.tsx";

import { useState } from "react";

const PlumbDrop = () => {
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
        {Pitems.map((item) => (
          <li key={item.title} className={item.cName}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlumbDrop;
