import React, { useEffect, useState } from "react";
import "./ProductSelect.scss";

function ProductSelect({ id, content, onChangeRadio }) {
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

  return (
    <li>
      <input
        type="radio"
        name="size"
        value={content}
        id={id}
        onChange={onChangeRadio}
      />
      <label for={id} className="select-btn">
        {content}
      </label>
    </li>
  );
}

export default ProductSelect;
