import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { PropTypes } from "prop-types";
import Image from "../Image";
import Button from "../Button";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import { Fragment } from "react";
import AccountPreview from "./AccountPreview";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function AccountItem({ className, data, isSugessted = false }) {
  const renderPreview = (attrs) => (
    <div className={cx("preview")} tabIndex={-1} {...attrs}>
      <PopperWrapper>
        <AccountPreview data={data} />
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive
        delay={[600, 0]}
        placement={"bottom"}
        offset={[-20, 0]}
        render={isSugessted ? () => renderPreview() : () => Fragment}
      >
        <Button to={`/@${data.nickname}`} className={cx("wrapper", className)}>
          <Image className={cx("avatar")} src={data.avatar} alt="avatar" />
          <div className={cx("info")}>
            <p className={cx("name")}>
              <span> {data.nickname} </span>
              {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
            </p>
            <div className={cx("desc")}>
              {`${data.first_name} ${data.last_name}`}
            </div>
          </div>
        </Button>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
