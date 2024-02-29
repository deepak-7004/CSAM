import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import Footer from 'csam/components/Footer';
import Headerdark from 'csam/components/HeaderDark';
import Monthtabs from 'csam/components/MonthTabs';
import Themebanner from 'csam/images/theme_banner.png';
import themeMonth from 'csam/pages/jsonContent/themeOfMonth.json';
import * as React from 'react';

const Monthbanner: React.FC = () => (
  <Box className="bg-black">
    <Headerdark />

    <Box>
      <Container>
        <img className="img-responsive" src={Themebanner} alt="" />
      </Container>

      <Container sx={{ pt: 5 }}>
        <Box className="section_title">
          <Typography component="h4"> {themeMonth.slides.title} </Typography>
          <Typography component="h2"> {themeMonth.slides.subtitle} </Typography>
        </Box>
      </Container>

      <Container sx={{ mt: 5 }}>
        <Monthtabs />
      </Container>
    </Box>

    <Box className="mt-5 bg_qwert">
      <Container>
        <Typography className="common_title mt-4 mb-5" variant="commonTitle" component="h4">
          {themeMonth.qwerty.title}
        </Typography>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {themeMonth.qwerty.content.map((item) => (
            <Grid key={item.id} item md={6}>
              <Paper>
                <h5 className="qwert_title">
                  <span>|</span> {item.title}
                </h5>
                <Stack spacing={{ xs: 1, sm: 2, pt: 5 }} direction={{ xs: 'column', sm: 'row' }}>
                  <Box className="flex-item">
                    <img src={item.image} alt="" />
                  </Box>
                  <Box className="flex-item white_content">
                    <Typography component="h6" sx={{ mb: 3 }}>
                      {item.subTitle}
                    </Typography>
                    <Typography variant="body1" mb={2}>
                      {item.text}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    <Footer />
  </Box>
);
export default Monthbanner;
