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
  const [error, setError] = useState("");

  console.log(currentUser);

  const signup = async (email, password) => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (error) {
      setError("email or password contain symbols");
      setIsLoading(false);
    }
  };

  const signin = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (error) {
      setError("wrong user name or password");
      setIsLoading(false);
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
    setCurrentUser,
    isLoading,
    error,
    setError,
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
