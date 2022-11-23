import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./ProfileLayout.module.scss";

function ProfileLayout({ children }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar profileLayout />
        <div className={cx("content")}> {children} </div>
      </div>
    </div>
  );
}

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileLayout;
