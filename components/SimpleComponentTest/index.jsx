import React from "react";
import "./SimpleComponentTest.css";

function SimpleComponentTest(props) {
  const { fileCloud_Outline, rectangle205, place, gridGrid_Round } = props;

  return (
    <div class="container-center-horizontal">
      <div className="simple-component-test screen">
        <div className="overlap-group">
          <div className="group-358">
            <div className="group-204">
              <img className="file-cloudoutline" src={fileCloud_Outline} />
              <img className="rectangle-205" src={rectangle205} />
            </div>
            <div className="place roboto-medium-heavy-metal-16px">{place}</div>
          </div>
          <img className="grid-gridround" src={gridGrid_Round} />
        </div>
      </div>
    </div>
  );
}

export default SimpleComponentTest;
