import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useEmail } from "../../../../Contexts/EmailContext";
import EmailForm from "../Forms/EmailForm";
import styles from "../ModalItem.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const auth = useAuth();
  const email = useEmail();

  const handleSignIn = (e) => {
    e.preventDefault();
    //auth.signin(email.email, email.password);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}auth/login`, {
        email: email.email,
        password: email.password,
      })
      .then((res) => auth.setCurrentUser(res.data))
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    return email.setEmail("");
  }, []);

  useLayoutEffect(() => {
    return email.setPassword("");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <EmailForm />
      <div>
        <a className={cx("forgot-password")} href="/">
          Quên mật khẩu?
        </a>
        <button
          className={cx("continue-btn", {
            primary: email.email && email.password && !auth.isLoading,
            disabled: !email.email || !email.password || auth.isLoading,
          })}
          type="submit"
          onClick={handleSignIn}
        >
          <span>
            {auth.isLoading ? (
              <FontAwesomeIcon
                className={cx("spinner-icon")}
                icon={faSpinner}
              />
            ) : (
              "Đăng nhập"
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
