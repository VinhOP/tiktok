import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./Following.module.scss";
import * as suggestedService from "../../services/userService";
import * as followingListService from "../../services/followingListService";
import SuggestedItem from "./SuggestedItem";
import HomeItem from "../Home/HomeItem";

const cx = classNames.bind(styles);

function Following() {
  const [followingList, setFollowingList] = useState([]);
  const [suggestedUser, setSuggestedUser] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getFollowingList = async () => {
      const result = await followingListService.getFollowingList({
        page: 1,
      });
      setFollowingList(result);
      setIsFetching(false);
    };

    getFollowingList();
  }, []);

  useEffect(() => {
    if (isFetching) {
      return;
    }
    const getSuggestedUserList = async () => {
      const result = await suggestedService.getSuggested({
        page: 1,
        per_page: 10,
      });
      setSuggestedUser(result);
    };

    getSuggestedUserList();
  }, [isFetching]);

  return (
    <div className={cx("wrapper")}>
      {followingList.length < 1
        ? suggestedUser?.map((item) => {
            return <SuggestedItem data={item} key={item.id} />;
          })
        : followingList?.map((item) => {
            return <HomeItem data={{ user: item }} key={item.id} />;
          })}
    </div>
  );
}

export default Following;
