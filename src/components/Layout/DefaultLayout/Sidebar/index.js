import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const cx = classNames.bind(styles);
  return <div className={cx("wrapper")}> Sidebar </div>;
}

export default Sidebar;
