import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
const signIn = (email,password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email,password)
}
//   log out the site 
const logOut = () => {
  setLoading(true)
    return signOut(auth)
}
//   observer
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth stae changed', currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
  },[])
  const authInfo = { 
    user, 
    loading,
    createUser, 
    signIn, 
    logOut
 };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
