import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
    </div>
  );
}

export default Home;
