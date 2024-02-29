import { Box, Container, Typography } from '@mui/material';
import Footer from 'csam/components/Footer';
import Headerdark from 'csam/components/HeaderDark';
import Leaderbordtabs from 'csam/components/LeaderbordTabs';
import * as React from 'react';

const Leaderboard: React.FC = () => (
  <Box className="bg-black">
    <Headerdark />

    <Box className="pagebannerleaderbord">
      <Container>
        <Box className="banner_title">
          <Typography component="h2">LEADERBOARD</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </Typography>
        </Box>
      </Container>
    </Box>

    <Box className="pt-5 leader_table">
      <Container>
        <Typography className="common_title width_30 pt-3 pb-4" variant="commonTitle" component="h4">
          Leaderboard 2024
        </Typography>
        <Box className="leader_wrap">
          {/* <Box className="d-flex justify_end">
            <Box className="flex-item">
              <button type="button" className="btn btn-guide">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <mask id="mask0_392_1441" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_392_1441)">
                    <path
                      d="M9 15C9.9375 15 10.7344 14.6719 11.3906 14.0156C12.0469 13.3594 12.375 12.5625 12.375 11.625C12.375 10.6875 12.0469 9.89062 11.3906 9.23438C10.7344 8.57812 9.9375 8.25 9 8.25C8.0625 8.25 7.26562 8.57812 6.60938 9.23438C5.95312 9.89062 5.625 10.6875 5.625 11.625C5.625 12.5625 5.95312 13.3594 6.60938 14.0156C7.26562 14.6719 8.0625 15 9 15ZM6.80625 7.275C7.05625 7.1375 7.32187 7.02813 7.60312 6.94688C7.88437 6.86563 8.16875 6.8125 8.45625 6.7875L6.5625 3H4.6875L6.80625 7.275ZM11.1938 7.275L13.3313 3H11.4375L9.84375 6.1875L10.2 6.9C10.375 6.95 10.5438 7.00312 10.7063 7.05937C10.8688 7.11562 11.0312 7.1875 11.1938 7.275ZM4.8 14.1C4.5875 13.7375 4.42188 13.3469 4.30312 12.9281C4.18438 12.5094 4.125 12.075 4.125 11.625C4.125 11.175 4.18438 10.7406 4.30312 10.3219C4.42188 9.90312 4.5875 9.5125 4.8 9.15C4.275 9.325 3.84375 9.63437 3.50625 10.0781C3.16875 10.5219 3 11.0375 3 11.625C3 12.2125 3.16875 12.7281 3.50625 13.1719C3.84375 13.6156 4.275 13.925 4.8 14.1ZM13.2 14.1C13.725 13.925 14.1563 13.6156 14.4938 13.1719C14.8313 12.7281 15 12.2125 15 11.625C15 11.0375 14.8313 10.5219 14.4938 10.0781C14.1563 9.63437 13.725 9.325 13.2 9.15C13.4125 9.5125 13.5781 9.90312 13.6969 10.3219C13.8156 10.7406 13.875 11.175 13.875 11.625C13.875 12.075 13.8156 12.5094 13.6969 12.9281C13.5781 13.3469 13.4125 13.7375 13.2 14.1ZM9 16.5C8.5 16.5 8.02188 16.4281 7.56563 16.2844C7.10938 16.1406 6.6875 15.9438 6.3 15.6938C6.1875 15.7188 6.075 15.7344 5.9625 15.7406C5.85 15.7469 5.73125 15.75 5.60625 15.75C4.46875 15.75 3.5 15.35 2.7 14.55C1.9 13.75 1.5 12.7813 1.5 11.6438C1.5 10.5563 1.8625 9.625 2.5875 8.85C3.3125 8.075 4.20625 7.64375 5.26875 7.55625L2.25 1.5H7.5L9 4.5L10.5 1.5H15.75L12.75 7.51875C13.8125 7.61875 14.7031 8.05625 15.4219 8.83125C16.1406 9.60625 16.5 10.5375 16.5 11.625C16.5 12.775 16.1 13.75 15.3 14.55C14.5 15.35 13.525 15.75 12.375 15.75C12.2625 15.75 12.1469 15.7469 12.0281 15.7406C11.9094 15.7344 11.7937 15.7188 11.6812 15.6938C11.2937 15.9438 10.875 16.1406 10.425 16.2844C9.975 16.4281 9.5 16.5 9 16.5ZM7.6125 13.6875L8.1375 11.9813L6.75 10.9875H8.45625L9 9.1875L9.54375 10.9875H11.25L9.8625 11.9813L10.3875 13.6875L9 12.6375L7.6125 13.6875Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                </svg>{' '}
                Guidelines for Leaderboard
              </button>
            </Box>
          </Box> */}

          <Leaderbordtabs />
        </Box>
      </Container>
    </Box>

    <Footer />
  </Box>
);
export default Leaderboard;
