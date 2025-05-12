const Player = ({ name, symbol }) => {
  return (
    <div>
        <span className="player">
            <li>
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </li>
          </span>
          <button>Edit</button>
    </div>
  );
};

export default Player;