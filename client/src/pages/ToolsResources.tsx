import { Box, Container, Stack, Typography } from '@mui/material';
import Footer from 'csam/components/Footer';
import Headerdark from 'csam/components/HeaderDark';
import * as React from 'react';

const Toolsresources: React.FC = () => (
  <Box className="bg-black">
    <Headerdark />
    <Box className="pagebannertools">
      <Box className="container">
        <Box className="banner_title">
          <Typography component="h4">GISP & OTHER</Typography>
          <Typography component="h2">RESOURCES</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box className="tools_cards">
      <Container sx={{ mt: 5 }}>
        <Typography className="common_title width-50" variant="commonTitle" component="h4">
          Global Information Security Policy (GISP)
        </Typography>

        <Stack
          className="news_cards"
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ mb: 3, pt: 4, justifyContent: 'space-between' }}
        >
          <Box className="flex-item">
            <Box className="card_news cardTools">
              <Box className="card_item">
                <img src="./images_public/tools_card1.png" alt="" />
                <Box className="arrow_external">
                  <img src="./images_public/folder.png" alt="Arrow" />
                </Box>
                <Box className="news_contnt mt-2">
                  <Typography className="py-3" component="h4">
                    GISP Introduction
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="card_news cardTools">
              <Box className="card_item">
                <img src="./images_public/tools_card2.png" alt="" />
                <Box className="arrow_external">
                  <img src="./images_public/folder.png" alt="Arrow" />
                </Box>
                <Box className="news_contnt mt-2">
                  <Typography className="py-3" component="h4">
                    Appendix
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="card_news cardTools">
              <Box className="card_item">
                <img src="./images_public/tools_card3.png" alt="" />
                <Box className="arrow_external">
                  <img src="./images_public/folder.png" alt="Arrow" />
                </Box>
                <Box className="news_contnt mt-2">
                  <Typography className="py-3" component="h4">
                    Standards
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>

    <Container className="mt-5">
      <Typography className="common_title" variant="commonTitle" component="h4">
        Digital ethics (GISP)
      </Typography>
      <Box className="max-80 mb-3">
        <Box className="article_card">
          <Stack className="articla_carditem" spacing={{ xs: 1, sm: 3 }} direction={{ xs: 'column', sm: 'row' }}>
            <Box className="img_article">
              <img src="./images_public/tools_hcard.png" alt="" />
            </Box>
            <Box className="contnt_article">
              <Typography component="h4">Digital Ethics</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit amet,
                consectetur adipiscing...
              </Typography>
              <a href="/#">Read More</a>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>

    <Box className="quick_tools">
      <Container sx={{ mt: 5 }}>
        <Box>
          <Typography className="common_title mb-4" variant="commonTitle" component="h4">
            Quick Tools
          </Typography>

          <Stack className="news_cards mb-3 pt-4" direction={{ xs: 'column', sm: 'row' }} sx={{ mb: 3, pt: 4 }}>
            <Box className="flex-item">
              <Box className="card_news">
                <Box className="card_item">
                  <img src="./images_public/quick_card1.png" alt="" />
                  <Box className="arrow_external">
                    <img src="./images_public/arrowh.png" alt="Arrow" />
                  </Box>
                  <Box className="news_contnt mt-2">
                    <Typography className="py-3" component="h4">
                      Password Strength Check
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="flex-item">
              <Box className="card_news cardTools">
                <Box className="card_item">
                  <img src="./images_public/quick_card2.png" alt="" />
                  <Box className="arrow_external">
                    <img src="./images_public/arrowh.png" alt="Arrow" />
                  </Box>
                  <Box className="news_contnt mt-2">
                    <Typography className="py-3" component="h4">
                      Is Your Account Owned
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="flex-item">
              <Box className="card_news cardTools">
                <Box className="card_item">
                  <img src="./images_public/quick_card3.png" alt="" />
                  <Box className="arrow_external">
                    <img src="./images_public/arrowh.png" alt="Arrow" />
                  </Box>
                  <Box className="news_contnt mt-2">
                    <Typography className="py-3" component="h4">
                      Report a Phishing Email
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="flex-item">
              <Box className="card_news cardTools">
                <Box className="card_item">
                  <img src="./images_public/quick_card4.png" alt="" />
                  <Box className="arrow_external">
                    <img src="./images_public/arrowh.png" alt="Arrow" />
                  </Box>
                  <Box className="news_contnt mt-2">
                    <Typography className="py-3" component="h4">
                      Report Spam Emails
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>

    <Footer />
  </Box>
);
export default Toolsresources;
