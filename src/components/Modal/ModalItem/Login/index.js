import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useEmail } from "../../../../Contexts/EmailContext";
import Spinner from "../../../Spinner";
import EmailForm from "../Forms/EmailForm";
import styles from "../ModalItem.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const auth = useAuth();
  const email = useEmail();

  const handleSignIn = async (e) => {
    e.preventDefault();
    auth.signin(email.email, email.password);
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
            primary:
              email.email &&
              email.password &&
              !auth.isLoading &&
              !auth.currentUser,
            disabled:
              !email.email ||
              !email.password ||
              auth.isLoading ||
              auth.currentUser,
          })}
          form="submit-form"
          type="submit"
          name="login-btn"
        >
          <span>{auth.isLoading ? <Spinner /> : "Đăng nhập"}</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
