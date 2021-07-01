import React from "react";
import "./card.styles.scss";
import pdf from "../../assets/pdf-file.png";
import print from "../../assets/print.png";
import down from "../../assets/arrow.png";
import alert from "../../assets/warn.png";
import locked from "../../assets/document.png";
import clip from "../../assets/paper-clip.png";
import CustomButton from "../CustomButton/custom-button.component";

function Card({ isConfidential, isAttachment }) {
  return (
    <div className="card">
      <div className="first__row">
        <div className="request_title">
          <p>Cancel / recall payment, GBP 1,000.00</p>
          <p>1234567890123456 (GB), KUIML Business Company</p>
        </div>

        <div className="request_actions">
          <div className="image br">
            <img src={pdf} alt="pdf icon" />
          </div>
          <div className="image">
            <img src={print} alt="print icon" />
          </div>
          <CustomButton type="tertiary-cta">Reject</CustomButton>
          <CustomButton type="secondary-cta">Authorise</CustomButton>
        </div>
      </div>

      <div className="second__row">
        <div className="request_details">
          <div className="col">
            <p>Request Reference</p>
            <p>SET29383ABCH</p>
          </div>

          <div className="col">
            <p>Category</p>
            <p>Payment</p>
          </div>

          <div className="col">
            <p>Request Status</p>
            <div className="pending">
              <img src={alert} alt="alert icon" />
              <p>Pending Authorization</p>
            </div>
          </div>
        </div>

        <div className="full_details">
          <h3>Full Details </h3>
          <img src={down} alt="down icon" />
        </div>
      </div>

      {(isConfidential || isAttachment) && (
        <div className="extra-message">
          {isAttachment && (
            <div className="attachments">
              <img src={clip} alt="attachment" />
              <p>Manage Attachments</p>
            </div>
          )}

          {isConfidential && (
            <div className="confidential">
              <img src={locked} alt="lock icon" />
              <p>
                <span>Private Request. </span>This request can only be seen by
                you.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
