import React, { Component } from "react";
import { connect } from "react-redux";
import walkSprite from "./rsz_pokemonplayer.png";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      spriteLocation: "0px 0px",
      direction: "east",
      walkIndex: 0
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  }
  getNewPosition(oldPos, direction) {
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case "EAST":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;

      case "SOUTH":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;

      case "WEST":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;

      case "NORTH":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    }
  }

  getWalkIndex() {
    const walkIndex = this.state.walkIndex;
    return walkIndex >= 3 ? 0 : walkIndex + 1;
  }

  //true false function
  observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  observeImpassable(oldPos, newPos) {
    const tiles = this.props.tiles;
    const y = newPos[1] / SPRITE_SIZE; //40 divide 40 = 1 step
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    //TODO: 
    return nextTile < 3;
  }

  passThroughImpassable(oldPos, newPos) {
    const tiles = this.props.tiles;
    const y = newPos[1] / SPRITE_SIZE; //40 divide 40 = 1 step
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];

    return nextTile < 3 || nextTile > 6;
  }

  isObstacle(newPos) {
    const tiles = this.props.tiles;
    const y = newPos[1] / SPRITE_SIZE; //40 divide 40 = 1 step
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];

    return nextTile > 6;
  }

  //dispatch
  dispatchMove(direction, newPos) {
    const walkIndex = this.getWalkIndex();
    this.setState({
      position: newPos,
      direction,
      walkIndex,
      spriteLocation: this.getSpriteLocation(direction, walkIndex)
    });
  }

  //this is almost the same as attempt move except it will allow u to move thru obstacles, this is for demo
  removeObstacle() {
    
    // const newPos = this.getNewPosition(oldPos, direction);

    // if (
    //   this.observeBoundaries(oldPos, newPos) &&
    //   this.passThroughImpassable(oldPos, newPos)
    // )
    //   this.dispatchMove(direction, newPos);
    const oldPos = this.state.position;
    const direction = this.state.direction;
    const newPos = this.getNewPosition(oldPos, direction);

    if (this.isObstacle(newPos)) {
      this.props.handleRemoveObstacle(newPos);
    }
  }

  attemptMove(direction) {
    const oldPos = this.state.position;
    const newPos = this.getNewPosition(oldPos, direction);
    //TODO: Don't allow player to move if quiz-in-progress aka togglePopup is true
    if (this.observeBoundaries(oldPos, newPos) && this.observeImpassable(oldPos, newPos))
      this.dispatchMove(direction, newPos);
  }

  handleKeyDown(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return this.attemptMove("WEST");
      case 38:
        return this.attemptMove("NORTH");
      case 39:
        return this.attemptMove("EAST");
      case 40:
        return this.attemptMove("SOUTH");

      case 32:
        return this.removeObstacle();
      //   removeObstacle("EAST") ||
      // removeObstacle("NORTH") ||
      //   removeObstacle("WEST")

      default:
        console.log(e.keyCode);
    }
  }
  

  render () {
    return (
      <div
        style={{
          position: "absolute",
          top: this.state.position[1],
          left: this.state.position[0],
          backgroundImage: `url('${walkSprite}')`,
          backgroundPosition: this.state.spriteLocation,
          width: "40px",
          height: "40px"
        }}
      />
    );
  }
  
}

export default Player;
