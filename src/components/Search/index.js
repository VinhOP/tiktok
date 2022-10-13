import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { faSpinner, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import * as searchServices from "../../services/searchService";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "../Popper";
import { useDebounce } from "../../hooks";
import RenderSearchResult from "./RenderSearchResult";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deboucedValue = useDebounce(searchValue, 500);

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

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  //fetch API
  useEffect(() => {
    if (!deboucedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setIsLoading(true);

      const result = await searchServices.search(deboucedValue);
      setSearchResult(result);

      setIsLoading(false);
    };

    fetchApi();
  }, [deboucedValue]);

  const renderResult = (attrs) => (
    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <div className={cx("search-title")}>
          <h4> Tài khoản </h4>
        </div>
        <RenderSearchResult searchResult={searchResult} />
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={handleHideResult}
        render={renderResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck="false"
            onChange={(e) => handleChange(e)}
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
          <button
            className={cx("search-button")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
