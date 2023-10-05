import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
const signIn = (email,password) => {
  return signInWithEmailAndPassword(auth, email,password)
}
//   log out the site 
const logOut = () => {
    return signOut(auth)
}
//   observer
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth stae changed', currentUser);
        setUser(currentUser)
    })
    return () => {
        unsubscribe();
    }
  },[])
  const authInfo = { 
    user, 
    createUser, 
    signIn,
    logOut
 };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
