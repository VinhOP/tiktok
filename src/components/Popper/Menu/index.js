import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
function Menu({ children, items }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem data={item} key={index} />;
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            <Header title="Ngôn ngữ" />
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
