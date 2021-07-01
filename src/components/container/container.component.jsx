import React, { useState } from "react";
import Card from "../card/card.component";
import "./container.styles.scss";

function Container() {
  const [cardType, setCardType] = useState("none");
  const handleRadio = (e) => {
      setCardType(e.target.value)
  }
  return (
    <div className="container">
      <div className="toggle">
        <label htmlFor="none">None</label>
        <input
          type="radio"
          name="type"
          id=""
          value="none"
          onChange={(e) => handleRadio(e)}
        />
        <label htmlFor="confidential">Confidential</label>
        <input
          type="radio"
          name="type"
          id=""
          value="confidential"
          onChange={(e) => handleRadio(e)}
        />
        <label htmlFor="attachments">With attachments</label>
        <input
          type="radio"
          name="type"
          id=""
          value="attachments"
          onChange={(e) => handleRadio(e)}
        />
      </div>
      <Card type={cardType}/>
    </div>
  );
}

export default Container;
