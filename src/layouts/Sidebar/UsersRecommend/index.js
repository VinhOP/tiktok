import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import AccountItem from "../../../components/AccountItem";
import Button from "../../../components/Button";
import { useAuth } from "../../../Contexts/AuthContext";
import * as suggestedService from "../../../services/userService";
import styles from "./UserRecommend.module.scss";

const cx = classNames.bind(styles);

function UserRecommend() {
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await suggestedService.getSuggested({
        page: 1,
        per_page: 5,
      });
      setSuggestedUser(result);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <>
        <h4 className={cx("title")}> Tài khoản được đề xuất</h4>
        {suggestedUser.map((user) => {
          return (
            <AccountItem
              className={cx("menu-item")}
              isSugesstedSection
              data={user}
              key={user.id}
            />
          );
        })}
        <h4 className={cx("see-more-btn")}> Xem tất cả </h4>
      </>
    </div>
  );
}

export default UserRecommend;
