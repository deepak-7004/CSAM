import { Box, Container, Typography } from '@mui/material';
import Footer from 'csam/components/Footer';
import Gamecontestabs from 'csam/components/GameContestabs';
import Headerdark from 'csam/components/HeaderDark';
import gameContestsData from 'csam/pages/jsonContent/gamesContest.json';
import * as React from 'react';

const Gamecontests: React.FC = () => (
  <Box className="bg-black">
    <Headerdark />
    <Box className="gamebanner">
      <Container>
        <Box className="banner_title">
          <Typography component="h4">{gameContestsData.bannerTitle}</Typography>
          <Typography component="h2">{gameContestsData.bannerSubtitle}</Typography>
          <Typography variant="body1">{gameContestsData.bannerDescription}</Typography>
        </Box>
      </Container>
    </Box>

    <section className="pt-5 pb-5">
      <Container>
        <Gamecontestabs />
      </Container>
    </section>

    <Footer />
  </Box>
);
export default Gamecontests;
