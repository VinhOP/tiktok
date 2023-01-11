import { faHashtag, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Discover.module.scss";

const cx = classNames.bind(styles);

function Discover() {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Khám phá</h4>
      <div className={cx("list-container")}>
        <ul className={cx("list")}>
          <li className={cx("tag")}>
            <div className={cx("list-item")}>
              <FontAwesomeIcon className={cx("icon")} icon={faHashtag} />
              suthatla
            </div>
            <div className={cx("list-item")}>
              <FontAwesomeIcon className={cx("icon")} icon={faHashtag} />
              mackedoi
            </div>
          </li>
          <li className={cx("list-item", "tag")}>
            <FontAwesomeIcon className={cx("icon")} icon={faHashtag} />
            sansangthaydoi
          </li>
          <li className={cx("list-item")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMusic} />
            Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media &amp; h0n &amp; BHMedia
          </li>
          <li className={cx("list-item")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMusic} />
            music
          </li>
          <li className={cx("list-item")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMusic} />
            music
          </li>
          <li className={cx("tag")}>
            <div className={cx("list-item")}>
              <FontAwesomeIcon className={cx("icon")} icon={faHashtag} />
              suthatla
            </div>
            <div className={cx("list-item")}>
              <FontAwesomeIcon className={cx("icon")} icon={faHashtag} />
              mackedoi
            </div>
          </li>
          <li className={cx("list-item")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMusic} />
            music
          </li>
          <li className={cx("list-item")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMusic} />
            music
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Discover;
