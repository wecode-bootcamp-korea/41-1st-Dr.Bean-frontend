import React, { useEffect, useState } from "react";
import "./ProductSelect.scss";

function ProductSelect({ content }) {
  const [click, setClick] = useState(false);
  const [clickValue, setClickValue] = useState("");
  // const [btnState, setBtnState] = useState(false);

  const btnStateHandler = e => {
    setClick(!click);
    // setBtnState(true);
    setClickValue(e.target.value);
  };

  const [data, setData] = useState({
    itemId: "",
    size: "",
    grind: "",
  });

  // useEffect(() => {
  //   fetch("http://10.58.52.57:3000/items/1", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //     body: JSON.stringify({
  //       itemId: content.id,
  //       size: { clickValue },
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => setData(res.data));
  // });
  console.log(click);

  return (
    <ul>
      <li
        // className={"select-btn " + (click ? "selected" : "")}
        onClick={btnStateHandler}
      >
        <label>
          <input type="radio" value={content} name="size" />
          {content}
        </label>
      </li>
    </ul>
  );
}

export default ProductSelect;
