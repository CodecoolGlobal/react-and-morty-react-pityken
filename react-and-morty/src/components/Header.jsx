import React from "react";
import "./Header.css";
import Button from "./Button";

export default function Header(props) {
    const setPage = props.setPage;

    function showCharacters() {
        setPage("Characters");
    }
    function showLocations() {
        setPage("Locations");
    }

    return (
        <header>
            <div className="imgContainer">
                <img src="../../header_image.png" alt="Rick and Morty logo" onClick={() => { setPage("Landing") }} />
            </div>
            <div className="buttons">
                <Button text="Characters" showContent={showCharacters} />
                <Button text="Locations" showContent={showLocations} />
            </div>
        </header>
    )
}