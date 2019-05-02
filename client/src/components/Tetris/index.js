import React, { Component } from "react";
import "./style.css";

class Tetris extends Component {
  render() {
    return (
      <div>
        <p id="lose-message">you lose!</p>
        <div id='wrapper'>
          <canvas id="tetris" width="300" height="600"></canvas>
          <p>Next Piece:</p>
          <canvas id="nextPiece" width="180" height="150"></canvas>
          <h4>Score: <span id='score'>0</span></h4>
        </div>
      </div>
    );
  }
}

export default Tetris;


