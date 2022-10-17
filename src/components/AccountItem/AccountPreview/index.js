import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../Button";
import Image from "../../Image";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} />
        <Button className={cx("follow-btn")} small primary center>
          Follow
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