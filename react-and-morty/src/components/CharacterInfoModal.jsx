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
  minWidth: "fit-content",
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
  color: "#191c3c",
  cursor: "pointer"
};

const CharacterInfoModal = ({
  character,
  locationOfChar,
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
        <Box sx={modalStyles} className="character-modal">
          <HighlightOffIcon sx={closeBtnStyles} onClick={handleClose}/>
          <img
            className="character-img"
            src={character.image}
            alt={character.name}
          />
          <h3>{character.name}</h3>
          <h4>{character.species}</h4>
          <table className="character-modal-table">
            <tbody>
              <tr>
                <th>Gender</th>
                <td>{character.gender}</td>
              </tr>
              {character.type !== "" && (
                <tr>
                  <th>Type</th>
                  <td>{character.type}</td>
                </tr>
              )}
              <tr>
                <th>Status</th>
                <td>{character.status}</td>
              </tr>
              <tr>
                <th>Origin</th>
                <td>{character.origin.name}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{character.location.name}</td>
              </tr>
              <tr>
                <th>Type of location</th>
                <td>{locationOfChar.type}</td>
              </tr>
              {locationOfChar.dimension !== "unknown" && (
                <tr>
                  <th>Dimension of location</th>
                  <td>{locationOfChar.dimension}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Box>
      </Modal>
    </div>
  );
};

export default CharacterInfoModal;
