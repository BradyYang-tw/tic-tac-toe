import { useState } from "react";
const Player = ({ name, symbol , isActivate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEdit(){
    setIsEditing((editing)=> !editing);
  }

  function handleChange(event){
    setEditedName(event.target.value);
  }
  return (
    <div >
        <span className="player">
            <li className={isActivate ? 'active':undefined}>
              {
                isEditing ? (
                  <input type="text" defaultValue={editedName} onChange={handleChange} required/>
                ) : (
                  <span className="player-name">{editedName}</span>
                )
              }
              <span className="player-symbol">{symbol}</span>
            </li>
          </span>
          <button onClick={handleEdit}>{isEditing ? 'Save': 'Edit'}</button>
    </div>
  );
};

export default Player;