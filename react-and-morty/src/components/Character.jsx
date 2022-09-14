import React, { useState } from "react";
import CharacterInfoModal from "./CharacterInfoModal";
import CircularProgress from "@mui/material/CircularProgress";
import "./Characters.css";

const Character = ({ character }) => {
  const [isMoreInfoShown, setisMoreInfoShown] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [charLocationData, setCharLocationData] = useState([]);

  const fetchLocationInfo = async (url) => {
    setIsModalLoading(true);
    try {
      const response = await fetch(url);
      const fetchedLocationInfo = await response.json();

      if (!response.ok) {
        throw new Error(fetchedLocationInfo.message);
      }
      setCharLocationData(fetchedLocationInfo);
      setIsModalLoading(false);
      return fetchedLocationInfo;
    } catch (err) {
      console.log(err);
      setIsModalLoading(false);
      throw err;
    }
  };

  const showMoreInfo = async (locationUrl) => {
    const fetchedLocationInfo = await fetchLocationInfo(locationUrl);
    console.log(fetchedLocationInfo);
    setisMoreInfoShown(true);
  };

  const closeModal = () => {
    setisMoreInfoShown(false);
  };

  return (
    <div className="character-card">
      {isMoreInfoShown &&
        (isModalLoading ? (
          <div className="loader-container">
            <CircularProgress color="secondary" size="5em" />
          </div>
        ) : (
          <CharacterInfoModal
            character={character}
            locationOfChar={charLocationData}
            onClose={closeModal}
            modalIsOpenedFromParent={isMoreInfoShown}
          />
        ))}
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
        onClick={() => showMoreInfo(character.location.url)}
      />
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
    </div>
  );
};

export default Character;
