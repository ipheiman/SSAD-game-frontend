import React from "react";
import "./style.css";

class Popup extends React.Component {
  render() {
    return (
      <div data-testid="POPUP" className="popup">
        <div data-testid="POPUP_INNER" className="popup_inner">
          <h1 data-testid="TEXT">{this.props.text}</h1>
          <button
            data-testid="BUTTON"
            onClick={this.props.closePopup}
            label="Close me"
          >
            close me
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
