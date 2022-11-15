import { createContext, useContext, useState } from "react";

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

function EmailProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const value = {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    setShowPassword,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}

export default EmailProvider;
