import React, { useState } from "react";

export const MoreCharacterInfo = ({ character }) => {
  return <div className="more-character-info">Character</div>;
};

const Character = ({ character }) => {
  const [isMoreInfoShown, setisMoreInfoShown] = useState(false);

  const showMoreInfo = (e, id) => {
    if (e.target) {
      setisMoreInfoShown((prevValue) => !prevValue);
    }
  };

  return (
    <div className="character-card">
      <img
        className="characters-img"
        src={character.image}
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
    </div>
  );
};

export default Character;
