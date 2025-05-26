import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={buildCssClasses}>
                Home</NavLink>
            <NavLink to="/psychologists" className={buildCssClasses}>
                Psychologists</NavLink>
        </nav>
    );
}

export default Navigation;