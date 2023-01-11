import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import * as userService from "../services/userService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    if (!loggedIn) {
      return;
    }
    async function fetchAPI() {
      const user = await userService.getCurrentUser();
      setCurrentUser(user.data);
    }
    fetchAPI();
  }, [loggedIn]);

  useEffect(() => {
    setCurrentUser(localStorage.getItem("token"));
    localStorage.getItem("token") != null
      ? setLoggedIn(true)
      : setLoggedIn(false);
  }, []);

  const signin = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await userService.signin({ email, password });
      localStorage.setItem("token", user.data.meta.token);
      setCurrentUser(localStorage.getItem("token"));
      setIsLoading(false);
      setTimeout(() => {
        setLoggedIn(true);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("sai email hoặc mật khẩu");
    }
  };

  const signup = async (email, password) => {
    try {
      const user = await userService.signup({ email, password });
    } catch (err) {
      console.log(err);
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
    signup,
    signout,
    loggedIn,
  };

  return (
    <AuthContext.Provider value={value} key={loggedIn}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContext.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
