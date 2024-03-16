import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import ButtonLoader from '../ButtonLoader/ButtonLoader';
import clsx from 'clsx';
import css from './UserMenu.module.css';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[800],
  },
}));

const UserMenu = () => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const handleClick = actions => {
    setLoad(true);
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success('Goodbye!', {
          style: {
            border: '1px solid #0d47a1',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#2196f3',
            secondary: '#fff',
          },
        });
        actions.resetForm();
        setLoad(false);
      })
      .catch(setLoad(false));
  };

  return (
    <div className={css.nav}>
      <p className={css.text}>Welcome, {user.name}</p>
      <NavLink to="/contacts" className={buildLinkClass}>
        Your Contacts
      </NavLink>
      <ColorButton variant="contained" onClick={handleClick}>
        {load ? <ButtonLoader /> : 'Logout'}
      </ColorButton>
    </div>
  );
};

export default UserMenu;
