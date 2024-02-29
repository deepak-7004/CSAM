import { Box, Container, Stack, Typography } from '@mui/material';
import PaginationRounded from 'csam/components/PaginationRounded';
import * as React from 'react';

const Suggestvideo: React.FC = () => (
  <Box>
    <Container sx={{ mt: 5 }}>
      <Typography className="common_title mt-5" variant="commonTitle" component="h4">
        Suggested Videos
      </Typography>

      <Stack
        className="news_cards"
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ mb: 3, pt: 4, justifyContent: 'center' }}
      >
        <Box className="flex-item">
          <Box className="card_news">
            <Box className="card_item">
              <img src="./images_public/a1.png" alt="" />
              <Box className="news_contnt mt-2">
                <Typography component="h4">How to choose the right laptop</Typography>
                <Typography variant="body1">
                  Choosing the right laptop for programming can be a tough process. It’s easy to get
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="flex-item">
          <Box className="card_news">
            <Box className="card_item">
              <img src="./images_public/a2.png" alt="" />
              <Box className="news_contnt mt-2">
                <Typography component="h4">How to choose the right laptop</Typography>
                <Typography variant="body1">
                  Choosing the right laptop for programming can be a tough process. It’s easy to get
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="flex-item">
          <Box className="card_news">
            <Box className="card_item">
              <img src="./images_public/a3.png" alt="" />
              <Box className="news_contnt mt-2">
                <Typography component="h4">How to choose the right laptop </Typography>
                <Typography variant="body1">
                  Choosing the right laptop for programming can be a tough process. It’s easy to get
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="flex-item">
          <Box className="card_news">
            <Box className="card_item">
              <img src="./images_public/a4.png" alt="" />
              <Box className="news_contnt mt-2">
                <Typography component="h4">How to choose the right laptop </Typography>
                <Typography variant="body1">
                  Choosing the right laptop for programming can be a tough process. It’s easy to get
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>

      <PaginationRounded />
    </Container>
  </Box>
);
export default Suggestvideo;
