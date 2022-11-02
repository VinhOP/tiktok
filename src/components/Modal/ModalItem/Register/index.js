import classNames from "classnames/bind";
import styles from "../ModalItem.module.scss";
import DatePicker from "./DatePicker";
import EmailForm from "../Forms/EmailForm";
import { useEffect } from "react";
import { useEmail } from "../../../../Contexts/EmailContext";
import { useAuth } from "../../../../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Register() {
  const email = useEmail();
  const auth = useAuth();

  useEffect(() => {
    return email.setEmail("");
  }, []);

  useEffect(() => {
    return email.setPassword("");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <DatePicker />
      <div className={"register-forms"}>
        <EmailForm />
        <button
          className={cx("continue-btn", {
            primary: email.email && email.password,
            disabled: !email.email || !email.password,
          })}
          onClick={() => auth.signup(email.email, email.password)}
          type={"submit"}
        >
          <span>
            {auth.isLoading ? (
              <FontAwesomeIcon
                className={cx("spinner-icon")}
                icon={faSpinner}
              />
            ) : (
              "Đăng ký"
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Register;
