import React, { useState, useEffect } from 'react'
import { useLocations } from "../api/useData";
import { LocationsPagination } from './LocationsPagination'
import { Location } from './Location'
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CircularProgress from "@mui/material/CircularProgress";
import { CSSTransition } from "react-transition-group";

import "../App.css";
import "./Locations.css";

const bactToTopStyles = {
    position: "fixed",
    bottom: "2%",
    right: "2%",
    fontSize: "5em",
    cursor: "pointer",
};

const Locations = () => {
    const [LocationList, setLocationList] = useState([]);
    const [page, setPage] = useState(1);
    const locations = useLocations(page);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        if (locations !== "Loading...") {
            setLocationList(locations.results);
            setLoading(false);
        }
        if (locations.info) {
            setPageCount(locations.info.pages)
        }
    }, [locations]);

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
            <LocationsPagination
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
                <div className="location-container">
                    {LocationList.map((location) => (
                        <Location location={location} key={location.id} />
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
    )
}

export default Locations