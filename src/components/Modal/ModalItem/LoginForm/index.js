import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Button from "../../../Button";
import styles from "./LoginForm.module.scss";

const cx = classNames.bind(styles);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <label className={cx("title")}>Email hoặc TikTok ID</label>
        <a className={cx("description")} href="/">
          Đăng nhập bằng số điện thoại
        </a>
      </div>
      <form className={cx("email-form")}>
        <div className={cx("input-field")}>
          <input
            className={cx("input")}
            type="email"
            placeholder="Email hoặc TikTok ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={cx("input-field")}>
          <input
            className={cx("input")}
            type={showPassword ? "text" : "password"}
            placeholder="Mật Khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={cx("eye-icon")}
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <a className={cx("forgot-password")} href="/">
          Quên mật khẩu?
        </a>
        <Button
          className={cx("submit-btn", {
            primary: email && password,
            disabled: !email || !password,
          })}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
