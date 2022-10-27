import classNames from "classnames/bind";
import styles from "./RegisterForm.module.scss";
import DatePicker from "./DatePicker";

const cx = classNames.bind(styles);

function RegisterForm() {
  return (
    <div className={cx("wrapper")}>
      <DatePicker />
    </div>
  );
}

export default RegisterForm;
