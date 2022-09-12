import React, { useState } from "react";
import CharacterInfoModal from "./CharacterInfoModal";

export const MoreCharacterInfo = ({ character }) => {
  return <div className="more-character-info">Character</div>;
};

const Character = ({ character }) => {
  const [isMoreInfoShown, setisMoreInfoShown] = useState(false);

  const showMoreInfo = (e, id) => {
    if (e.target) {
      setisMoreInfoShown(true);
    }
  };

  const closeModal = () => {
    setisMoreInfoShown(false);
  };

  return (
    <div className="character-card">
      {isMoreInfoShown && (
        <CharacterInfoModal character={character} onClose={closeModal} modalIsOpenedFromParent={isMoreInfoShown} />
      )}
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
        onClick={showMoreInfo}
      />
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
    </div>
  );
};

export default Character;
