import moment from "moment";

const TOTAL_DATE_CALENDER = 8;
const CURRENT_DATE = "Jan 1, 2019 00:00:00";
const SHOWTIME_FORMAT = "hh:mm";
const MOMENT_FORMAT_DATE = "DD-MM-yyyy";
const MOMENT_FORMAT_DATE_TIME = "DD-MM-yyyy hh:mm";
const MOMENT_DAY_FORMAT = "dddd";
const MOMENT_ADD_HOURS = "hours";

export const calender = () => {
    let calenderList = [];
    let currentDate = new Date(CURRENT_DATE);
    for (let i = 0; i < TOTAL_DATE_CALENDER - 1; i++) {
        calenderList.push({
            fullDate: formatDate(currentDate),
            date: currentDate.getDate(),
            day: moment(currentDate).format(MOMENT_DAY_FORMAT),
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return calenderList;
};

/**
 * Format-date: yyyy-mm-dd
 * @param {date} date
 */
const formatDate = (date) => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

/**
 * get Time from ISODateTIme
 */
export const getTimeISO = (strDate) => {
    return moment(strDate).format(SHOWTIME_FORMAT);
};

export const getTimeDuration = (strDate) => {
    return moment(strDate).add(1.5, MOMENT_ADD_HOURS).format(SHOWTIME_FORMAT);
};

export const getDateShowTime = (strDate) => {
    return moment(strDate).format(MOMENT_FORMAT_DATE);
};

export const getDateTimeFormat = (strDate) => { 
    return moment(strDate).format(MOMENT_FORMAT_DATE_TIME);
 }