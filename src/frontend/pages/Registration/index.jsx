import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import styles from "./styles.module.scss";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = useAuth();

  const handleClick = () => {
    return auth
      .signup(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftColumn}>
        <div className={styles.container}>
          <div className={styles.headingsContainer}>
            <h2 className={styles.heading}>Sign up today</h2>
            <p className={styles.lead}>
              Welcome! With Social Gap you can easily share photos and videos
              with family and friends
            </p>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.row}>
              <label>Email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className={styles.row}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClick}>Sign up</button>
          </div>
          <div className={styles.flavor}>
            <span>
              Already have an acccount? <Link to="/signin">Sign in here</Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  );
}

export default Registration;
