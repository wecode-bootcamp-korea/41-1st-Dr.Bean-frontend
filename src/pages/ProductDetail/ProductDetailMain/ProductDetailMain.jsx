import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCount from "./ProductCount/ProductCount";
import "./ProductDetailMain.scss";
import ProductSelect from "./ProductSelect/ProductSelect";

function ProductDetailMain() {
  const [checkRdoId, setCheckRdoId] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [count, setCount] = useState(1);
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

  return (
    <div className="product-container inner">
      <img src={item_img} alt="product-img" />
      <div className="product-right">
        <div className="right-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <ul className="select-container">
            <ProductSelect
              name="size"
              setSize={setSize}
              setCheckRdoId={setCheckRdoId}
            />
          </ul>

          <ProductCount count={count} setCount={setCount} price={price} />
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
