import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      console.log("sign up successful");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      console.log("something went wrong");
    }
  };

  const signin = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      console.log("signed in");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      console.log("wrong username or password");
    }
  };

  const signout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    isLoading,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value} key={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
