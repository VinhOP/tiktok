import classNames from "classnames/bind";
import { useEffect } from "react";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useEmail } from "../../../../Contexts/EmailContext";
import EmailForm from "../Forms/EmailForm";

import styles from "../ModalItem.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const auth = useAuth();
  const email = useEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signup(email.email, email.password);
  };

  useEffect(() => {
    return email.setEmail("");
  }, []);

  useEffect(() => {
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
            primary: email.email && email.password,
            disabled: !email.email || !email.password,
          })}
          type="submit"
          onClick={handleSubmit}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
