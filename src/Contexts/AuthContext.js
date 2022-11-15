import axios from "axios";
import { auth } from "../firebase";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    setTimeout(() => {
      setLoggedIn(true);
    }, 1000);
  }, [currentUser]);

  const signin = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await axios.post(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", user.data.meta.token);
      setCurrentUser(localStorage.getItem("token"));
      setIsLoading(false);
      setTimeout(() => {
        setLoggedIn(true);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    setCurrentUser(localStorage.getItem("token"));
    setLoggedIn(false);
  };

  const value = {
    currentUser,
    setCurrentUser,
    isLoading,
    error,
    setError,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value} key={loggedIn}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
