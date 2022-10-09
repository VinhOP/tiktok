import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { faSpinner, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4]);
    }, 3000);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 3}
      interactive
      onClickOutside={handleHideResult}
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
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Search accounts and videos"
          spellCheck="false"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={handleShowResult}
        />
        <span className={cx("spliter")}></span>

        {/* search/clear/spinner icons */}
        {searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} /> */}
        <button className={cx("search-button")}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
