import React, { useState, useEffect } from 'react'
import { useLocations } from "../api/useData";
import { LocationsPagination } from './LocationsPagination'
import { Location } from './Location'
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";
import "./Locations.css";

const Locations = () => {
    const [LocationList, setLocationList] = useState([]);
    const [page, setPage] = useState(1);
    const locations = useLocations(page);
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

    const handlePageChange = (event, value) => {
        setPage(value);
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
        </>
    )
}

export default Locations