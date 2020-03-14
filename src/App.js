import React, { Component } from "react";
import World from "./features/world";
import ReactPlayer from "react-player";
import Popup from "./features/Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 32) {
      this.togglePopup();
    }
  }
  //originally state is false
  //togglepopup sets the state to true so that popup will open
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <World />
        <ReactPlayer
          width="0%"
          height="0%"
          url="https://www.youtube.com/watch?v=5O3a5opHbY4&t=18s"
          playing
        />

        {this.state.showPopup ? (
          <Popup
            text="QUIZ QUESTION"
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
