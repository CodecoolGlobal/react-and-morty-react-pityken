import React, { useState } from "react";
import { LocationInfoModal } from "./LocationInfoModal";
import CircularProgress from "@mui/material/CircularProgress";
import "./Locations.css";

export const Location = ({ location }) => {
    const [isMoreInfoShown, setisMoreInfoShown] = useState(false);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [residentData, setResidentData] = useState([]);

    const fetchCharacterInfo = async (url) => {
        setIsModalLoading(true);
        try {
            const response = await fetch(url);
            const fetchedCharacterInfo = await response.json();
            if (!response.ok) {
                throw new Error(fetchedCharacterInfo.message);
            }

            setIsModalLoading(false);
            return fetchedCharacterInfo;
        } catch (err) {
            console.log(err);
            setIsModalLoading(false);
            throw err;
        }
    };

    const showMoreInfo = async (characterUrl) => {
        const fetchedCharacterInfo = await characterUrl.map(url => fetchCharacterInfo(url))
        const residentsInfo = Promise.all(fetchedCharacterInfo)
        setResidentData(await residentsInfo)
        setisMoreInfoShown(true);
    };

    const closeModal = () => {
        setisMoreInfoShown(false);
    };

    return (
        <div className="location-card" >
            {isMoreInfoShown &&
                (isModalLoading ? (
                    <div className="loader-container">
                        <CircularProgress color="secondary" size="5em" />
                    </div>
                ) : (
                    <LocationInfoModal

                        location={location}
                        residents={residentData}
                        onClose={closeModal}
                        modalIsOpenedFromParent={isMoreInfoShown}

                    />
                ))}
            <h3 onClick={() => showMoreInfo(location.residents)}>{location.name}</h3>
            <br></br>
        </div>
    );
};
