import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import PropTypes from "prop-types";

function Wrapper({ children, className }) {
  const cx = classNames.bind(styles);

  return <div className={cx("wrapper", className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
