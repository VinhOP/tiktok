import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

function Button({
  children,
  onClick,
  to,
  a,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  leftIcon,
}) {
  const cx = classNames.bind(styles);
  let Comp = "button";
  const props = {
    onClick,
  };

  //handle type của props truyền vào
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = a;
  }

  if (disabled) {
    delete props.onClick;
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}> {leftIcon} </span>}
      <span className={cx("title")}> {children} </span>
    </Comp>
  );
}

export default Button;
