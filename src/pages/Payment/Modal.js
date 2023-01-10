import "./Modal.scss";

const Modal = props => {
  // const [paymentList, setPaymentList] = [];

  return (
    <div className="modal" hidden={props.hidden}>
      <div className="modal-img">
        <div className="item-info">
          <h2>{}</h2>
          <div className="{option}">
            <div className="{size}" />
            <div className="{grind}" />
          </div>

          <div className="info-price">
            <p className="price">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
