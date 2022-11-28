import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./Following.module.scss";
import * as suggestedService from "../../services/userService";
import * as followingListService from "../../services/followingListService";
import SuggestedItem from "./SuggestedItem";
import HomeItem from "../Home/HomeItem";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";

const cx = classNames.bind(styles);

function Following() {
  const [followingList, setFollowingList] = useState([]);
  const [suggestedUser, setSuggestedUser] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState();
  const [prevSelectedVideo, setPrevSelectedVideo] = useState();

  const auth = useAuth();

  const handleResetVideo = () => {
    if (!prevSelectedVideo) {
      return;
    }
    prevSelectedVideo.pause();
    prevSelectedVideo.currentTime = 0;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getFollowingList = async () => {
      const result = await followingListService.getFollowingList({
        page: 1,
      });

      if (result?.length < 1 || !auth.currentUser) {
        setIsFetching(false);
        return;
      }
      const getUsers = () => {
        result.forEach(async (item) => {
          const user = await axios.get(
            `${process.env.REACT_APP_BASE_URL}users/@${item.nickname}`,
            {
              headers: {
                Authorization: "Bearer" + localStorage.getItem("token"),
              },
            }
          );
          setFollowingList((prev) => [...prev, user.data.data]);
        });
      };
      getUsers(() => setIsFetching(false));
    };

    getFollowingList();
  }, []);

  useEffect(() => {
    if (isFetching) {
      return;
    }
    const getSuggestedUserList = async () => {
      const result = await suggestedService.getSuggested({
        page: 1,
        per_page: 10,
      });
      setSuggestedUser(result);
    };

    getSuggestedUserList();
  }, [isFetching]);

  useEffect(() => {
    setPrevSelectedVideo(selectedVideo);
    selectedVideo?.play();

    handleResetVideo();
  }, [selectedVideo]);

  return (
    <div className={cx("wrapper")}>
      {followingList.length < 1
        ? suggestedUser?.map((item) => {
            return (
              <SuggestedItem
                data={item}
                key={item.id}
                setSelectedVideo={setSelectedVideo}
              />
            );
          })
        : followingList?.map((user) => {
            return user.videos.map((video) => {
              return <HomeItem followingPage data={video} key={video.id} />;
            });
          })}
    </div>
  );
}

export default Following;
