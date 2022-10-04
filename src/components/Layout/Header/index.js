import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "../../AccountItem";
import {
  faCircleXmark,
  faSpinner,
  faSearch,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        {/* search bar */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-title")}>
                  <h4> Tài khoản </h4>
                </div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        {/* right container */}
        <div className={cx("right-container")}>
          <div className={cx("upload")}>
            <FontAwesomeIcon icon={faPlus} />
            <p> Tải lên</p>
          </div>
          <div className={cx("login")}> Đăng nhập</div>
          <Tippy
            interactive
            visible={options.length > 0}
            render={(attrs) => (
              <div className={cx("option-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>options</PopperWrapper>
              </div>
            )}
          >
            <div className={cx("options")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
