import classNames from "classnames/bind";
import styles from "./DatePicker.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../../Popper";
import { useEffect, useRef, useState } from "react";

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
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const renderDates = (attrs) => {
    return (
      <div {...attrs}>
        <PopperWrapper>
          <div className={cx("dropdown-wrapper")}>
            {dates.map((date, i) => {
              return (
                <h4
                  key={i}
                  className={cx("dropdown-item")}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </h4>
              );
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
            {months.map((month, i) => {
              return (
                <h4
                  key={i}
                  className={cx("dropdown-item")}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </h4>
              );
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
            {years.map((year, i) => {
              return (
                <h4
                  key={i}
                  className={cx("dropdown-item")}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </h4>
              );
            })}
          </div>
        </PopperWrapper>
      </div>
    );
  };

  const [buttonData, setButtonData] = useState([
    {
      title: `Tháng`,
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

  useEffect(() => {
    if (!selectedMonth) return;
    setButtonData([...buttonData], (buttonData[0].title = selectedMonth));
  }, [selectedMonth]);

  useEffect(() => {
    setButtonData(
      [...buttonData],
      (buttonData[1].title = `Ngày ${selectedDate}`)
    );
  }, [selectedDate]);

  useEffect(() => {
    setButtonData(
      [...buttonData],
      (buttonData[2].title = `Năm ${selectedYear}`)
    );
  }, [selectedYear]);

  return (
    <div className={cx("wrapper")}>
      <label className={cx("label")}> Ngày sinh của bạn là ngày nào? </label>
      <div className={cx("birthday-form")}>
        {buttonData.map((item, i) => {
          return (
            <Tippy
              key={i}
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
                <span
                  className={cx("title", {
                    selected: item.title.length > 5,
                  })}
                >
                  {item.title}
                </span>
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
