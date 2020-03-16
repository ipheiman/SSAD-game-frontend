import React, { Component } from "react";
import Player from "../player";
import Map from "../map";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";
import { SPRITE_SIZE } from "../../config/constants";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: tiles,
      questions: 
    }
  }

  handleRemoveObstacle = (pos) => {
    var newTiles = this.state.tiles;
    const y = pos[1] / SPRITE_SIZE; //40 divide 40 = 1 step
    const x = pos[0] / SPRITE_SIZE;
    newTiles[y][x] = 0;

    this.setState({
      tiles: newTiles
    });
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "1200px",
          height: "640px",
          margin: "20px auto"
        }}
      >
        <Map tiles={this.state.tiles} />
        <Player tiles={this.state.tiles} handleRemoveObstacle={this.handleRemoveObstacle} />
      </div>
    );

      }
}

export default World;
