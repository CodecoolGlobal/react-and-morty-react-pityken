import React, { useState, useEffect } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
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

const ScrollableCharacters = () => {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [characterList, setCharacterList] = useState([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    if (characters !== "Loading...") {
      setCharacterList(characters.results);
      setLoading(false);
      setAllCharacters((prevState) => prevState.concat(characters.results));
    }
  }, [characters]);

  useEffect(() => {
    window.addEventListener("scroll", () => scrollFunction());
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);
  
    useEffect(() => {
      if (!isFetching) return;
      fetchMoreCharacters();
    }, [isFetching]);


  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      console.log("Fetch more characters");
      setIsFetching(true);
    }
    return;
  };

  const fetchMoreCharacters = () => {
    setPage((prev) => prev + 1);
    setIsFetching(false);
  }

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <CircularProgress color="secondary" size="5em" />
        </div>
      ) : (
        <div className="characters-container">
          {allCharacters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
      )}
      {isFetching && (
        <div className="content-loading">
          <CircularProgress color="secondary" size="5em" />
          <p>Fetching more characters...</p>
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

export default ScrollableCharacters;
