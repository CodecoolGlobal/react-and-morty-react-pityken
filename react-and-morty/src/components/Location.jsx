import React, { useState } from "react";
// import LocationInfoModal from "./LocationInfoModal";
import CircularProgress from "@mui/material/CircularProgress";
// import "./Locationss.css";

export const Location = ({ location }) => {
    const [isMoreInfoShown, setisMoreInfoShown] = useState(false);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [charLocationData, setCharLocationData] = useState([]);

    const fetchLocationInfo = async (url) => {
        setIsModalLoading(true);
        try {
            const response = await fetch(url);
            const fetchedLocationInfo = await response.json();

            if (!response.ok) {
                throw new Error(fetchedLocationInfo.message);
            }
            setCharLocationData(fetchedLocationInfo);
            setIsModalLoading(false);
            return fetchedLocationInfo;
        } catch (err) {
            console.log(err);
            setIsModalLoading(false);
            throw err;
        }
    };

    const showMoreInfo = async (locationUrl) => {
        const fetchedLocationInfo = await fetchLocationInfo(locationUrl);
        console.log(fetchedLocationInfo);
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
                    // <LocationInfoModal
                    //     location={location}
                    //     locationOfChar={charLocationData}
                    //     onClose={closeModal}
                    //     modalIsOpenedFromParent={isMoreInfoShown}
                    // />
                    null
                ))}
            <h3>{location.name}</h3>
            <h4>{location.type}</h4>
        </div>
    );
};
