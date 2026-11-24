import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
  stats,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [avatar, setAvatar] = useState('/avatar-default.jpg');
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    // shortcut: object URLs live until reload; revoke them if uploads get frequent.
    if (file) setAvatar(URL.createObjectURL(file));
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <label className="player-avatar">
          <img
            src={avatar}
            alt={`${playerName} avatar`}
            title={`Wins: ${stats.wins} · Draws: ${stats.draws}`}
            width={56}
            height={56}
          />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />
        </label>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Guardar' : 'Editar'}</button>
    </li>
  );
}
