import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CharacterToggler = ({onChange}) => {
  const [alignment, setAlignment] = useState("paginated");


  const togglerStyles ={
    margin: "0 auto",
    background: "#fff",
  }


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    onChange(newAlignment)
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={togglerStyles}
    >
      <ToggleButton value="paginated">Paginated</ToggleButton>
      <ToggleButton value="scrollable">Scrollable</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CharacterToggler;
