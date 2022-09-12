import React, { useState, useEffect } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import CharactersPagination from "./CharactersPagination";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "../App.css";
import "./Characters.css";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [hasScrolled, setHasScrolled] = useState(false);
  //const [characterShow, setCharacterShow] = useState(false);

  useEffect(() => {
    if (characters !== "Loading...") {
      setCharacterList(characters.results);
    }
  }, [characters]);

  useEffect(() => {
    window.addEventListener("scroll", () => scrollFunction())
  }, [])
  

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false)
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <CharactersPagination
        val={page}
        page={page}
        onChange={handlePageChange}
        pageCount={42}
      />
      <div className="characters-container">
        {characterList.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
      {hasScrolled && (
        <ArrowCircleUpIcon
          color="primary"
          onClick={backToTop}
          className={`back-to-top-btn `}
        />
      )}
    </>
  );
};

export default Characters;
/* ${
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20 ? "not-hidden" : "hidden"
        } */