import { forwardRef, useRef } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./UserVideo.module.scss";

const cx = classNames.bind(styles);

function UserVideo({ data, setSelectedVideo }) {
  const videoRef = useRef();

  return (
    <div
      className={cx("wrapper")}
      onMouseMove={() => setSelectedVideo(videoRef.current)}
    >
      <div className={cx("video-container")}>
        <video
          className={cx("user-video")}
          ref={videoRef}
          src={data.file_url}
          muted
        />
        <div className={cx("card-footer")}>
          <i className={cx("play-icon")}>
            <FontAwesomeIcon icon={faPlay} />
          </i>
          <span> 232k </span>
        </div>
      </div>
      <p className={cx("description")}> title </p>
    </div>
  );
}
export default UserVideo;
