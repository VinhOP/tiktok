import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

function AccountItem() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665046800&x-signature=GV75X4EsdIvC6ufbXOPWj0MfJKQ%3D"
        alt="avatar"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> Nguyen Van A </span>
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
        <div className={cx("desc")}> nguyenvana </div>
      </div>
    </div>
  );
}

export default AccountItem;
