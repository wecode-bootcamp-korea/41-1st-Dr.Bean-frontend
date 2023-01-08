import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCount from "./ProductCount/ProductCount";
import "./ProductDetailMain.scss";
import ProductSelect from "./ProductSelect/ProductSelect";

const GRAM_LIST = [
  {
    id: 1,
    content: "200g",
  },
  {
    id: 2,
    content: "500g",
  },
  {
    id: 3,
    content: "1kg",
  },
];
const GRINDER_LIST = [
  {
    id: 1,
    content: "(분쇄) 에스프레소",
  },
  {
    id: 2,
    content: "(분쇄) 커피메이커",
  },
  {
    id: 3,
    content: "(분쇄) 모카포트",
  },
  {
    id: 4,
    content: "(분쇄) 더치커피",
  },
  {
    id: 5,
    content: "(분쇄) 프렌치프레스",
  },
  {
    id: 6,
    content: "(분쇄) 에어로프레스",
  },
  {
    id: 7,
    content: "홀빈 (생원두)",
  },
];

function ProductDetailMain() {
  const [checkRdoId, setCheckRdoId] = useState("");

  //백엔드 통신 로직
  // const params = useParams();
  // const productId = params.id;

  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   fetch(`http://10.58.52.57:3000/items/detail/${productId}`)
  //     .then(response => response.json())
  //     .then(result => setInfo(result.data));
  // }, [productId]);

  // console.log(info);

  // const { item_img, name, grams, price } = info;

  const onChangeRadio = e => {
    const isRadioChecked = e.target.checked;
    isRadioChecked && setCheckRdoId(e.target.id);
  };

  return (
    <div className="product-container inner">
      {/* <img src={item_img} alt="product-img" /> */}
      <img src="/imgages/coffee_bean.jpg" />
      <div className="product-right">
        <div className="right-container">
          {/* <h1>{name}</h1>
          <p>{grams}</p> */}
          <h1>상품이름</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            molestiae molestias quas doloribus sed sit in voluptas fugiat culpa,
            laborum mollitia ducimus voluptate iusto cumque provident autem
            explicabo alias illo!
          </p>
          <ul className="select-container">
            {GRAM_LIST.map(list => {
              return (
                <ProductSelect
                  id={list.id}
                  content={list.content}
                  name={list.name}
                  onChangeRadio={onChangeRadio}
                />
              );
            })}
          </ul>
          <ul className="select-container">
            {GRINDER_LIST.map(info => {
              return (
                <ProductSelect
                  id={info.id}
                  content={info.content}
                  onChangeRadio={onChangeRadio}
                />
              );
            })}
          </ul>

          <ProductCount />
          <button className="cart-btn">장바구니</button>
          <button className="buy-btn">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
