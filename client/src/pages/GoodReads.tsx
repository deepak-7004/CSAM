import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import Footer from 'csam/components/Footer';
import Headerdark from 'csam/components/HeaderDark';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PaginationRounded from 'csam/components/PaginationRounded';
import Suggestvideo from 'csam/components/SuggestVideo';
import goodreadsData from 'csam/pages/jsonContent/goodGreeds.json';
import * as React from 'react';
import Slider from 'react-slick';

const Goodreads: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1199px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  let slidesToShow = 4;

  if (isLargeScreen) {
    slidesToShow = 4;
  } else if (isMediumScreen) {
    slidesToShow = 3;
  } else if (isSmallScreen) {
    slidesToShow = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <Box className="bg-black">
      <Headerdark />

      <Box className="pagebannerreads">
        <Box className="container">
          <Box className="banner_title">
            <Typography component="h4">{goodreadsData.bannerTitle}</Typography>
            <Typography component="h2">{goodreadsData.bannerSubtitle}</Typography>
            <Typography variant="body1">{goodreadsData.bannerDescription}</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="pt-5 pb-5">
        <Container>
          <Box className="searchReads">
            <input
              className="form-control max-50w"
              type="text"
              placeholder="Search by category"
              aria-label="readonly input example"
            />
            <Button className="searchOptions btnSearch">
              <img src="./images_public/Search.png" alt="" />
            </Button>

            <Button className="searchOptions ">
              <img src="./images_public/sliders.png" alt="" />
            </Button>
          </Box>

          <Typography className="common_title mt-5" variant="commonTitle" component="h4">
            {goodreadsData.latestNewsletterTitle}
          </Typography>

          <Box className="news_cards pt-5">
            <Slider {...settings}>
              <Box className="flex-item">
                <Box className="card_news scaleHover">
                  <Box className="card_item">
                    <img src="./images_public/news_card1.png" alt="Card" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>

                    <Box className="tag">
                      <Typography component="h6" sx={{ fontWeight: 500 }}>
                        Cloud Security
                      </Typography>
                    </Box>
                    <Box className="d-flex mt-2 news_tag">
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          CSAM Team
                        </Typography>
                      </Box>
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          09 Oct, 2023
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1">Sugee: Loan Management System for Rural Sector.</Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex-item">
                <Box className="card_news scaleHover">
                  <Box className="card_item">
                    <img src="./images_public/news_card2.png" alt="Card" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>
                    <Box className="tag">
                      <Typography component="h6" sx={{ fontWeight: 500 }}>
                        Cloud Security
                      </Typography>
                    </Box>
                    <Box className="d-flex mt-2 news_tag">
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          CSAM Team
                        </Typography>
                      </Box>
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          09 Oct, 2023
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1">Sugee: Loan Management System for Rural Sector.</Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex-item">
                <Box className="card_news scaleHover">
                  <Box className="card_item">
                    <img src="./images_public/news_card3.png" alt="Card" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>

                    <Box className="tag">
                      <Typography component="h6" sx={{ fontWeight: 500 }}>
                        Cloud Security
                      </Typography>
                    </Box>
                    <Box className="d-flex mt-2 news_tag">
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          CSAM Team
                        </Typography>
                      </Box>
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          09 Oct, 2023
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1">Sugee: Loan Management System for Rural Sector.</Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex-item">
                <Box className="card_news scaleHover">
                  <Box className="card_item">
                    <img src="./images_public/news_card4.png" alt="Card" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>
                    <Box className="tag">
                      <Typography component="h6" sx={{ fontWeight: 500 }}>
                        Cloud Security
                      </Typography>
                    </Box>
                    <Box className="d-flex mt-2 news_tag">
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          CSAM Team
                        </Typography>
                      </Box>
                      <Box className="flex-item">
                        <Typography className="news_tags" component="h5">
                          <span />
                          09 Oct, 2023
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1">Sugee: Loan Management System for Rural Sector.</Typography>
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Container>
      </Box>

      <Box className="">
        <Container>
          <Typography className="common_title mt-5" variant="commonTitle" component="h4">
            Suggested Articles
          </Typography>
          <Box className="row mb-3">
            <Box className="max-80">
              <Box className="article_card mt-3">
                <Stack className="articla_carditem" spacing={{ xs: 1, sm: 3 }} direction={{ xs: 'column', sm: 'row' }}>
                  <Box className="img_article">
                    <img src="./images_public/article1.png" alt="Article" />
                  </Box>
                  <Box className="contnt_article">
                    <Typography component="h4">Sugee: Loan Management System for Rural Sector.</Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                      urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit
                      amet, consectetur adipiscing...
                    </Typography>
                    <a href="/#">Read More</a>
                  </Box>
                </Stack>
              </Box>

              <Box className="article_card mt-3">
                <Stack className="articla_carditem" spacing={{ xs: 1, sm: 3 }} direction={{ xs: 'column', sm: 'row' }}>
                  <Box className="img_article">
                    <img src="./images_public/article2.png" alt="Article" />
                  </Box>
                  <Box className="contnt_article">
                    <Typography component="h4">Sugee: Loan Management System for Rural Sector.</Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                      urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit
                      amet, consectetur adipiscing...
                    </Typography>
                    <a href="/#">Read More</a>
                  </Box>
                </Stack>
              </Box>

              <Box className="article_card mt-3">
                <Stack className="articla_carditem" spacing={{ xs: 1, sm: 3 }} direction={{ xs: 'column', sm: 'row' }}>
                  <Box className="img_article">
                    <img src="./images_public/article3.png" alt="Article" />
                  </Box>
                  <Box className="contnt_article">
                    <Typography component="h4">Sugee: Loan Management System for Rural Sector.</Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                      urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit
                      amet, consectetur adipiscing...
                    </Typography>
                    <a href="/#">Read More</a>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
          <PaginationRounded />
        </Container>
      </Box>

      <Suggestvideo />
      <Footer />
    </Box>
  );
};
export default Goodreads;
