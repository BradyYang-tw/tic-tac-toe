import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";

function App() {
  let winner;
  const [gameTurns, setGameTurns] = useState([]);
  const [activatePlayer, setActivatePlayer] = useState("X");
  console.log("gameTurns", gameTurns);
  for (let i = 0; i < gameTurns.length; i++) {
    const { square, player } = gameTurns[i];
    const { row, col } = square;
    // console.log(row, col);
    // console.log(WINNING_COMBINATIONS);
    if (
      WINNING_COMBINATIONS.some(
        (combination) => {
          console.log("combination", combination);
          return combination.every((pos) => {
            console.log("pos", pos);
            return gameTurns.some((turn) => {
              console.log("turn", turn);
              return turn.square.row == pos.row && turn.square.col == pos.column && turn.player === player;
            });
          });
        }
        // gameTurns.some(turn => turn.square.row === pos.row && turn.square.col === pos.col)
      )
    ) {
      console.log(`Player ${player} wins!`);
      winner = player;
      break;
    }
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivatePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActivate={activatePlayer === "X"}
          ></Player>
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActivate={activatePlayer === "O"}
          ></Player>
        </ol>
        {winner && <p>You Win {winner}</p>}
        <GameBoard
          gameTurns={gameTurns}
          onSelectSquare={handleSelectSquare}
          activatePlayerSymbol={activatePlayer}
        ></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
