import classNames from "classnames/bind";
import styles from "./footer.module.scss";

const cx = classNames.bind(styles);

function FooterItems() {
  return <div className={cx("menu-items")}></div>;
}

export default FooterItems;
