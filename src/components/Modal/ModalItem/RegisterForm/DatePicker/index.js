import classNames from "classnames/bind";
import styles from "./DatePicker.module.scss";
import Button from "../../../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function DatePicker() {
  return (
    <div className={cx("wrapper")}>
      <label className={cx("title")}> Ngày sinh của bạn là ngày nào? </label>
      <div className={cx("birthday-form")}>
        <button className={cx("dropdown-btn")}>
          <span> Tháng</span>
          <i>
            <FontAwesomeIcon icon={faCaretDown} />
          </i>
        </button>
        <button className={cx("dropdown-btn")}>
          <span> Ngày</span>
          <i>
            <FontAwesomeIcon icon={faCaretDown} />
          </i>
        </button>
        <button className={cx("dropdown-btn")}>
          <span> Năm</span>
          <i>
            <FontAwesomeIcon icon={faCaretDown} />
          </i>
        </button>
      </div>
      <h4 className={cx("description")}>
        Ngày sinh của bạn sẽ không được hiển thị công khai. 
      </h4>
    </div>
  );
}

export default DatePicker;
