import React, { Component } from "react";
import World from "./features/world";
import ReactPlayer from "react-player";
import haha 
// import ReactPlayer from "react-player";

class App extends Component {
  render() {
    return (
      <div>
        <World />
        {/* <ReactPlayer
          className="react-player"
          width="0%"
          height="0%"
          url="https://www.youtube.com/watch?v=5O3a5opHbY4&t=18s"
          playing
        /> */}
      </div>
    );
  }
}

export default App;
