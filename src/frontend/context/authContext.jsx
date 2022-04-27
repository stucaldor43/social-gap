import { createContext } from "react";

export const authContext = createContext({
  user: null,
  signin: (email, password) =>
    new Promise((resolve, reject) => {
      reject("this is a stub");
    }),
  signup: (email, password) =>
    new Promise((resolve, reject) => {
      reject("this is a stub");
    }),
  signout: () =>
    new Promise((resolve, reject) => {
      reject("this is a stub");
    }),
  refresh: () =>
    new Promise((resolve, reject) => {
      reject("this is a stub");
    }),
});
