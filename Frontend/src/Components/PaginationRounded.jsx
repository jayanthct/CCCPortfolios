import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ count, page, onPageChange }) {
  const primaryColor = '#494623'; // brown
  const secondaryColor = 'white'; // White
  const normalItemColor = '#161B2D'; // Grey for normal items and chevron buttons

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: normalItemColor, // Text color for normal items
            borderColor: primaryColor, // Border color
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: primaryColor, // Background color for selected page
            color: secondaryColor, // Text color for selected page
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: primaryColor, // Background color on hover
            color: secondaryColor, // Text color on hover
            opacity: 0.8, // Slightly reduce opacity on hover
          },
          "& .MuiPaginationItem-ellipsis": {
            color: normalItemColor, // Grey color for ellipsis
          },
          "& .MuiPaginationItem-root.MuiPaginationItem-previousNext": {
            color: normalItemColor, // Text color for chevron buttons
            "&:hover": {
              backgroundColor: 'transparent', // Clear or same as normal background on hover
              color: primaryColor, // Red color on hover for chevron buttons
            }
          }
        }}
      />
    </Stack>
  );
}
