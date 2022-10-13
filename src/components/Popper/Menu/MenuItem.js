import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Button from "../../Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    seperate: data.seperate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default MenuItem;
