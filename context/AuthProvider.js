import React, {createContext, useEffect, useState } from "react";

//creat chat engine user 
const axios = require("axios");

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,isSignInWithEmailLink, signInWithEmailLink
} from "firebase/auth";
import app from "@/firebase/firebase.config";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    signInByVerifyEmail() ;
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInEmailPassword = (email, password) => {
    signInByVerifyEmail() ;
    setLoading(true);
    creatChatUser() ;
    localStorage.setItem("login", true) ;
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo);
  };

  //

const signInByVerifyEmail  = () => {
  // Confirm the link is a sign-in with email link.
if (isSignInWithEmailLink(auth, window.location.href)) {

  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      toast.success(result.message) ;
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
    })
    .catch((error) => {
          toast.error(error.message)
    });
}


}
const googleAuthProvider = new GoogleAuthProvider() ;

  const logoutUser = () => {
    setLoading(true);
    localStorage.removeItem("login") ;
    return signOut(auth);
  };
  const googleLongin = () => {
    localStorage.setItem("login", true) ;
    creatChatUser() ;
    return signInWithRedirect(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  //create chat engine user 
function creatChatUser() {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user?.displayName,
      secret: user?.uid,
      email: user?.email,
    },
    { headers: { "Private-Key": process.env.NEXT_PUBLIC_CHAT_ENGINE_PRIVATE_KEY } }
  );
} 


  const authInfo = {
    createUser,
    singInEmailPassword,
    user,
    logoutUser,
    userProfileUpdate,
    loading,
    googleLongin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
