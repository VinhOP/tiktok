import {
  faApple,
  faFacebook,
  faGoogle,
  faInstagram,
  faLine,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBackward,
  faChevronLeft,
  faClose,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";
import { useModal } from "../../Contexts/ModalContext";
import ModalItem from "./ModalItem";

const cx = classNames.bind(styles);
function Modal() {
  const [modal, setModal] = useState("login");
  const context = useModal();

  useEffect(() => {
    if (context.showModal) document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "overlay";
    };
  }, [context.showModal]);

  const MODAL_ITEMS = {
    login: {
      headerTitle: "Đăng nhập vào tiktok",
      data: [
        {
          icon: <FontAwesomeIcon icon={faQrcode} />,
          title: "Sử dụng mã QR",
        },
        {
          icon: <FontAwesomeIcon icon={faUser} />,
          title: "Số điện thoại / Email / TikTok ID",
          children: {
            headerTitle: "Đăng nhập",
            data: [{}],
          },
        },
        {
          icon: <FontAwesomeIcon icon={faFacebook} />,
          title: "Tiếp tục với Facebook",
        },
        {
          icon: <FontAwesomeIcon icon={faGoogle} />,
          title: "Tiếp tục với Google",
        },
        {
          icon: <FontAwesomeIcon icon={faTwitter} />,
          title: "Tiếp tục với Twitter",
        },
        {
          icon: <FontAwesomeIcon icon={faLine} />,
          title: "Tiếp tục với LINE",
        },
        {
          icon: <FontAwesomeIcon icon={faQrcode} />,
          title: "Tiếp tục với KakaoTalk",
        },
        {
          icon: <FontAwesomeIcon icon={faApple} />,
          title: "Tiếp tục với Apple",
        },
        {
          icon: <FontAwesomeIcon icon={faInstagram} />,
          title: "Tiếp tục với Instagram",
        },
      ],
      footerTitle: "Đăng nhập",
    },
    register: {
      headerTitle: "Đăng ký TikTok",
      data: [
        {
          icon: <FontAwesomeIcon icon={faUser} />,
          title: "Sử dụng số điện thoại hoặc email",
          children: {
            headerTitle: "Đăng ký",
            data: [{}],
          },
        },
        {
          icon: <FontAwesomeIcon icon={faFacebook} />,
          title: "Tiếp tục với Facebook",
        },
        {
          icon: <FontAwesomeIcon icon={faGoogle} />,
          title: "Tiếp tục với Google",
        },
      ],
      footerTitle: "Đăng ký",
    },
  };

  const handleToggleModal = () => {
    modal === "login" ? setModal("register") : setModal("login");
  };

  const [history, setHistory] = useState([MODAL_ITEMS[modal]]);

  useEffect(() => {
    setHistory([MODAL_ITEMS[modal]]);
  }, [modal]);

  const current = history[history.length - 1];

  const handleGoToPreviousMenu = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isChildren = !!item.children;
      return (
        <ModalItem
          data={item}
          key={index}
          loginForm={modal === "login" && history.length > 1}
          registerForm={modal === "register" && history.length > 1}
          onClick={() => {
            if (isChildren) setHistory((prev) => [...prev, item.children]);
          }}
        />
      );
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <div className={cx("modal-items")}>
            {history.length > 1 && (
              <button
                className={cx("back-btn")}
                onClick={handleGoToPreviousMenu}
              >
                <span>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
            )}
            <button className={cx("close-btn")} onClick={context.toggleModal}>
              <span>
                <FontAwesomeIcon icon={faClose} />
              </span>
            </button>
            <h1 className={cx("header-title")}>{current.headerTitle}</h1>
            {renderItem()}
          </div>
          <footer className={cx("footer")}>
            Bạn không có tài khoản?
            <button
              className={cx("toggle-modal-btn")}
              onClick={handleToggleModal}
            >
              {modal === "login" ? "Đăng ký" : "Đăng nhập"}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
