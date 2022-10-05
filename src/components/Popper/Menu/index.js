import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";

const cx = classNames.bind(styles);
function Menu({ children }) {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-item")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4> Menu Item </h4>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
