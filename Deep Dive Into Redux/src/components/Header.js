import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  const isAutheticated = useSelector((state) => state.auth.isAutheticated);
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAutheticated ? (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
