import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [page, setPage] = useState("Landing");

  return (
    <div className="App">
      <Header setPage={setPage} />
      <Content page={page} />
      <Footer />
    </div>
  );
}

export default App;
