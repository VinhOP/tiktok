import { useState } from "react";
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

function HomeItem({ data }) {
  const [suggestedVideo, setSuggestedVideo] = useState(data);

  const handleLike = () => {
    setSuggestedVideo({
      ...suggestedVideo,
      is_liked: !suggestedVideo.is_liked,
    });
  };

  return (
    <div className={cx("wrapper")}>
      <Image
        src={suggestedVideo.user.avatar}
        alt={suggestedVideo.user.nickname}
        className={cx("avatar")}
      />
      <div className={cx("content")}>
        <header className={cx("header")}>
          <div className={cx("info")}>
            <div className={cx("info-header")}>
              <h4 className={cx("nickname")}>{suggestedVideo.user.nickname}</h4>
              <p className={cx("full-name")}>
                {`${suggestedVideo.user.first_name} ${suggestedVideo.user.last_name}`}
              </p>
            </div>
            <p className={cx("description")}> {suggestedVideo.description} </p>
            <strong className={cx("song")}>
              <span>&#9834; {suggestedVideo.music || "không có nhạc nền"}</span>
            </strong>
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
                autoPlay
                muted
                src={suggestedVideo.file_url}
                type="video/mp4"
              />
            </div>
            <div className={cx("UI-container")}></div>
          </div>

          {/* actions */}
          <div className={cx("action-item-container")}>
            <div className={cx("action-item")} onClick={handleLike}>
              <button
                className={cx("action-btn", {
                  active: suggestedVideo.is_liked,
                })}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <strong> {suggestedVideo.likes_count} </strong>
            </div>

            <div className={cx("action-item")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faCommentDots} />
              </button>
              <strong> {suggestedVideo.comments_count} </strong>
            </div>

            <div className={cx("action-item")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faShare} />
              </button>
              <strong> {suggestedVideo.share_count} </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
