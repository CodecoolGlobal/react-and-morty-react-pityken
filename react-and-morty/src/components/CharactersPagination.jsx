import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../App.css";

const CharactersPagination = ({ val, page, onChange, pageCount }) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1.3 em",
  };

  const pageNumStyles = {
    fontSize: "1.2em",
    fontWeight: "700",
    marginTop: "10px"
  };

  const listStyles = {
    margin: "5px !important",
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
