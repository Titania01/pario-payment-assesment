import { CardWrapper } from "./payment-card";

const PaymentCard = () => {
  return (
    <CardWrapper>
      <div className="card-top">
        <p className="text">Item Name</p>
        <p className="text"># Price</p>
      </div>
      <div className="middle-text">
        <div className="first-text">
          <p>Data science and usability</p>
          <p>50,000.00</p>
        </div>
        <div className="first-text">
          <p>Shipping</p>
          <p>0.00</p>
        </div>
      </div>
      <div className="card-line"></div>
      <div className="total">
        <p>Total</p>
        <p>50,000.00</p>
      </div>
    </CardWrapper>
  );
};

export default PaymentCard;
