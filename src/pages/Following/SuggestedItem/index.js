import axios from "axios";
import classNames from "classnames/bind";
import { useRef } from "react";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { useAuth } from "../../../Contexts/AuthContext";
import { useModal } from "../../../Contexts/ModalContext";
import styles from "./SuggestedItem.module.scss";
import * as userService from "../../../services/userService";

const cx = classNames.bind(styles);

function SuggestedItem({ data, setSelectedVideo, rerender, setRerender }) {
  const videoRef = useRef();
  const auth = useAuth();
  const modal = useModal();

  const handleFollow = async () => {
    if (!auth.currentUser) {
      modal.toggleModal();
    }
    userService.followAndUnFollowUser({ user: data });

    setRerender(!rerender);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("user-card")}>
        <video
          ref={videoRef}
          className={cx("user-video")}
          src={data.popular_video.file_url}
          muted
          onMouseEnter={() => setSelectedVideo(videoRef.current)}
        />
      </div>
      <div className={cx("info")}>
        <Image className={cx("user-avatar")} src={data.avatar} />
        <h4 className={cx("title")}>
          {`${data.first_name} ${data.last_name}`}
        </h4>
        <p className={cx("nickname")}> {data.nick_name} </p>
        <Button center primary onClick={handleFollow}>
          Follow
        </Button>
      </div>
    </div>
  );
}

export default SuggestedItem;
