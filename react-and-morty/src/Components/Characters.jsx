import React, { useState, useEffect } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import "../App.css";
import "./Characters.css";

const Characters = () => {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);

  const [characterList, setCharacterList] = useState([]);
  //const [characterShow, setCharacterShow] = useState(false);

  useEffect(() => {
    if (characters !== "Loading...") {
      setCharacterList(characters.results);
    }
  }, [characters]);

  /*   
  const handlePageChange = (event, value) => {
    setPage(value);
    console.log(value);
  };


 */
  return (
    <div className="characters-container">
      {characterList.map((character) => (
        <Character character={character} key={character.id}/>
      ))}
    </div>
  );
};

export default Characters;
