// import css from "./AuthNav.module.css";
// import clsx from "clsx";
import { NavLink } from 'react-router-dom';

// const buildLinkClass = ({isActive}) => {
//     return clsx(css.link, isActive && css.active);
// };

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
