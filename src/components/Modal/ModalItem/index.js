import classNames from "classnames/bind";
import styles from "../Modal.module.scss";

const cx = classNames.bind(styles);
function ModalItem({ data, onClick }) {
  return (
    <button className={cx("modal-item")} onClick={onClick}>
      <i>{data.icon}</i>
      <h4 className={cx("title")}>{data.title}</h4>
    </button>
  );
}

export default ModalItem;
