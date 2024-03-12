import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Drawer, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Bell from 'csam/images/Bell.png';
import Leaderboard from 'csam/images/leaderboard.png';
import Logo from 'csam/images/logo_img.png';
import Userimg from 'csam/images/user-icon.png';
import 'csam/App.css';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const pages = ['Home', 'Theme of the Month', 'Games & Contests', 'Good Reads', 'Tools & Resources', 'Archives'];

const pages = [
  { name: 'Home', route: '/' },
  { name: 'Theme of the Month', route: '/Monthbanner' },
  { name: 'Games & Contests', route: '/Gamecontests' },
  { name: 'Good Reads', route: '/Goodreads' },
  { name: 'Gisp & Resources', route: '/Toolsresources' },
  { name: 'Archives', route: '/Archives' },
];

const Headerdark: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);

  const notificationMenuOpen = Boolean(notificationAnchorEl);
  const handleNotificationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
    <AppBar className="headerTop">
      <Toolbar>
        <Link to="/">
          <img className="logo_width" src={Logo} alt="" />
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
          <Button onClick={toggleDrawer(true)} sx={{ justifyContent: 'end' }}>
            <MenuIcon />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: '220px', height: '100%', backgroundColor: '#000000' }}>
              {pages.map((page) => (
                <Link to={page.route} className="header_link" key={page.name}>
                  <MenuItem>
                    <Typography sx={{ color: '#fff' }} textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Box>
          </Drawer>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          {pages.map((page) => (
            <NavLink to={page.route} className="header_link" key={page.name}>
              <MenuItem>
                <Typography sx={{ color: '#fff' }} textAlign="center">
                  {page.name}
                </Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <div className="d-flex hide-sm align-items-center">
            <div className="flex-item">
              <Button className="language_change">ENG</Button>
            </div>

            <div className="flex-item">
              <Button
                id="notification-button"
                aria-controls={notificationMenuOpen ? 'notification-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={notificationMenuOpen ? 'true' : undefined}
                onClick={handleNotificationClick}
              >
                <img src={Bell} alt="" />
              </Button>
              <Menu
                id="notification-menu"
                anchorEl={notificationAnchorEl}
                open={notificationMenuOpen}
                onClose={handleNotificationClose}
                disableScrollLock
                MenuListProps={{
                  'aria-labelledby': 'notification-button',
                }}
              >
                <MenuItem sx={{ color: '#fff', background: '#00000047' }} onClick={handleNotificationClose}>
                  Notification 1
                </MenuItem>
                <MenuItem sx={{ color: '#fff', background: '#00000047' }} onClick={handleNotificationClose}>
                  Notification 2
                </MenuItem>
              </Menu>
            </div>

            <div className="flex-item">
              <NavLink className="nav-link" to="/Leaderboard">
                <img src={Leaderboard} alt="" />
              </NavLink>
            </div>

            <div className="flex-item">
              <Button
                id="basic-button"
                aria-controls={menuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleClick}
              >
                <img className="user_img" src={Userimg} alt="" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                disableScrollLock
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem sx={{ color: '#fff', background: '#00000047' }} onClick={handleClose}>
                  Profile
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Headerdark;
