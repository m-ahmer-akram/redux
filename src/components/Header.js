import styles from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const onLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/" onClick={onLinkClick}>
                My Products
              </a>
            </li>
            <li>
              <a href="/" onClick={onLinkClick}>
                My Sales
              </a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
