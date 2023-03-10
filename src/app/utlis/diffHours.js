export default function diffHours(prevTime, nowTime) {
    var date_1 = new Date(prevTime);
    var date_2 = new Date(nowTime);

    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = date_2 - date_1;
    var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

    return diff_in_days;
}