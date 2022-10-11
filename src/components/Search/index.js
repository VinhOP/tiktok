import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { faSpinner, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import * as searchServices from "../../apiServices/searchService";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";
import { useDebounce } from "../../hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);
  console.log(searchValue);

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
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setIsLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setIsLoading(false);
    };

    fetchApi();
  }, [debounced]);

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
            let value = e.target.value;
            if (/^\s*$/.test(value)) value = "";
            setSearchValue(value);
          }}
          onFocus={handleShowResult}
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
