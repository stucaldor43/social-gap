import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.scss";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const getDateTimeAsYYYYMMDDHHMM = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${String(
      now.getHours()
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };

  const handleClick = async () => {
    try {
      await axios.post("/accounts", {
        id: Math.random().toString(16).slice(2),
        email,
        password,
        created_at: getDateTimeAsYYYYMMDDHHMM(),
        updated_at: getDateTimeAsYYYYMMDDHHMM(),
      });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftColumn}>
        <div className={styles.container}>
          <div className={styles.headingsContainer}>
            <h2 className={styles.heading}>Welcome back</h2>
            <p className={styles.lead}>
              Welcome! Please enter the following information
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
              Already have an acccount? <Link to="">Sign in here</Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  );
}

export default Registration;
