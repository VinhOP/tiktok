import classNames from "classnames/bind";
import styles from "../Modal.module.scss";
import Login from "./Login";
import Register from "./Register";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function ModalItem({ data, onClick, loginForm = false, registerForm = false }) {
  return (
    <>
      {loginForm ? (
        <Login />
      ) : registerForm ? (
        <Register />
      ) : (
        <button className={cx("modal-item")} onClick={onClick}>
          <i>{data.icon}</i>
          <h4 className={cx("title")}>{data.title}</h4>
        </button>
      )}
    </>
  );
}

ModalItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  loginForm: PropTypes.bool,
  registerForm: PropTypes.bool,
};

export default ModalItem;
