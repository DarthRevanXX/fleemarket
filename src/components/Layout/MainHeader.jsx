import { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <div className={classes.header}>
        <Link to="/" className={classes.logo}>
          Testlogo
        </Link>
        <div className={classes["header-right"]}>
          {!ctx.isLoggedIn && (
            <Link to="/login" onClick={ctx.onLogin}>
              Login
            </Link>
          )}
          {ctx.isLoggedIn && (
            <Link to="/" onClick={ctx.onLogout}>
              Logout
            </Link>
          )}
          <Link to="/about">About</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
