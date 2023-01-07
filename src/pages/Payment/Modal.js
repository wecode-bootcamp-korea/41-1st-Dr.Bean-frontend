import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-img">
        <div className="item-info">
          <h2>2976 첼시 스무스</h2>
          <div className="option">
            <select className="size">
              <option>100g</option>
              <option>500g</option>
              <option>1kg</option>
            </select>
            <select className="grind">
              <option>(분쇄)에스프레소</option>
              <option>(분쇄)커피메이커</option>
              <option>(분쇄)모카포토</option>
              <option>(분쇄)더치커피</option>
              <option>(분쇄)프렌치프레소</option>
              <option>(분쇄)에어로프레스</option>
              <option>(홀빈)갈비않은 원두</option>
            </select>
          </div>

          <div className="info-price">
            <p className="price">₩260,000{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
