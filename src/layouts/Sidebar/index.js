import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import styles from "./Sidebar.module.scss";
import UserRecommend from "./UsersRecommend";
import {
  faHome,
  faUserGroup,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import Following from "./Following";
import Discover from "./Discover";

function Sidebar() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Menu>
        <MenuItem
          icon={<FontAwesomeIcon icon={faHome} />}
          title="Dành cho bạn"
          to={"/foryou"}
        />
        <MenuItem
          title="Đang Follow"
          icon={<FontAwesomeIcon icon={faUserGroup} />}
          to={"/following"}
        />
        <MenuItem
          title="LIVE"
          icon={<FontAwesomeIcon icon={faVideoCamera} />}
          to={"/live"}
        />
      </Menu>
      <UserRecommend />
      <Following />
      <Discover />
    </div>
  );
}

export default Sidebar;
