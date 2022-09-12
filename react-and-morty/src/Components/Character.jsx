import React, { useState } from "react";
import MoreInfoModal from "./MoreInfoModal";

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

  const closeModal = () => {
    setisMoreInfoShown(false);
  };

  return (
    <div className="character-card">
      {isMoreInfoShown &&         <MoreInfoModal character={character} onClose={closeModal}  />}
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
