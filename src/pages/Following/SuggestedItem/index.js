import classNames from "classnames/bind";
import { forwardRef, useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import styles from "./SuggestedItem.module.scss";

const cx = classNames.bind(styles);

function SuggestedItem({ data }) {
  const videoRef = useRef();

  const handleResetVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user-card")}>
        <video
          ref={videoRef}
          className={cx("user-video")}
          src={data.popular_video.file_url}
          muted
          onMouseEnter={() => videoRef.current.play()}
          onMouseLeave={handleResetVideo}
        />
      </div>
      <div className={cx("info")}>
        <Image className={cx("user-avatar")} src={data.avatar} />
        <h4 className={cx("title")}>
          {`${data.first_name} ${data.last_name}`}
        </h4>
        <p className={cx("nickname")}> {data.nick_name} </p>
        <Button center primary>
          Follow
        </Button>
      </div>
    </div>
  );
}

export default SuggestedItem;
