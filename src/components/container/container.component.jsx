import React, { useState } from "react";
import Card from "../card/card.component";
import "./container.styles.scss";

function Container() {
  const [isConfidential, setIsConfidential] = useState(false);
  const [isAttachment, setIsAttachment] = useState(false);

  return (
    <div className="container">
      <div className="toggle">
        <label htmlFor="confidential">Confidential</label>
        <input
          type="checkbox"
          name="confidential"
          id=""
          value="confidential"
          onChange={(e) =>
            e.target.checked
              ? setIsConfidential(true)
              : setIsConfidential(false)
          }
        />
        <label htmlFor="attachments">With attachments</label>
        <input
          type="checkbox"
          name="attachments"
          id=""
          value="attachments"
          onChange={(e) =>
            e.target.checked ? setIsAttachment(true) : setIsAttachment(false)
          }
        />
      </div>
      <Card
        isConfidential={isConfidential}
        isAttachment={isAttachment}
      />
    </div>
  );
}

export default Container;
