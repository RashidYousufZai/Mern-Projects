import React from "react";
import "./Payment.scss";
import { BiCube } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Payment = () => {
  return (
    <div className="container">
      <div className="row payment-row">
        <div className="col-12 col-md-4 payment-col">
          <BiCube />
          <h3>Free Shipping Method</h3>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className="col-12 col-md-4 payment-col">
          <TfiReload />
          <h3>Free Shipping Method</h3>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className="col-12 col-md-4 payment-col">
          <RiSecurePaymentLine />
          <h3>Free Shipping Method</h3>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
      </div>
    </div>
  );
};
export default Payment;
