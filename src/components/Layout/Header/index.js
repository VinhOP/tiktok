import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import {
  faCircleXmark,
  faSpinner,
  faSearch,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck="false"
          />
          <span className={cx("spliter")}></span>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
          <button className={cx("search-button")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("right-container")}>
          <div className={cx("upload")}>
            <FontAwesomeIcon icon={faPlus} />
            <p> Tải lên</p>
          </div>
          <div className={cx("login")}> Đăng nhập</div>
          <div className={cx("options")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
