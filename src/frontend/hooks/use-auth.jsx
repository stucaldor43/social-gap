import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { getDateTimeAsYYYYMMDDHHMM } from "../utils/date";
import { authContext } from "../context/authContext";

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const refresh = () => {
    return axios
      .get("/read-cookie")
      .then((response) => {
        setUser(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signin = (email, password) => {
    return axios
      .get("/authenticate", { auth: { username: email, password } })
      .then((response) => {
        setUser(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = (email, password) => {
    const body = {
      id: Math.random().toString(16).slice(2),
      email,
      password,
      created_at: getDateTimeAsYYYYMMDDHHMM(),
      updated_at: getDateTimeAsYYYYMMDDHHMM(),
    };

    return axios
      .post("/accounts", body)
      .then(() => {
        setUser(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signout = () => {
    return axios
      .get("/clear-coookie")
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    user,
    signin,
    signup,
    signout,
    refresh,
  };
}
