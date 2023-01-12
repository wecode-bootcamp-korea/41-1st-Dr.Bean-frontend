import React from "react";
import "./ProductSelect.scss";
import { GRAM_LIST, GRIND_LIST } from "./SELECT_LIST";

function ProductSelect({ setCheckRdoId, setSize, setGrind, size, grind }) {
  const onChangeRadio = e => {
    const isRadioChecked = e.target.checked;
    isRadioChecked && setCheckRdoId(e.target.id);
    e.target.name === "size" ? setSize(e.target.id) : setGrind(e.target.id);
  };

  return (
    <>
      {GRAM_LIST.map(list => {
        return (
          <li key={list.id}>
            <input
              type="radio"
              name="size"
              value={list.content}
              id={list.id}
              className="radio-input"
              onChange={onChangeRadio}
            />
            <label for={list.id} className="select-btn">
              {list.content}
            </label>
          </li>
        );
      })}
      {GRIND_LIST.map(info => {
        return (
          <li key={info.id}>
            <input
              type="radio"
              name="grind"
              value={info.content}
              id={info.id}
              className="radio-input"
              onChange={onChangeRadio}
            />
            <label for={info.id} className="select-btn">
              {info.content}
            </label>
          </li>
        );
      })}
    </>
  );
}

export default ProductSelect;
