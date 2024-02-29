// import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import Leaderboard from 'csam//images/leaderboard_img.svg';
import Logo from 'csam//images/logo_img.png';
import Userimg from 'csam//images/user_img.svg';
import Bell from 'csam/images/Bell.svg';
import 'csam/App.css';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const pages = ['Home', 'Theme of the Month', 'Games & Contests', 'Good Reads', 'Tools & Resources', 'Archives'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Headerdark: React.FC = () => (
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  <>
    {/* <AppBar className="headerTop">
        <Toolbar>
          <Link to="/">
            <img className="logo_width" src={Logo} alt="" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <i />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem className="header_link" key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Typography>ENG </Typography>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar> */}

    <nav className="navbar navbar-expand-lg bg-nav">
      <div className="container-fluid align-items-baseline">
        <Link className="navbar-brand" to="/">
          <img className="logo_width" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link header_link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_link" to="/Monthbanner">
                Theme of the Month
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_link" to="/Gamecontests">
                Games & Contests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_link" to="/Goodreads">
                Good Reads
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_link" to="/Toolsresources">
                Tools & Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_link" to="/Archives">
                Archives
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle language_change"
              href="/#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-language" aria-hidden="true" />
              <span>ENG</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/#">
                  ENG
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  ENG
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-flex gap-50">
          <div className="flex-item">
            <img src={Bell} alt="" />
          </div>
          <div className="flex-item">
            <NavLink className="nav-link" to="/Leaderboard">
              {' '}
              <img src={Leaderboard} alt="" />
            </NavLink>
          </div>
          <div className="flex-item">
            <img className="user_img" src={Userimg} alt="" />
          </div>
        </div>
      </div>
    </nav>
  </>
);
export default Headerdark;
