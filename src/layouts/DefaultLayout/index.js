import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}> {children} </div>
      </div>
      <Modal />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
