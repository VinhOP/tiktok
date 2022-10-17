import classNames from "classnames/bind";
import styles from "./Following.module.scss";

const cx = classNames.bind(styles);

function Following() {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Các tài khoản đang follow</h4>
      <p className={cx("description")}>
        Những tài khoản bạn follow sẽ xuất hiện tại đây
      </p>
    </div>
  );
}

export default Following;
