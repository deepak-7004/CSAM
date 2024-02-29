import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';

const PaginationRounded: React.FC = () => (
  <Stack spacing={2}>
    <Pagination count={5} shape="rounded" color="primary" />
  </Stack>
);

export default PaginationRounded;
