import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  const labels_1 = [
    {
      name: "Giới thiệu",
      url: "https://www.tiktok.com/about?lang=vi-VN",
    },
    {
      name: "Bảng tin",
      url: "https://newsroom.tiktok.com/vi-vn/?lang=vi-VN",
    },
    {
      name: "Liên hệ",
      url: "https://www.tiktok.com/about/contact?lang=vi-VN",
    },
    {
      name: "Sự nghiệp",
      url: "https://careers.tiktok.com/?lang=vi-VN",
    },
    {
      name: "ByteDance",
      url: "https://www.bytedance.com/?lang=vi-VN",
    },
  ];

  const labels_2 = [
    {
      name: "TikTok for Good",
      url: "https://www.tiktok.com/forgood?lang=vi-VN",
    },
    {
      name: "Quảng cáo",
      url: "https://www.tiktok.com/business/en-US?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&lang=vi-VN&refer=tiktok_web&tt4b_lang_redirect=1",
    },
    {
      name: "Developers",
      url: "https://developers.tiktok.com/?lang=vi-VN&refer=tiktok_web",
    },
    {
      name: "Transparency",
      url: "https://www.tiktok.com/transparency/vi-vn/",
    },
    {
      name: "Tiktok Rewards",
      url: "https://www.tiktok.com/tiktok-rewards/eligibility",
    },
    {
      name: "Tiktok Browse",
      url: "https://www.tiktok.com/browse",
    },
    {
      name: "Tiktok Embeds",
      url: "https://www.tiktok.com/embed",
    },
  ];

  const labels_3 = [
    {
      name: "Trợ giúp",
      url: "https://support.tiktok.com/vi",
    },
    {
      name: "An toàn",
      url: "https://www.tiktok.com/safety/vi-vn",
    },
    {
      name: "Điều khoản",
      url: "https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN",
    },
    {
      name: "Quyền riêng tư",
      url: "https://www.tiktok.com/legal/page/row/privacy-policy/vi-VN",
    },
    {
      name: "Creator Portal",
      url: "https://www.tiktok.com/creators/creator-portal/en-us/",
    },
    {
      name: "Hướng dẫn cộng đồng",
      url: "https://www.tiktok.com/community-guidelines?lang=vi-VN",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("link-container")}>
        {labels_1.map((label, index) => {
          return (
            <a
              className={cx("link")}
              href={label.url}
              target="blank"
              key={index}
            >
              {label.name}
            </a>
          );
        })}
      </div>
      <div className={cx("link-container")}>
        {labels_2.map((label, index) => {
          return (
            <a className={cx("link")} href={label.url} key={index}>
              {label.name}
            </a>
          );
        })}
      </div>
      <div className={cx("link-container")}>
        {labels_3.map((label, index) => {
          return (
            <a className={cx("link")} href={label.url} key={index}>
              {label.name}
            </a>
          );
        })}
      </div>
      <label> @2023 Tiktok </label>
    </div>
  );
}

export default Footer;
