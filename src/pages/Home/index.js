import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";
import * as videoService from "../../services/videoService";

const cx = classNames.bind(styles);
function Home() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await videoService.getVideoList({
        type: "for-you",
        page: 1,
      });
      setSuggestedVideos(result);
    };
    fetchAPI();
  }, []);

  return (
    <div className={cx("wrapper")}>
      {suggestedVideos.map((suggestedVideo) => {
        return <HomeItem data={suggestedVideo} key={suggestedVideo.id} />;
      })}
    </div>
  );
}

export default Home;
