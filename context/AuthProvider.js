import app from "@/firebase/firebase.config";
import React, { createContext, useEffect, useState } from "react";
// import axios from 'axios';
//creat chat engine user 
const axios = require("axios");

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInEmailPassword = (email, password) => {
    setLoading(true);
    creatChatUser();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo);
  };



  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLongin = (provider) => {
    creatChatUser();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  //

  //create chat engine user 
  function creatChatUser() {
    axios.post(
      "https://api.chatengine.io/users/",
      {
        username: user?.displayName,
        secret: user?.uid,
        email: user?.email,
      },
      { headers: { "Private-Key": "88609bd9-d0dd-43ac-b081-100b98ce5aea" } }
    );
  }



  const authInfo = {
    createUser,
    singInEmailPassword,
    user,
    logout,
    userProfileUpdate,
    loading,
    googleLongin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
