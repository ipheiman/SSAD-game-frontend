import React from "react";
import "./style.css";

class Popup extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div data-testid="POPUP" className="popup">
        <div data-testid="POPUP_INNER" className={`${this.props.pokemon}`}>
            <h1 data-testid="TEXT" className="popup-header" >{this.props.text} </h1>
            
            {/* TODO: only appears after question is correct */}
            <button className="popup-btn-run" onClick={this.props.closePopup}>RUN</button>
        </div>
      </div>
    );
  }
}

export default Popup;
