import Typography from '@mui/material/Typography';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CharactersPagination = ({ val, page, onChange, pageCount }) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "15px",
  };

  const listStyles = {
    borderRadius: "10px",
    background: "#faf5b5"
  };

  return (
    <Stack spacing={2} sx={containerStyles}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onChange}
        value={val}
        sx={listStyles}
      />
    </Stack>
  );
};

export default CharactersPagination;
