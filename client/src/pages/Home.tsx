import { Box, Card, Container, Grid, Paper, Typography } from '@mui/material';
// import fetchQuery from 'csam/api/api';
import Videobg from 'csam/assets/video/bg_video.mp4';
import Header from 'csam/components/header';
import Homeimg1 from 'csam/images/home_img1.png';
import Homeimg2 from 'csam/images/home_img2.png';
import Homeimg3 from 'csam/images/home_img3.png';
import Homeimg4 from 'csam/images/home_img4.png';
import toolsImg from 'csam/images/toolsResources.png';
import homeContent from 'csam/pages/jsonContent/Home.json';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => (
  // const [videoSrc, setVideoSrc] = useState<string>('');
  // const fetchData = async () => {
  //   try {
  //     const data = await fetchQuery('/file/bg_video.mov', { key: 'value' }, 'GET');
  //     console.log('data', data);
  //     setVideoSrc(data.videoSrc);
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  // useEffect(() => {
  //   console.log(
  //     'import.meta.env`, import.meta.env.REACT_APP_API_ADDRESS',
  //     import.meta.env,
  //     import.meta.env.VITE_API_URL,
  //   );
  //   // fetchData();
  // }, []);

  <>
    <Header />
    <ToastContainer />
    <Box className="bgimage">
      <video autoPlay loop muted className="bg_video">
        <source src={Videobg} type="video/mp4" />
      </video>
      <Box className="overlay_div" />
      <Box className="content_home">
        <Typography component="h2">
          Cyber <span>security</span> <br />
          awareness month
        </Typography>

        <Typography variant="body1" mb={2}>
          {homeContent.description}{' '}
        </Typography>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Paper>
                <Card className="cardfirst ">
                  <Box className="cards_img">
                    <img className="img-responsive" alt="home" src={Homeimg1} />
                    <Typography component="h2">{homeContent.categories.themeOfMonth.title}</Typography>
                  </Box>

                  <Box className="hovr_state">
                    <NavLink to={homeContent.categories.themeOfMonth.link}>
                      <Box className="bg_dark">
                        <img src="../images_public/wallpaper_1.svg" alt="" />
                        <Typography className="text_hoverstate" component="h2">
                          Theme of <br />
                          the month
                        </Typography>
                      </Box>
                    </NavLink>
                  </Box>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box className="cardsecond cardHome">
                    <Box className="cards_img">
                      <img className="img-responsive fit_height" alt="home" src={Homeimg2} />
                      <Typography component="h2">{homeContent.categories.gamesAndContests.title}</Typography>
                    </Box>
                    <Box className="hovr_state">
                      <NavLink to={homeContent.categories.gamesAndContests.link}>
                        <Box className="bg_dark">
                          <img src="../images_public/game.png" alt="" />
                          <Typography className="text_hoverstate" component="h2">
                            {homeContent.categories.gamesAndContests.title}
                          </Typography>
                        </Box>
                      </NavLink>
                    </Box>
                  </Box>
                  <Box className="cardsecond cardHome">
                    <Box className="hovr_state">
                      <NavLink to={homeContent.categories.gamesAndContests.link}>
                        <Box className="bg_dark">
                          <img src="../images_public/game.png" alt="" />
                          <h2 className="text_hoverstate">Games & Contest</h2>
                        </Box>
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="cardthird cardHome">
                    <Box className="cards_img">
                      <img className="img-responsive fit_height" alt="home" src={Homeimg3} />
                      <h2>{homeContent.categories.goodReads.title}</h2>
                    </Box>
                    <Box className="hovr_state">
                      <NavLink to={homeContent.categories.goodReads.link}>
                        <Box className="bg_dark">
                          <img className="border_none" src="../images_public/read.png" alt="" />
                          <h2 className="text_hoverstate">{homeContent.categories.goodReads.title}</h2>
                        </Box>
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="cardfourth cardHome">
                    <Box className="cards_img">
                      <img className="img-responsive fit_height" alt="home" src={Homeimg4} />
                      <h2>{homeContent.categories.leaderboard.title}</h2>
                    </Box>
                    <Box className="hovr_state">
                      <NavLink to={homeContent.categories.leaderboard.link}>
                        <Box className="bg_dark">
                          <img src="../images_public/leaderbord.png" alt="" />
                          <h2 className="text_hoverstate">{homeContent.categories.leaderboard.title}</h2>
                        </Box>
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="cardfourth cardHome">
                    <Box className="cards_img">
                      <img className="img-responsive fit_height" alt="home" src={toolsImg} />
                      <h2>{homeContent.categories.toolsAndResources.title}</h2>
                    </Box>
                    <Box className="hovr_state">
                      <NavLink to={homeContent.categories.toolsAndResources.link}>
                        <Box className="bg_dark">
                          <img src="../images_public/leaderbord.png" alt="" />
                          <h2 className="text_hoverstate">{homeContent.categories.toolsAndResources.title}</h2>
                        </Box>
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </>
);

export default Home;
