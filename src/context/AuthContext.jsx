import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerMicrosoft = new OAuthProvider("microsoft.com");
const providerApple = new OAuthProvider("apple.com");

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signInWithGoogleAuth = () => {
    return signInWithPopup(auth, providerGoogle);
  };
  const signInWithFacebookAuth = () => {
    return signInWithPopup(auth, providerFacebook);
  };
  const signInWithMicrosoft = () => {
    return signInWithPopup(auth, providerMicrosoft);
  };
  const signInWithApple = () => {
    return signInWithPopup(auth, providerApple);
  };

  useEffect(() => {
    const unsubribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const value = {
    createUser,
    signIn,
    signInWithGoogleAuth,
    signInWithFacebookAuth,
    signInWithMicrosoft,
    signInWithApple,
    logOut,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const UserAuth = () => {
  return useContext(UserContext);
};
