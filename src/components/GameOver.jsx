const GameOver = ({winner, setGameTurns})=>{
    const handleRematch = () => {
        // Logic to reset the game state for a rematch
        console.log("Rematch initiated!");
        setGameTurns((pre)=>{
            return [];
        });
    };
    return (
        <div id="game-over">
            <h1>Game Over</h1>
            { winner &&  <p>{winner} won!</p>}
            { !winner &&  <p>It's a draw!</p>}
            <button onClick={handleRematch}>Rematch !</button>
        </div>
    );
}
export default GameOver;