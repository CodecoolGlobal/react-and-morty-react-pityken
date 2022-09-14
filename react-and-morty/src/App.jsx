import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Landing");
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <Header setPage={setPage} />
      <Content page={page} />
      <Footer />
    </div>
  );
}

export default App;
