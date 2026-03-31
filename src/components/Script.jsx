import { useState } from "react";

export default function Script() {
  const [active, setActive] = useState(null); 
  const items = ["Previous", 1, 2, 3, 4, 5, 6, 7, "Next"];

  return (
    <ul className="pagenation">
      {items.map((item, index) => (
        <li
          key={index}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>{item}</a>
        </li>
      ))}
    </ul>
  );
}