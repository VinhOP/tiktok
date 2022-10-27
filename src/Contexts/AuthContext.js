import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => setCurrentUser(user));

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return (
    <AuthContext.Provider value={value} key={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
