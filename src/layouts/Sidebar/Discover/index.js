import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Discover.module.scss";

const cx = classNames.bind(styles);

function Discover() {
  const discoverList = {
    data: {
      tags: [
        {
          id: 1,
          name: "suthatla",
        },
        {
          id: 2,
          name: "mackedoi",
        },
        {
          id: 3,
          name: "sansangthaydoi",
        },
        {
          id: 4,
          name: "7749hieuung",
        },
        {
          id: 5,
          name: "genlife",
        },
      ],
      music: [
        {
          song: "Yêu Đon Phương Là Gì",
          author: "Mee Media & h0n",
        },
        {
          song: "Về Nghe Mẹ Ru",
          author: "NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng",
        },
        {
          song: "Thiên Thần Tình Yêu",
          author: "RICKY STAR",
        },
      ],
    },
  };

  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Khám phá</h4>
      <div className={cx("list-container")}>
        <ul>
          {discoverList.data.tags
            .filter((item, index) => index < 3)
            .map((item) => {
              return <li key={item.id}> {item.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Discover;
