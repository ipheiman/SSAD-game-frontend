import React, { Component } from "react";
import Player from "../player";
import Map from "../map";
import { tiles } from "../../data/maps/1";
import { SPRITE_SIZE } from "../../config/constants";
import Popup from "../Popup";

class World extends Component {
  constructor(props) {
    super(props);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      tiles: tiles,
      showPopup: false,
      pokemon: ''
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  }

  hidePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  setPokemon = pokemon => {
    this.setState({
      pokemon: pokemon
    });
  };

  handleKeyDown(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 27:
        this.hidePopup();
        //console.log("SHOWPOPUP: ", this.state.showPopup);
        return;
      default:
        console.log(e.keyCode);
    }
  }

  handleRemoveObstacle = pos => {
    var newTiles = this.state.tiles;
    const y = pos[1] / SPRITE_SIZE; //40 divide 40 = 1 step
    const x = pos[0] / SPRITE_SIZE;
    newTiles[y][x] = 0;

    this.setState({
      tiles: newTiles,
      showPopup: true
    });
  };

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
        <Player
          tiles={this.state.tiles}
          showPopup={this.state.showPopup}
          handleRemoveObstacle={this.handleRemoveObstacle}
          setPokemon={this.setPokemon}
        />

        {this.state.showPopup ? (
          <Popup
            //TODO: fetches question according to coordinates
            text="QUIZ QUESTION"
            pokemon={this.state.pokemon} 
            //TODO: only appears after question has been answered correctly
            closePopup={this.hidePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default World;
