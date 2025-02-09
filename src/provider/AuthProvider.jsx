import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth/cordova";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.Config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // const googleLogin = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, provider);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }

      console.log("currentUser", currentUser);
    });
    return () => unsubscribe();
  }, [axiosPublic]);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    // googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
