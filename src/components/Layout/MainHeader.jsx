import { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context.jsx";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <div className={classes.header}>
        <Link className={classes.logo} to="/">
          FleeMark
        </Link>
        <div className={classes["header-right"]}>
          {!ctx.isLoggedIn && <Link to="/login">Login</Link>}

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/about"
          >
            About
          </NavLink>
          {ctx.isLoggedIn && (
            <Link to="/" onClick={ctx.onLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
