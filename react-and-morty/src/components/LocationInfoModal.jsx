import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const modalStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    maxHeight: "90%",
    border: "5px solid #9ccc3c",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
    pt: 5,
    bgcolor: "#b88fb7",
    color: "#191c3c",
};

const closeBtnStyles = {
    position: "absolute",
    top: "1%",
    right: "2%",
    width: 40,
    height: 40,
    bgcolor: "#b88fb7",
    color: "#191c3c",
    cursor: "pointer"
};

export const LocationInfoModal = ({
    location,
    residents,
    onClose,
    modalIsOpenedFromParent,
}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(modalIsOpenedFromParent);
    }, [modalIsOpenedFromParent]);

    const handleClose = () => {
        setOpen(false);
        onClose();
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyles} className="location-modal" >
                    <HighlightOffIcon sx={closeBtnStyles} onClick={handleClose} />
                    <h3>{location.name}</h3>
                    <div className="location-details">

                        <table className="character-modal-table">
                            <tbody>
                                <tr>
                                    <th>Dimension</th>
                                    <td>{location.dimension}</td>
                                </tr>
                                {location.type !== "" && (
                                    <tr>
                                        <th>Type</th>
                                        <td>{location.type}</td>
                                    </tr>
                                )}
                                {location.residents.length === 1 && (
                                    <tr>
                                        <th>Residents</th>
                                        {residents.map(resident => (
                                            <td key={resident.id}>{resident.name}</td>
                                        ))}
                                    </tr>)}

                                {location.residents.length > 1 && (
                                    <>
                                        <th>Residents</th>
                                        {residents.map(resident => (<tr key={resident.id}>
                                            <th></th>
                                            <td>{resident.name}</td>
                                        </tr>
                                        ))}
                                    </>
                                )}

                            </tbody>
                        </table>
                    </div>
                </Box>
            </Modal>
        </div >
    );
};

