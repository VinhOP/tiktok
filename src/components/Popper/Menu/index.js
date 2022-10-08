import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
function Menu({ children, items }) {
  const [history, setHistory] = useState([{ data: items }]); // tạo 1 mảng chứa data từ items

  const current = history[history.length - 1]; // lấy Object cuối cùng từ mảng history ra

  const renderItems = () => {
    //render từ Object current ra
    return current.data.map((item, index) => {
      const isChildren = !!item.children; // check key children có tồn tại trong object hiện tại hay ko
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            isChildren && setHistory((prev) => [...prev, item.children]); //gán object mới vào cuổi mảng history
          }}
        />
      );
    });
  };

  return (
    <Tippy
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
      interactive
      offset={[12, 10]}
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && ( // check nếu click vào Ngôn Ngữ sẽ hiện header
              <Header
                title="Ngôn ngữ"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
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
