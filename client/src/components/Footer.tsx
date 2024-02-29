import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Footer: React.FC = () => (
  <footer className="p-top-80 bg-black">
    <Box className="footer_strip" sx={{ pb: 3 }}>
      <Typography className="develop_name" sx={{ fontWeight: 500 }} component="h4">
        DESIGNED BY:
      </Typography>
      <img className="img-responsive footer_logo" src="./images_public/logo_footer.png" alt="CSAM" />
    </Box>
    <Box className="footer_dsign">
      <img className="img-responsive" src="./images_public/footerstrip.png" alt="Footer ship" />
    </Box>
  </footer>
);
export default Footer;
