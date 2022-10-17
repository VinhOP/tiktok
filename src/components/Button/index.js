import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      onClick,
      to = false,
      href = false,
      primary = false,
      outline = false,
      small = false,
      large = false,
      disabled = false,
      rounded = false,
      center = false,
      leftIcon,
      rightIcon,
      className,
    },
    ref
  ) => {
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
      Comp = "a";
    }

    if (disabled) {
      delete props.onClick;
    }

    const classes = cx("wrapper", {
      primary,
      outline,
      small,
      large,
      center,
      disabled,
      rounded,
      [className]: className,
    });

    return (
      <Comp ref={ref} className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}> {leftIcon} </span>}
        <span className={cx("title")}> {children} </span>
        {rightIcon && <span className={cx("icon")}> {rightIcon} </span>}
      </Comp>
    );
  }
);

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};
export default Button;
