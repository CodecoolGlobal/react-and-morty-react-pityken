import React, { useState } from "react";
import { LocationInfoModal } from "./LocationInfoModal";
import CircularProgress from "@mui/material/CircularProgress";
import "./Locations.css";

export const Location = ({ location }) => {
    const [isMoreInfoShown, setisMoreInfoShown] = useState(false);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [characterData, setCharacterData] = useState([]);

    const fetchCharacterInfo = async (url) => {
        setIsModalLoading(true);
        try {
            const response = await fetch(url);
            const fetchedCharacterInfo = await response.json();

            if (!response.ok) {
                throw new Error(fetchedCharacterInfo.message);
            }
            setCharacterData(fetchedCharacterInfo);
            setIsModalLoading(false);
            return fetchedCharacterInfo;
        } catch (err) {
            console.log(err);
            setIsModalLoading(false);
            throw err;
        }
    };

    const showMoreInfo = async (characterList) => {
        const fetchedCharacterInfo = await characterList.forEach(resident => {
            fetchCharacterInfo(resident)
        });
        console.log(fetchedCharacterInfo);
        setisMoreInfoShown(true);
    };

    const closeModal = () => {
        setisMoreInfoShown(false);
    };

    return (
        <div className="location-card">
            {isMoreInfoShown &&
                (isModalLoading ? (
                    <div className="loader-container">
                        <CircularProgress color="secondary" size="5em" />
                    </div>
                ) : (
                    <LocationInfoModal
                        location={location}
                        locationOfChar={characterData}
                        onClose={closeModal}
                        modalIsOpenedFromParent={isMoreInfoShown}
                        onClick={() => showMoreInfo(location.residents)}
                    />
                ))}
            <h3>{location.name}</h3>
            <h4>{location.type}</h4>
        </div>
    );
};
