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
import { useAuth } from "../../Contexts/AuthContext";
import Button from "../../components/Button";
import { useModal } from "../../Contexts/ModalContext";

function Sidebar() {
  const cx = classNames.bind(styles);
  const auth = useAuth();
  const modal = useModal();

  const handleLogin = () => {
    modal.toggleModal();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
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
        {!auth.currentUser && (
          <div className={cx("login-section")}>
            <h4 className={cx("title")}>
              Đăng nhập để follow các tác giả, thích video và xem bình luận.
            </h4>
            <Button
              className={cx("login-btn")}
              center
              outline
              onClick={handleLogin}
            >
              Đăng nhập
            </Button>
          </div>
        )}
        <UserRecommend />
        {auth.currentUser && <Following />}
        <Discover />
      </div>
    </div>
  );
}

export default Sidebar;
