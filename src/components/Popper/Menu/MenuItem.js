import classNames from "classnames/bind";
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

export default MenuItem;
