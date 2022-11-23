import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Image from "../../components/Image";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Profile() {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState();

  //console.log(userProfile);

  useEffect(() => {
    const fetchApi = async () => {
      const user = await axios.get(
        `${process.env.REACT_APP_BASE_URL}users${location.pathname}`
      );
      //console.log(user.data.data);
      setUserProfile(user.data.data);
    };

    fetchApi();
  }, [location.pathname]);

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
              {console.log(userProfile.avatar)}
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
      <div className={cx("body")}></div>
    </div>
  );
}

export default Profile;
