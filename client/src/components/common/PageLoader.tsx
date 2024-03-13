import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const PageLoader: React.FC = () => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
);

export default PageLoader;
