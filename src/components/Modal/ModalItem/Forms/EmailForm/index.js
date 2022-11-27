import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../../../Contexts/AuthContext";
import { useEmail } from "../../../../../Contexts/EmailContext";
import styles from "./EmailForm.module.scss";

const cx = classNames.bind(styles);

function EmailForm() {
  const email = useEmail();
  const auth = useAuth();

  useLayoutEffect(() => {
    return auth.setError("");
  }, []);

  useEffect(() => {
    auth.error && auth.setError("");
  }, [email.email, email.password]);

  return (
    <div>
      <div className={cx("header")}>
        <label className={cx("title")}>Email hoặc TikTok ID</label>
        <a
          className={cx("description")}
          href="/"
          onClick={(e) => e.preventDefault()}
        >
          Đăng nhập bằng số điện thoại
        </a>
      </div>
      <form className={cx("email-form")}>
        <div className={cx("input-field")}>
          <input
            value={email.email}
            className={cx("input")}
            type="email"
            placeholder="Email hoặc TikTok ID"
            onChange={(e) => email.setEmail(e.target.value)}
          />
        </div>
        <div className={cx("input-field")}>
          <input
            value={email.password}
            className={cx("input")}
            type={email.showPassword ? "text" : "password"}
            placeholder="Mật Khẩu"
            onChange={(e) => email.setPassword(e.target.value)}
          />
          <span
            className={cx("eye-icon")}
            onClick={() => email.setShowPassword(!email.showPassword)}
          >
            <FontAwesomeIcon icon={email.showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
      </form>
      <p className={cx("error-message", { active: !!auth.error })}>
        {auth.error}
      </p>
    </div>
  );
}

export default EmailForm;
