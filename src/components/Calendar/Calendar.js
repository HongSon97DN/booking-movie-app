import moment from "moment";
import { useEffect, useState } from "react";
export const Calendar = () => {
  let currentDate = moment(new Date()).format("DDMMYY");

  const [release, setReleases] = useState(currentDate);
  const [activeDate, setActiveDate] = useState({
    date: 0,
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      return setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [show]);
  const arr = [];
  const renderCalender = (condition) => {
    var date = new Date();
    let times;
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        times = moment(date.setDate(date.getDate()));
      } else {
        times = moment(date.setDate(date.getDate() + 1));
      }

      arr.push(times);
    }
    const month = moment(date).format("MMMM ");
    const year = moment(date).format(" YYYY");
    return (
      <>
        <div
          className="cinema_text"
          style={{ fontSize: "25px", borderBottom: "2px solid #fff" }}
        >
          <span className="cinema_text-month cinema_text">{month}</span>
          <span className="cinema_text-year">{year}</span>
        </div>
        <div className="row pl-2 pr-2">
          {arr.map((time, i) => {
            return (
              <div key={i} className={"col cinema_release"}>
                <label
                  htmlFor={time.format("DDMMYY")}
                  className={
                    activeDate.date === i
                      ? "col cinema_release-label active"
                      : "col cinema_release-label"
                  }
                  onClick={() => {
                    setActiveDate({
                      date: i,
                    });
                    setShow(true);
                  }}
                >
                  {time.isoWeekday() === 1 ? (
                    <p className="cinema_release-day">CN</p>
                  ) : (
                    <p className="cinema_release-day">
                      Thứ {time.isoWeekday()}
                    </p>
                  )}
                  <span className="cinema_release-date mt-1">
                    {time.date()}
                  </span>
                  <input
                    onChange={(e) => {
                      setReleases(e.target.value);
                    }}
                    type="radio"
                    value={time.format("DDMMYY")}
                    id={time.format("DDMMYY")}
                    name="date"
                    className="cinema_release-input"
                  />
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return { renderCalender, release, show, setShow };
};
