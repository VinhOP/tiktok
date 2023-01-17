import classNames from "classnames/bind";
import styles from "./Spinner.module.scss";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function Spinner({ className }) {
  const classes = cx("spinner-icon", {
    [className]: className,
  });
  return (
    <div className="wrapper">
      <FontAwesomeIcon icon={faSpinner} className={classes} />
    </div>
  );
}

export default Spinner;
