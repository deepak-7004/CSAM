import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import { useState } from 'react';

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
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(!isActive);

  //   // 👇️ or set to true
  //   // setIsActive(true);
  // };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'Boxider' }}>
        <Tabs className="monthtabs" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="tabsmonth" label="January" {...a11yProps(0)} />
          <Tab label="February" {...a11yProps(1)} />
          <Tab label="March" {...a11yProps(2)} />
          <Tab label="April" {...a11yProps(3)} />
          <Tab label="May" {...a11yProps(4)} />
          <Tab label="June" {...a11yProps(5)} />
          <Tab label="July" {...a11yProps(6)} />
          <Tab label="August" {...a11yProps(7)} />
          <Tab label="September" {...a11yProps(8)} />
          <Tab label="October" {...a11yProps(9)} />
          <Tab label="November" {...a11yProps(10)} />
          <Tab label="December" {...a11yProps(11)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item front">
                <img src="./images_public/lamp.png" alt="" />
                <h4>Week 1</h4>
              </Box>

              <Box className="cards_item back">
                <Box className="lamp_back d-flex">
                  <Box className="flex-item">
                    <img src="./images_public/lamp.png" alt="" />
                  </Box>
                  <Box className="flex-item">
                    <h5>January</h5>
                    <h4>Week 1</h4>
                  </Box>
                </Box>
                <h4>Verify, verify, verify - </h4>
                <p>
                  If you receive an email concerning change of payment method or bank account, contact the payment
                  recipient through another channel (phone) to verify this claim. Don’t reply directly to the email.
                </p>
                <button type="button" className="btn_card">
                  Verify Email
                </button>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item front">
                <img src="./images_public/lamp.png" alt="" />
                <h4>Week 2</h4>
              </Box>
              <Box className="cards_item back">
                <Box className="lamp_back d-flex">
                  <Box className="flex-item">
                    <img src="./images_public/lamp.png" alt="" />
                  </Box>
                  <Box className="flex-item">
                    <h5>January</h5>
                    <h4>Week 2</h4>
                  </Box>
                </Box>
                <h4>Verify, verify, verify - </h4>
                <p>
                  If you receive an email concerning change of payment method or bank account, contact the payment
                  recipient through another channel (phone) to verify this claim. Don’t reply directly to the email.
                </p>
                <button type="button" className="btn_card">
                  Verify Email
                </button>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item front">
                <img src="./images_public/lamp.png" alt="" />
                <h4>Week 3</h4>
              </Box>
              <Box className="cards_item back">
                <Box className="lamp_back d-flex">
                  <Box className="flex-item">
                    <img src="./images_public/lamp.png" alt="" />
                  </Box>
                  <Box className="flex-item">
                    <h5>January</h5>
                    <h4>Week 3</h4>
                  </Box>
                </Box>
                <h4>Verify, verify, verify - </h4>
                <p>
                  If you receive an email concerning change of payment method or bank account, contact the payment
                  recipient through another channel (phone) to verify this claim. Don’t reply directly to the email.
                </p>
                <button type="button" className="btn_card">
                  Verify Email
                </button>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.png" alt="" />
                <h4>Week 4</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.png" alt="" />
                <h4>Week 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>

          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={11}>
        <Box className="d-flex month-cards pt-3">
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 1</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 2</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 3</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 4</h4>
              </Box>
            </Box>
          </Box>
          <Box className="flex-item">
            <Box className="month_card disable">
              <Box className="cards_item">
                <img src="./images_public/lamp.svg" alt="" />
                <h4>Month 5</h4>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
