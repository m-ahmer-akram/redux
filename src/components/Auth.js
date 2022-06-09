import styles from "./Auth.module.scss";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

export const Auth = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};
