import React, { useState } from "react";
import "./ProductSelect.scss";

function ProductSelect({ content }) {
  const [click, setClick] = useState(false);

  return (
    <button
      className={"select-btn " + (click ? "selected" : "")}
      onClick={() => {
        setClick(!click);
      }}
    >
      {content}
    </button>
  );
}

export default ProductSelect;
