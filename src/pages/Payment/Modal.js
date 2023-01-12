import "./Modal.scss";

const Modal = props => {
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
