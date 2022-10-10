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
  const [isLoading, setIsLoading] = useState(false);
  const [startSpace, setStartSpace] = useState(false);

  const inputRef = useRef();

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

  //fetch API
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setIsLoading(true);

    fetch(
      //encodeURIComponent() để tránh nhầm kí tự trên URL nếu user nhập giống
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setIsLoading(false);
      });
  }, [searchValue]);

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx("search-title")}>
              <h4> Tài khoản </h4>
            </div>
            {searchResult.map((result) => {
              return <AccountItem data={result} key={result.id} />;
            })}
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
          // onPaste={(e) => {
          //   startSpace && e.preventDefault();
          // }}
        />
        <span className={cx("spliter")}></span>

        {/* search/clear/spinner icons */}
        {!!searchValue && !isLoading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {isLoading && (
          <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
        )}
        <button className={cx("search-button")}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
