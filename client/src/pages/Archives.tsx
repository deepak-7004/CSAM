import { Box, Container, Typography } from '@mui/material';
import Archivestabs from 'csam/components/ArchivesTabs';
import Footer from 'csam/components/Footer';
import Headerdark from 'csam/components/HeaderDark';
import * as React from 'react';

const Archives: React.FC = () => (
  <Box className="bg-black">
    <Headerdark />
    <Box className="pagebannerarchives">
      <Container>
        <Box className="banner_title">
          <Typography component="h4">CSAM</Typography>
          <Typography component="h2">
            <span className="lineLeft" />
            ARCHIVES
            <span className="lineRight" />
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </Typography>
        </Box>
      </Container>
    </Box>

    <Container sx={{ pt: 5, px: 0 }}>
      <Archivestabs />
    </Container>

    <Footer />
  </Box>
);
export default Archives;
