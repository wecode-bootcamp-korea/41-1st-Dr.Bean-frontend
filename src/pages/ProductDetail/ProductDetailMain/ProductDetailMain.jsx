import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCount from "./ProductCount/ProductCount";
import "./ProductDetailMain.scss";
import ProductSelect from "./ProductSelect/ProductSelect";

function ProductDetailMain() {
  const [checkRdoId, setCheckRdoId] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [count, setCount] = useState(1);
  const [size, setSize] = useState();
  const [grind, setGrind] = useState();

  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.52.108:3000/items/detail/${productId}`)
      .then(response => response.json())
      .then(result => setProductDetail(result));
  }, []);
  const { item_img, name, description, price } = productDetail;

  const toBuyServer = () => {
    fetch(`http://10.58.52.108:3000/items/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        itemId: productId,
        quantity: count,
        size: size,
        grind: grind,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    navigate("/payment");
  };

  const toCartServer = () => {
    fetch("http://10.58.52.108:3000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        itemId: productId,
        quantity: count,
        size: size,
        grind: grind,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === "CART_LIST_CREATED"
          ? navigate("/cart")
          : alert("로그인을 해주세요");
      });
  };

  console.log(size, grind, productId);

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
          <ProductCount
            count={count}
            setCount={setCount}
            price={price}
            onClick={toCartServer}
          />
          <button className="cart-btn" onClick={toCartServer}>
            장바구니
          </button>
          <button className="buy-btn" onClick={toBuyServer}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
