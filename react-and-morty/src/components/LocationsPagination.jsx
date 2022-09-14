import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const LocationsPagination = ({ val, page, onChange, pageCount }) => {

  return (
    <Stack spacing={2}>
      <Typography>Page {page}</Typography>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onChange}
        value={val}
        siblingCount={1}
        boundaryCount={2}
        color="secondary"
      />
    </Stack>
  );
};

