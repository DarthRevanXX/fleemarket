import { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context.jsx";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <div className={classes.header}>
        <a href="#default" className={classes.logo}>
          Testlogo
        </a>
        <div className={classes["header-right"]}>
          {ctx.isLoggedIn && (
            <a href="#home" className={classes.active}>
              Home
            </a>
          )}
          {!ctx.isLoggedIn && (
            <a href="#login" onClick={ctx.onLogin}>
              Login
            </a>
          )}
          {ctx.isLoggedIn && (
            <a href="#logout" onClick={ctx.onLogout}>
              Logout
            </a>
          )}
          <a href="#contact">Contact</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
