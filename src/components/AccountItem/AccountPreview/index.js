import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import { useAuth } from "../../../Contexts/AuthContext";
import Button from "../../Button";
import Image from "../../Image";
import styles from "./AccountPreview.module.scss";
import * as userSevice from "../../../services/userService";
import { useEffect, useLayoutEffect, useState } from "react";
import { useModal } from "../../../Contexts/ModalContext";
import * as userService from "../../../services/userService";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  const [isFollowed, setIsFollowed] = useState();

  const modal = useModal();
  const auth = useAuth();

  const handleFollow = async () => {
    if (!auth.currentUser) {
      modal.toggleModal();
    }
    await userService.followAndUnFollowUser({
      user: data,
      isFollowed,
    });
    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    setIsFollowed(data.is_followed);
  }, [data]);

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} />
        <Button
          className={cx("follow-btn")}
          small
          primary
          center
          onClick={handleFollow}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </header>
      <div className={cx("info")}>
        <h4 className={cx("title")}>{data.nickname}</h4>
        {data.tick && (
          <span>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        )}
      </div>
      <p
        className={cx("description")}
      >{`${data.first_name} ${data.last_name}`}</p>
      <div className={cx("footer")}>
        <span className={cx("user-stat-data")}>{data.followers_count}</span>
        <span className={cx("user-stat-des")}>follower</span>
        <span className={cx("user-stat-data")}>{data.likes_count}</span>
        <span className={cx("user-stat-des")}>likes</span>
      </div>
    </div>
  );
}

export default AccountPreview;
