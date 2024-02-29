import { Button } from '@mui/material';
import Bell from 'csam/images/Bell.svg';
import Leaderboard from 'csam/images/leaderboard_img.svg';
import Logo from 'csam/images/logo_img.png';
import Userimg from 'csam/images/user_img.svg';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo_width" src={Logo} alt="CSAM" />
        </Link>
        {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent" />
        <ul className="navbar-nav me-auto mb-lg-0">
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
                <Button className="dropdown-item" onClick={handleChangeLanguage}>
                  {t('changeLanguage')}
                </Button>
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
              <img src={Leaderboard} alt="" />
            </NavLink>
          </div>
          <div className="flex-item">
            <img className="user_img" src={Userimg} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
