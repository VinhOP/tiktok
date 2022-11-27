import classNames from "classnames/bind";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Profile.module.scss";
import Image from "../../components/Image";
import Button from "../../components/Button";
import UserVideo from "./UserVideo";

const cx = classNames.bind(styles);

function Profile() {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState();
  const [bodyContent, setBodyContent] = useState("posts");
  const [prevSelectedVideo, setPrevSelectedVideo] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const bottomLineRef = useRef();

  const handleClickPosts = () => {
    bottomLineRef.current.style.transform = "translateX(0)";
    setBodyContent("posts");
  };

  const handleClickPostsLiked = () => {
    bottomLineRef.current.style.transform = "translateX(230px)";
    setBodyContent("liked video");
  };

  const handleResetVideo = () => {
    if (!prevSelectedVideo) {
      return;
    }
    prevSelectedVideo.pause();
    prevSelectedVideo.currentTime = 0;
  };

  useEffect(() => {
    const fetchApi = async () => {
      const user = await axios.get(
        `${process.env.REACT_APP_BASE_URL}users${location.pathname}`
      );
      setUserProfile(user.data.data);
      setBodyContent("posts");
    };

    bottomLineRef.current.style.transform = "translateX(0)";
    fetchApi();
  }, [location.pathname]);

  useEffect(() => {
    setPrevSelectedVideo(selectedVideo);
    selectedVideo?.play();

    handleResetVideo();
  }, [selectedVideo]);

  return (
    <div className={cx("wrapper")}>
      {userProfile && (
        <div className={cx("header")}>
          <div className={cx("info")}>
            <div className={cx("info-header")}>
              <Image
                className={cx("avatar")}
                src={userProfile.avatar}
                alt={"avatar"}
              />
              <div className={cx("title-container")}>
                <h2 className={cx("nickname")}>{userProfile.nickname}</h2>
                <h4
                  className={cx("fullname")}
                >{`${userProfile?.first_name} ${userProfile.last_name}`}</h4>
                <Button className={cx("follow-btn")} primary center>
                  Follow
                </Button>
              </div>
            </div>
            <div className={cx("count-info")}>
              <h4 className={cx("count-item")}>
                <strong> 524 </strong>
                <span> Dang follow </span>
              </h4>
              <h4 className={cx("count-item")}>
                <strong> 524 </strong>
                <span> follower </span>
              </h4>
              <h4 className={cx("count-item")}>
                <strong> 524 </strong>
                <span> thich </span>
              </h4>
            </div>
            <div className={cx("description")}>
              <p> Chua co tieu su </p>
            </div>
            <div className={cx("links")}>
              <a href="#"> links </a>
            </div>
          </div>
          <div className={cx("options")}>
            <i>
              <FontAwesomeIcon className={cx("option-icon")} icon={faShare} />
            </i>
            <i>
              <FontAwesomeIcon
                className={cx("option-icon")}
                icon={faEllipsis}
              />
            </i>
          </div>
        </div>
      )}
      <div className={cx("body")}>
        <div className={cx("video-feed-tab")}>
          <div className={cx("posts")} onClick={handleClickPosts}>
            <span> Video </span>
          </div>
          <div className={cx("posts-liked")} onClick={handleClickPostsLiked}>
            <h4 className={cx("span-liked")}> Đã thích </h4>
          </div>
          <div ref={bottomLineRef} className={cx("bottom-line")} />
        </div>
        <div className={cx("video-list")}>
          {bodyContent === "posts" ? (
            userProfile?.videos?.map((item) => {
              return (
                <UserVideo
                  data={item}
                  key={item.id}
                  selectedVideo={selectedVideo}
                  setSelectedVideo={setSelectedVideo}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
