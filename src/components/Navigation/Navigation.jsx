import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import clsx from 'clsx';
import css from './Navigation.module.css';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  return (
    <nav>
      <div className={css.header}>
        <div className={css.headerContainer}>
          <div className={css.hamburgerLines}>
            <IconContext.Provider value={{ size: '30px', color: '#212121' }}>
              <Button onClick={toggleDrawer(true)}>
                <RxHamburgerMenu />
              </Button>
            </IconContext.Provider>
          </div>
          <div className={css.logo}>
            <h1>Contacts App</h1>
          </div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className={css.menuItems}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
