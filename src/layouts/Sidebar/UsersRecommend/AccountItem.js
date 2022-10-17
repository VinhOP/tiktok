import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "../../../components/Image";
import styles from "./UserRecommend.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("menu-item")}>
      <Image className={cx("avatar")} src={data.avatar} alt="avatar" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> {data.nickname} </span>
          {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
        </p>
        <div className={cx("desc")}>
          {`${data.first_name} ${data.last_name}`}
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
