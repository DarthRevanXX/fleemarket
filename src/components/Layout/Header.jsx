import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../stores/auth-context.jsx";
import { useContext } from "react";

import classes from "./Header.module.css";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Sirius</Link>
      </div>

      <div className={classes["header-link"]}>
        {!ctx.isLoggedIn && <NavLink to="/signin">Sign in</NavLink>}

        {ctx.isLoggedIn && <NavLink to="/signout">Sign out</NavLink>}

        {ctx.isLoggedIn && <NavLink to="/mypage">My Page</NavLink>}
      </div>
    </header>
  );
};

export default Header;
