import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

function EmailProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState("");

  const value = {
    email,
    password,
    showPassword,
    form,
    setForm,
    setEmail,
    setPassword,
    setShowPassword,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}

EmailContext.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default EmailProvider;
