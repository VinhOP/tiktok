import axios from "axios";
import { auth } from "../firebase";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    async function fetchAPI() {
      const user = await axios.get(`${process.env.REACT_APP_BASE_URL}auth/me`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      });
      setCurrentUser(user.data.data);
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    localStorage.getItem("token") != null
      ? setLoggedIn(true)
      : setLoggedIn(false);
  }, []);

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
      setCurrentUser(user.data.data);
      setIsLoading(false);
      setTimeout(() => {
        setLoggedIn(true);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("sai email hoặc mật khẩu");
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    setCurrentUser();
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
    loggedIn,
  };

  return (
    <AuthContext.Provider value={value} key={loggedIn}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
