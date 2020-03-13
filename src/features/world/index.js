import React, { Component } from "react";
import Player from "../player";
import Map from "../map";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "640px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;
