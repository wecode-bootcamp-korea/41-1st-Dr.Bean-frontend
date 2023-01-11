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
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.52:3000/items/detail/${productId}`)
      .then(response => response.json())
      .then(result => setProductDetail(result));
  }, []);
  const { item_img, name, description, price } = productDetail;
  const toBuyServer = () => {
    fetch(`http://10.58.52.52:3000/items/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        size: size,
        grind: grind,
        itemId: productId,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  // const toCartServer = () => {
  //   fetch(`http://10.58.52.52:3000/items/${productId}`, { //서버주소수정
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8",
  //     },
  //     body: JSON.stringify({
  //       size: size,
  //       grind: grind,
  //       itemId: productId,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // };
  // console.log(size, grind, productId);
  return (
    <div className="product-container inner">
      <img src={item_img} alt="product-img" />
      <div className="product-right">
        <div className="right-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <ul className="select-container">
            <ProductSelect
              size={size}
              grind={grind}
              setGrind={setGrind}
              setSize={setSize}
              setCheckRdoId={setCheckRdoId}
            />
          </ul>
          <ProductCount count={count} setCount={setCount} price={price} />
          <button className="cart-btn">장바구니</button>
          <button className="buy-btn" onClick={toBuyServer}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailMain;
