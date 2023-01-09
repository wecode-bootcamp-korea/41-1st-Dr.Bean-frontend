import React from "react";
import "./ProductSelect.scss";

function ProductSelect({
  id,
  name,
  content,
  setCheckRdoId,
  setSize,
  setGrind,
}) {
  const onChangeRadio = e => {
    const isRadioChecked = e.target.checked;
    isRadioChecked && setCheckRdoId(e.target.id);

    if (name === "size") {
      setSize(e.target.id);
    } else {
      setGrind(e.target.id);
    }
  };

  return (
    <li>
      <input
        type="radio"
        name={name}
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
