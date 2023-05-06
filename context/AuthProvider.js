import app from "@/firebase/firebase.config";

import React, { Children, createContext, useEffect, useState } from "react";
// import * as functions from "firebase-functions";
//creat chat engine user 
const axios = require("axios");
// const [email , setEmail] = useState("") ;
// const [name , setName] = useState("") ;
// exports.createChatEngineUser = functions.auth.user().onCreate((user) => {

// });

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
    creatChatUser() ;
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

// //
//  updateProfile()
//  .then((data) => setName(data?.user?.displayName))
//  .catch(error => console.log(error)) ;
// //
// singInEmailPassword()
// .then((data) => setName(data?.user?.email))
// .catch(error => console.log(error)) ;
// //


  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLongin = (provider) => {
    creatChatUser() ;
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
      username: user.displayName,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "88609bd9-d0dd-43ac-b081-100b98ce5aea" } }
  );
}

//delete chat engine user 

// exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
//   axios.delete("https://api.chatengine.io/users/me/", {
//     headers: {
//       "Project-ID": "a2548ef5-a2c5-49ff-97fa-4dabf2aba40b",
//       "User-Name": user.email,
//       "User-Secret": user.uid,
//     },
//   });
// });


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
