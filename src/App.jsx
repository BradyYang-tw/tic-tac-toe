import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={'Player 1'} symbol={'O'}></Player>
          <Player name={'Player 2'} symbol={'X'}></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  );
}

export default App;
