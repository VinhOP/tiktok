import {
  faApple,
  faFacebook,
  faGoogle,
  faInstagram,
  faLine,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faClose, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);
function Modal() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <div className={cx("modal-items")}>
            <button className={cx("close-btn")}>
              <span>
                <FontAwesomeIcon icon={faClose} />
              </span>
            </button>
            <h1 className={cx("header-title")}>Đăng nhập vào TikTok</h1>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faQrcode} />
              </i>
              <h4 className={cx("title")}>Sử dụng mã QR</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <h4 className={cx("title")}>Số điện thoại / Email / TikTok ID</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với Facebook</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faGoogle} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với Google</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với Twitter</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faLine} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với LINE</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faLine} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với KakaoTalk</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faApple} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với Apple</h4>
            </button>
            <button className={cx("modal-item")}>
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
              <h4 className={cx("title")}>Tiếp tục với Instagram</h4>
            </button>
          </div>
          <footer className={cx("footer")}>
            Bạn không có tài khoản? <a href="/"> Đăng ký</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
