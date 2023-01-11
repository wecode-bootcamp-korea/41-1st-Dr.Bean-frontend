import "./Modal.scss";

const Modal = props => {
  // const [paymentList, setPaymentList] = [];

  console.log(props.test);

  return props.test.map((item, index) => (
    <div className="modal" hidden={props.hidden} key={index}>
      <div className="modal-img">
        <div className="item-info">
          <h2>{item.name}</h2>
          <div className="option">
            <div className="size">{item.grams}</div>
            <div className="grind">{item.grind}</div>
          </div>

          <div className="info-price">
            <p className="price">₩{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Modal;
