import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../App.css";

const CharactersPagination = ({ val, page, onChange, pageCount }) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content",
    margin: "1.3em auto",
  };

  const pageNumStyles = {
    fontSize: "1.2em",
    fontWeight: "700",
    marginTop: "10px",
    color: "#9a69a8",
  };

  const listStyles = {
    margin: "5px !important",
    padding: "5px",
    borderRadius: "10px",
    background: "#faf5b5",
  };

  return (
    <Stack spacing={2} sx={containerStyles}>
      <Typography sx={pageNumStyles}>Page {page}</Typography>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onChange}
        value={val}
        siblingCount={1}
        boundaryCount={2}
        color="secondary"
        sx={listStyles}
      />
    </Stack>
  );
};

export default CharactersPagination;
