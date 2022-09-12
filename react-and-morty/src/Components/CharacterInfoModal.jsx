import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1em",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #191c3c",
  boxShadow: 24,
  p: 4,
  bgcolor: "#06aec3",
  color: "#191c3c",
};

const CharacterInfoModal = ({
  character,
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
        <Box sx={style} className="character-modal">
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
            </tbody>
          </table>
          {/* <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Origin: {character.origin.name}</p> */}
        </Box>
      </Modal>
    </div>
  );
};

export default CharacterInfoModal;
