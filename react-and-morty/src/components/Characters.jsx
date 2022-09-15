import React, { useState, useEffect } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import CharactersPagination from "./CharactersPagination";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CircularProgress from "@mui/material/CircularProgress";
import { CSSTransition } from "react-transition-group";

import "../App.css";
import "./Characters.css";

const bactToTopStyles = {
  position: "fixed",
  bottom: "2%",
  right: "2%",
  fontSize: "5em",
  cursor: "pointer",
};

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    if (characters !== "Loading...") {
      setCharacterList(characters.results);
      setLoading(false);
    }
    if (characters.info) {
      setPageCount(characters.info.pages)
    }
  }, [characters]);

  useEffect(() => {
    window.addEventListener("scroll", () => scrollFunction());
  }, []);

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
      setHasScrolled(false);
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
        pageCount={pageCount}
      />
      {loading ? (
        <div className="loader-container">
          <CircularProgress color="secondary" size="5em" />
        </div>
      ) : (
        <div className="characters-container">
          {characterList.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
      )}

      <CSSTransition
        in={hasScrolled}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="back-to-top"
      >
        <ArrowCircleUpIcon
          color="secondary"
          onClick={backToTop}
          sx={bactToTopStyles}
        />
      </CSSTransition>

    </>
  );
};

export default Characters;