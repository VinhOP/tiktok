import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Image";
import Button from "../Button";

function AccountItem({ data }) {
  const cx = classNames.bind(styles);
  return (
    <Button to={`@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt="avatar" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> {data.full_name} </span>
          {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
        </p>
        <div className={cx("desc")}> {data.nickname} </div>
      </div>
    </Button>
  );
}

export default AccountItem;
