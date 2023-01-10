import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCount from "./ProductCount/ProductCount";
import "./ProductDetailMain.scss";
import ProductSelect from "./ProductSelect/ProductSelect";
import { GRAM_LIST, GRIND_LIST } from "./SELECT_LIST";

function ProductDetailMain() {
  const [checkRdoId, setCheckRdoId] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [size, setSize] = useState();
  const [grind, setGrind] = useState();

  //백엔드 통신 로직
  // const params = useParams();
  // const productId = params.id;

  useEffect(() => {
    fetch("http://10.58.52.150:3000/items/detail/1")
      .then(response => response.json())
      .then(result => setProductDetail(result));
  }, []);

  const { item_img, name, description, price } = productDetail;

  const toServer = () => {
    fetch("http://10.58.52.150:3000/items/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        size: size,
        grind: grind,
        itemId: 1,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  console.log(size, grind);

  return (
    <div className="product-container inner">
      <img src={item_img} alt="product-img" />
      <div className="product-right">
        <div className="right-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <ul className="select-container">
            {GRAM_LIST.map(list => {
              return (
                <ProductSelect
                  key={list.id}
                  id={list.id}
                  className="border"
                  name="size"
                  content={list.content}
                  setSize={setSize}
                  setCheckRdoId={setCheckRdoId}
                />
              );
            })}
          </ul>
          <ul className="select-container">
            {GRIND_LIST.map(info => {
              return (
                <ProductSelect
                  key={info.id}
                  id={info.id}
                  className="border"
                  name="grinder"
                  content={info.content}
                  setGrind={setGrind}
                  setCheckRdoId={setCheckRdoId}
                />
              );
            })}
          </ul>

          <ProductCount price={price} />
          <button className="cart-btn" onClick={toServer}>
            장바구니
          </button>
          <button className="buy-btn" onClick={toServer}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
