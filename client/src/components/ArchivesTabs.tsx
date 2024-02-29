import { Button, Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
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
        <Box sx={{ py: 3 }}>
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
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          px: 2,
          display: 'flex',
          justifyContent: { sm: 'center', xs: 'flex-start' },
        }}
      >
        <Tabs className="archive_tabs" value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Videos" {...a11yProps(0)} />
          <Tab label="Banter Qwerty vs In_Vader" {...a11yProps(1)} />
          <Tab label="Monthly Posters" {...a11yProps(2)} />
          <Tab label="Awareness Months" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography className="common_title mt-5" variant="commonTitle" component="h4">
          Videos
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
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box className="tools_cards">
          <Container sx={{ mt: 5 }}>
            <Typography className="common_title width-40" variant="commonTitle" component="h4">
              Banter Qwerty vs In_Vader
            </Typography>
            <Stack
              className="news_cards"
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ mb: 3, pt: 4, justifyContent: 'center' }}
            >
              <Box className="flex-item">
                <Box className="card_news">
                  <Box className="card_item">
                    <img src="./images_public/vedar_qwert.png" alt="Security of Mobile Devices" />
                    <Box className="news_contnt mt-2 text-center">
                      <Typography className="text-center" component="h4">
                        Security of Mobile Devices (January)
                      </Typography>
                      <Button className="archive_download">Download</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="flex-item">
                <Box className="card_news">
                  <Box className="card_item">
                    <img src="./images_public/vedar_qwert.png" alt="Secure Online Browsing" />
                    <Box className="news_contnt mt-2 text-center">
                      <Typography className="text-center" component="h4">
                        Secure Online Browsing (February)
                      </Typography>
                      <Button className="archive_download">Download</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="flex-item">
                <Box className="card_news">
                  <Box className="card_item">
                    <img src="./images_public/vedar_qwert.png" alt="Application Security" />
                    <Box className="news_contnt mt-2 text-center">
                      <Typography className="text-center" component="h4">
                        Application Security (March)
                      </Typography>
                      <Button className="archive_download">Download</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Box className="tools_cards">
          <Container sx={{ mt: 5 }}>
            <Typography className="common_title width-40" variant="commonTitle" component="h4">
              poster of the month
            </Typography>

            <Stack
              className="news_cards"
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ mb: 3, pt: 4, justifyContent: 'center' }}
            >
              <Box className="flex-item">
                <Box className="card_news cardArchives">
                  <Box className="card_item">
                    <img src="./images_public/archive_card1.png" alt="GISP Introduction" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
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
                <Box className="card_news cardArchives">
                  <Box className="card_item">
                    <img src="./images_public/archive_card2.png" alt="Appendix" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>
                    <Box className="news_contnt mt-2">
                      <Typography className="py-3" component="h4">
                        Appendix
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Box className="tools_cards">
          <Container sx={{ mt: 5 }}>
            <Typography className="common_title width-40" variant="commonTitle" component="h4">
              Awareness Month archives
            </Typography>
            <Stack
              className="news_cards"
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ mb: 3, pt: 4, justifyContent: 'center' }}
            >
              <Box className="flex-item">
                <Box className="card_news cardArchives">
                  <Box className="card_item">
                    <img src="./images_public/archive_card1.png" alt="GISP Introduction" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
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
                <Box className="card_news cardArchives">
                  <Box className="card_item">
                    <img src="./images_public/archive_card2.png" alt="Appendix" />
                    <Box className="arrow_external">
                      <img src="./images_public/arrowh.png" alt="Arrow" />
                    </Box>
                    <Box className="news_contnt mt-2">
                      <Typography className="py-3" component="h4">
                        Appendix
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
