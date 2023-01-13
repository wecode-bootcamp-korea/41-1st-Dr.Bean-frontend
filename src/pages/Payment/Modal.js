import "./Modal.scss";

const Modal = props => {
  const paymentList = [
    { title: "아프리카", area: ["케냐", "에티오피아", "르완다", "카메룬"] },
    { title: "남 아메리카", area: ["브라질", "콜롬비아", "페루", "에콰도르"] },
    {
      title: "북 중앙 아메리카",
      area: ["파나마", "코스타리카", "온두라스", "과테말라"],
    },
    { title: "아시아", area: ["인도네시아", "예맨", "베트남"] },
  ];

  return props.productList.map((item, index) => (
    <div className="modal" hidden={props.hidden} key={index}>
      <img src={item.item_img} className="modal-img" />
      <div className="item-info-modal">
        <h2>{item.name}</h2>
        <div className="option">
          <div className="size">{item.grams}</div>
          <div className="grind">{item.grind}</div>
        </div>

        <div className="info-price">
          <p className="price-modal">
            ₩
            {parseInt(item.price)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  ));
};
export default Modal;
