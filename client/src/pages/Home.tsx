import { Box, Card, Container, Grid, Paper, Typography } from '@mui/material';
import { useAuthenticatedQuery } from 'csam/api/api';
import Videobg from 'csam/assets/video/bg_video.mp4';
import Headerdark from 'csam/components/HeaderDark';
import { fixed, publicURL } from 'csam/utils/Constants';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CardStyle {
  className: string;
}

interface CardData {
  id: number;
  link: string;
  image: string;
  title: string;
  status: string;
  cardStyle: CardStyle;
  hoveredImage: string;
}

interface HomeContent {
  cards: CardData[];
  heading: string;
  description: string;
}

interface DataItem {
  id: number;
  name: string;
  background_type: boolean;
  status: boolean;
  year_id: number;
  background_video: string;
  background_image: string;
  homeContent: HomeContent;
}

interface HomePageData {
  success: boolean;
  data: DataItem[];
}

interface CardProps {
  card: CardData;
  extraClass: string;
}

const CardComponent: React.FC<CardProps> = ({ card, extraClass }) => (
  <>
    <Box className="cards_img">
      <img className={`img-responsive ${extraClass}`} alt="home" src={`${publicURL}images_public/${card.image}`} />
      <Typography component="h2">{card.title}</Typography>
    </Box>
    <Box className="hovr_state">
      <NavLink to={card.link}>
        <Box className="bg_dark">
          <img src={`${publicURL}images_public/${card.hoveredImage}`} alt="" />
          <Typography className="text_hoverstate" component="h2">
            {card.title}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  </>
);

const Home: React.FC = () => {
  const { isPending, error, data } = useAuthenticatedQuery<HomePageData>(['landingPage', 'landingPageData'], {
    url: `${fixed}crud/landing-pages`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data && !data.success) return <div>Internal Server Error</div>;

  const homeContent = JSON.parse(data.data[0]?.homeContent);

  return (
    <>
      <Headerdark />
      <ToastContainer />
      <Box className="bgimage">
        <video autoPlay loop muted className="bg_video">
          <source src={Videobg} type="video/mp4" />
        </video>
        <Box className="overlay_div" />
        <Box className="content_home">
          <Typography component="h2">
            Cyber <span>security</span> <br />
            awareness Portal
          </Typography>

          <Typography variant="body1" mb={2}>
            {homeContent.description}{' '}
          </Typography>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Paper>
                  <Card className="cardfirst ">
                    <CardComponent card={homeContent.cards[0]} extraClass="" />
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                  {homeContent.cards.slice(1).map((card: CardData) => (
                    <Grid item xs={6} key={`${card.id}-${card.title}`}>
                      <Box className={card.cardStyle.className}>
                        <CardComponent card={card} extraClass="fit_height" key={`${card.id}-${card.title}`} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
