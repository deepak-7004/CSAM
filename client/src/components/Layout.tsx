import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <Box>
    <Outlet />
  </Box>
);

export default Layout;
