import classNames from "classnames/bind";
import styles from "./DatePicker.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../../Popper";
import { useState } from "react";

const cx = classNames.bind(styles);

const months = [];
const dates = [];
const years = [];

for (let i = 1; i < 13; i++) {
  months.push(`Tháng ${i}`);
}
for (let i = 1; i < 32; i++) {
  dates.push(i);
}
for (let i = 2022; i > 1990; i--) {
  years.push(i);
}

function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState(`Tháng`);
  const [selectedDate, setSelectedDate] = useState(`Ngày`);
  const [selectedYear, setSelectedYear] = useState(`Năm`);

  const renderDates = (attrs) => {
    return (
      <div {...attrs}>
        <PopperWrapper>
          <div className={cx("dropdown-wrapper")}>
            {dates.map((date) => {
              return <h4 className={cx("dropdown-item")}> {date} </h4>;
            })}
          </div>
        </PopperWrapper>
      </div>
    );
  };

  const renderMonths = (attrs) => {
    return (
      <div {...attrs}>
        <PopperWrapper>
          <div className={cx("dropdown-wrapper")}>
            {months.map((month) => {
              return <h4 className={cx("dropdown-item")}> {month}</h4>;
            })}
          </div>
        </PopperWrapper>
      </div>
    );
  };

  const renderYears = (attrs) => {
    return (
      <div {...attrs}>
        <PopperWrapper>
          <div className={cx("dropdown-wrapper")}>
            {years.map((year) => {
              return <h4 className={cx("dropdown-item")}> {year}</h4>;
            })}
          </div>
        </PopperWrapper>
      </div>
    );
  };

  const [buttonData, setButtonData] = useState([
    {
      title: "Tháng",
      icon: <FontAwesomeIcon icon={faCaretDown} />,
      renderTippy: renderMonths,
    },
    {
      title: "Ngày",
      icon: <FontAwesomeIcon icon={faCaretDown} />,
      renderTippy: renderDates,
    },
    {
      title: "Năm",
      icon: <FontAwesomeIcon icon={faCaretDown} />,
      renderTippy: renderYears,
    },
  ]);
  return (
    <div className={cx("wrapper")}>
      <label className={cx("label")}> Ngày sinh của bạn là ngày nào? </label>
      <div className={cx("birthday-form")}>
        {buttonData.map((item, i) => {
          return (
            <Tippy
              interactive
              offset={[0, 5]}
              placement={"bottom"}
              trigger={"click"}
              onShow={() =>
                setButtonData(
                  [...buttonData],
                  (buttonData[i].icon = <FontAwesomeIcon icon={faCaretUp} />)
                )
              }
              onHide={() =>
                setButtonData(
                  [...buttonData],
                  (buttonData[i].icon = <FontAwesomeIcon icon={faCaretDown} />)
                )
              }
              render={item.renderTippy}
            >
              <button className={cx("dropdown-btn")}>
                <span className={cx("title")}> {item.title} </span>
                <i className={cx("dropdown-icon")}>{item.icon}</i>
              </button>
            </Tippy>
          );
        })}
      </div>
      <h4 className={cx("description")}>
        Ngày sinh của bạn sẽ không được hiển thị công khai.
      </h4>
    </div>
  );
}

export default DatePicker;
