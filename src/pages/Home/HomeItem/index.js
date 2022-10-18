import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import styles from "./HomeItem.module.scss";

const cx = classNames.bind(styles);
function HomeItem() {
  return (
    <div className={cx("wrapper")}>
      <Image src="" alt="image" className={cx("avatar")} />
      <div className={cx("content")}>
        <header className={cx("header")}>
          <div className={cx("info")}>
            <div className={cx("header")}>
              <h4 className={cx("nickname")}> congmenlyne </h4>
              <p className={cx("full-name")}> Le Cong</p>
            </div>
            <p className={cx("description")}> description </p>
            <strong className={cx("song")}> nhac nen </strong>
          </div>
          <Button outline small center className={cx("follow-btn")}>
            Follow
          </Button>
        </header>
        <div className={cx("body")}>
          <div className={cx("video-container")}>
            <div className={cx("video-player-container")}>
              <video
                className={cx("video")}
                controls
                src="https://vod-progressive.akamaized.net/exp=1666101759~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3625%2F29%2F743125466%2F3425362483.mp4~hmac=08bd58819235a60c8dcab5d7435c0e7c98a60017a67e54716120a4410dbb8092/vimeo-prod-skyfire-std-us/01/3625/29/743125466/3425362483.mp4?filename=file.mp4"
              ></video>
            </div>
            <div className={cx("UI-container")}></div>
          </div>
          <div className={cx("action-item-container")}>
            <div className={cx("action-item")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <strong> 1.5M </strong>
            </div>
            <div className={cx("action-item")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faCommentDots} />
              </button>
              <strong> 42 </strong>
            </div>
            <div className={cx("action-item")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faShare} />
              </button>
              <strong> 432 </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
