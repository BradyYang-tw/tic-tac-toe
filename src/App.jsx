import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activatePlayer, setActivatePlayer] = useState('X');
  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivatePlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'
      if (prevTurns.length > 0 && prevTurns[0].player ==='X'){
        currentPlayer = 'O';
      }
      return [{square:{row: rowIndex, col:colIndex}, player: currentPlayer}, ...prevTurns]
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={'Player 1'} symbol={'X'} isActivate={activatePlayer==='X'}></Player>
          <Player name={'Player 2'} symbol={'O'} isActivate={activatePlayer==='O'}></Player>
        </ol>
        <GameBoard gameTurns={gameTurns} onSelectSquare={handleSelectSquare} activatePlayerSymbol={activatePlayer}></GameBoard>
      </div>
      <Log></Log>
    </main>
  );
}

export default App;
