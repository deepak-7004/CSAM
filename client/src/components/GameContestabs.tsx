import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Gallerygame from 'csam/components/GalleryGame';
import * as React from 'react';

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const BasicTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: { sm: 'center', xs: 'flex-start' },
        }}
      >
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          className="archive_tabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Contests" {...a11yProps(0)} />
          <Tab label="Games" {...a11yProps(1)} />
          <Tab label="Webinar" {...a11yProps(2)} />
          <Tab label="Gallery" {...a11yProps(3)} />
          <Tab label="Pledge" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Typography className="common_title my-4" variant="commonTitle" component="h4">
          Contests
        </Typography>
        <Stack className="news_cards mb-3 pt-4" direction={{ xs: 'column', md: 'row' }} sx={{ mb: 3, pt: 4 }}>
          <Box className="flex-item">
            <Box className="card_news">
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

          <Box className="flex-item">
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Typography className="common_title my-4" variant="commonTitle" component="h4">
          Play and win points
        </Typography>
        <Stack className="news_cards mb-3 pt-4" direction={{ xs: 'column', md: 'row' }} sx={{ mb: 3, pt: 4 }}>
          <Box className="flex-item">
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Typography className="common_title my-4" variant="commonTitle" component="h4">
          Webinar
        </Typography>
        <Stack className="news_cards mb-3 pt-4" direction={{ xs: 'column', md: 'row' }} sx={{ mb: 3, pt: 4 }}>
          <Box className="flex-item">
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Gallerygame />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <Typography className="common_title my-4" variant="commonTitle" component="h4">
          Pledge
        </Typography>
        <Stack className="news_cards mb-3 pt-4" direction={{ xs: 'column', md: 'row' }} sx={{ mb: 3, pt: 4 }}>
          <Box className="flex-item">
            <Box className="card_news">
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

          <Box className="flex-item">
            <Box className="card_news">
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
            <Box className="card_news">
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
            <Box className="card_news">
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
        </Stack>
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
