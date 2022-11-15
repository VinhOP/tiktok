import { useEffect, useRef, useState } from "react";
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import axios from "axios";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import styles from "./HomeItem.module.scss";
import { useAuth } from "../../../Contexts/AuthContext";
import { useModal } from "../../../Contexts/ModalContext";

const cx = classNames.bind(styles);

function HomeItem({ data }) {
  const [suggestedVideo, setSuggestedVideo] = useState(data);
  const [liked, setLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(data.user.is_followed);

  const auth = useAuth();
  const modal = useModal();

  const firstUpdate = useRef(true);
  const videoRef = useRef();

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleFollow = async (data) => {
    if (auth.currentUser) {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/${data.user_id}/${
          isFollowed ? "unfollow" : "follow"
        }`,
        {},
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      );
      setIsFollowed(!isFollowed);
    } else {
      modal.toggleModal();
    }
  };

  useEffect(() => {
    !firstUpdate.current &&
      setSuggestedVideo({
        ...suggestedVideo,
        is_liked: liked,
        likes_count: liked
          ? suggestedVideo.likes_count + 1
          : suggestedVideo.likes_count - 1,
      });
    firstUpdate.current = false;
  }, [liked]);

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
          <Button
            outline
            small
            center
            className={cx("follow-btn", { followed: isFollowed })}
            onClick={handleFollow}
          >
            <span className={cx("description")}>
              {isFollowed ? "Đang Follow" : "Follow"}
            </span>
          </Button>
        </header>
        <div className={cx("body")}>
          <div className={cx("video-container")}>
            <div className={cx("video-player-container")}>
              <video
                ref={videoRef}
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
