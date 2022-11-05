import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./Following.module.scss";
import * as suggestedService from "../../services/userService";
import SuggestedItem from "./SuggestedItem";

const cx = classNames.bind(styles);

function Following() {
  const [suggestedUser, setSuggestedUser] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await suggestedService.getSuggested({
        page: 1,
        per_page: 10,
      });
      setSuggestedUser(result);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("wrapper")}>
      {suggestedUser &&
        suggestedUser.map((item) => {
          return <SuggestedItem data={item} key={item.id} />;
        })}
    </div>
  );
}

export default Following;
