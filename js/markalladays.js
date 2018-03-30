
function getAlldays(startdate, enddate, markday, StartingSrno, EventText, starttime,endtime, color, url) {
    var start = moment(startdate),
        end = moment(enddate), ///'2019-03-29'
        day = getDayNo(markday);
    var result = [];
    var current = start.clone();

    while (current.day(7 + day).isBefore(end)) {
        item = {}
        item["id"] = Number(parseInt(StartingSrno));
        item["working"] = Number(parseInt(1));
        item["name"] = EventText;
        item["startdate"] = current.clone().format('YYYY-MM-DD');
        item["enddate"] = ""; //current.clone().format('YYYY-MM-DD');
        item["starttime"] = starttime;
        item["endtime"] = endtime;
        item["color"] = color;
        item["url"] = url;
        result.push(item);
        StartingSrno += 1;
    }
    return result;
    //console.log(result);///.map(m => m.format('LLLL'))
}

function getDayNo(dayName) {
    var dayNo;
    switch (dayName) {
        case "Sunday":
            dayNo = 0;
            break;
        case "Monday":
            dayNo = 1;
            break;
        case "Tuesday":
            dayNo = 2;
            break;
        case "Wednesday":
            dayNo = 3;
            break;
        case "Thursday":
            dayNo = 4;
            break;
        case "Friday":
            dayNo = 5;
            break;
        case "Saturday":
            dayNo = 6;
            break;
    }
    return dayNo;
}

