import classNames from "classnames/bind";
import styles from "../ModalItem.module.scss";
import DatePicker from "./DatePicker";
import EmailForm from "../Forms/EmailForm";
import { useEffect } from "react";
import { useEmail } from "../../../../Contexts/EmailContext";

const cx = classNames.bind(styles);

function Register() {
  const email = useEmail();
  console.log(email);

  useEffect(() => {
    return email.setEmail("");
  }, []);

  useEffect(() => {
    return email.setPassword("");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <DatePicker />
      <div classNames={"register-forms"}>
        <EmailForm />
        <button
          className={cx("continue-btn", {
            primary: email.email && email.password,
            disabled: !email.email || !email.password,
          })}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
}

export default Register;
