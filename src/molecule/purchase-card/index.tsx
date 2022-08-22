import React from "react";
import { Heading } from "../../atoms/Typography";
import Checked from "../../vectors/checked";
import { PurchaseWrapper, ScreenOverlay } from "./purchase-card";

const PurchaseCard = () => {
  const reload = () => window.location.reload();
  return (
    <ScreenOverlay>
      <PurchaseWrapper>
        <div className="check-wrap">
          <Checked />
        </div>
        <div className="text-wrapper">
          <Heading>Purchase Completed</Heading>
          <p className="text">
            Please check your email for details concerning this transaction
          </p>
          <a href="" className="anchor-tag" onClick={reload}>
            Return Home
          </a>
        </div>
      </PurchaseWrapper>
    </ScreenOverlay>
  );
};

export default PurchaseCard;
