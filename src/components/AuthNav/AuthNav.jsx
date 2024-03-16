import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
    return (
        <div className={css.nav}>
            <NavLink to="/register" className={buildLinkClass}>
                Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
                Log In
            </NavLink>
        </div>
    );
};

export default AuthNav;