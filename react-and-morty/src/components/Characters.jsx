import React, { useState, useEffect } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import CharactersPagination from "./CharactersPagination";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CircularProgress from "@mui/material/CircularProgress";
import { CSSTransition } from "react-transition-group";
 
import "../App.css";
import "./Characters.css";
import { useFetch } from "../api/useFetch";
 
const bactToTopStyles = {
  position: "fixed",
  bottom: "2%",
  right: "2%",
  fontSize: "5em",
  cursor: "pointer",
};
 
const Characters = () => {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [characterList, setCharacterList] = useState([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [allCharacters, setAllCharacters] = useState([])
 
  useEffect(() => {
    if (characters !== "Loading...") {
      setCharacterList(characters.results);
      setLoading(false);
      setAllCharacters(prevState => prevState.concat(characters.results));
    }
  }, [characters]);
 
  useEffect(() => {    
    window.addEventListener("scroll", () => scrollFunction());
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);
 
  const handlePageChange = (event, value) => {
    setPage(value);
  };
 
  const scrollFunction = () => {
/*     if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    } */
 
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    setIsFetching(true);
  };
 
  function fetchMoreListItems() {
    setPage(prev => prev + 1)
 
    setTimeout(() => {
      //setAllCharacters(prevState => prevState.concat(characters.results));
      setIsFetching(false);
    }, 2000);
  }
 
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);
 
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