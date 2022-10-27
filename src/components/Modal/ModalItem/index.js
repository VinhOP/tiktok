import classNames from "classnames/bind";
import styles from "../Modal.module.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const cx = classNames.bind(styles);
function ModalItem({ data, onClick, loginForm = false, registerForm = false }) {
  return (
    <>
      {loginForm ? (
        <LoginForm />
      ) : registerForm ? (
        <RegisterForm />
      ) : (
        <button className={cx("modal-item")} onClick={onClick}>
          <i>{data.icon}</i>
          <h4 className={cx("title")}>{data.title}</h4>
        </button>
      )}
    </>
  );
}

export default ModalItem;
