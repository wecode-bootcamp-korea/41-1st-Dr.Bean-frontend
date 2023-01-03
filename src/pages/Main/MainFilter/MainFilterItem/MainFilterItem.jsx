import React from "react";
import "./MainFilterItem.scss";

function MainFilterItem() {
  return (
    <ul className="items_container inner">
      <li>
        <img className="item_img" />
        <span className="item_name" />
        <span className="item_price" />
      </li>
    </ul>
  );
}

export default MainFilterItem;
