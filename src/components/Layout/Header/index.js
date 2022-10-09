import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import {
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faPaperPlane,
  faCoins,
  faArrowRightFromBracket,
  faGear,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Popper/Menu";
import {
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import Button from "../../Button";
import Image from "../../Image";
import Search from "../../Search";

const cx = classNames.bind(styles);

function Header() {
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: "Tiếng Việt",
      children: {
        title: "Ngôn ngữ",
        data: [
          {
            code: "en",
            title: "English",
          },
          {
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Phản hồi và trợ giúp",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Phím tắt trên bàn phím",
    },
  ];

  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
      to: "/hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faVideoCamera} />,
      title: "LIVE Studio",
      to: "/studio",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Đăng xuất",
      seperate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        {/* search bar */}
        <Search />

        {/* right container */}
        <div className={cx("right-container")}>
          <Button outline center leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn">
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Hộp thư">
                <button className={cx("inbox")}>
                  <FontAwesomeIcon icon={faMessage} />
                  <div className={cx("inbox-number")}>
                    <p>12</p>
                  </div>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary rounded>
                Đăng nhập
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <button>
                <Image
                  className={cx("user-avatar")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665046800&x-signature=GV75X4EsdIvC6ufbXOPWj0MfJKQ%3D"
                  alt="avatar"
                  //fallbackImg="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
                />
              </button>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
