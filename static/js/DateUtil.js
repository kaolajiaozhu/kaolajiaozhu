// 计算日期字符串几天之后的日期字符串
function addDate(dateStr, days) {
    let d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    let m = d.getMonth() + 1;
    return d.getFullYear() + '-' + m + '-' + d.getDate();
}

// 计算日期字符串，增加或减少几天之后的日期字符串
function dateOperator(dateStr, days, operator) {
    dateStr = dateStr.replace(/-/g, "/"); //更改日期格式
    let nd = new Date(dateStr);
    nd = nd.valueOf();
    if (operator == "+") {
        nd = nd + days * 24 * 60 * 60 * 1000;
    } else if (operator == "-") {
        nd = nd - days * 24 * 60 * 60 * 1000;
    } else {
        return false;
    }

    nd = new Date(nd);
    let y = nd.getFullYear();
    let m = nd.getMonth() + 1;
    let d = nd.getDate();
    if (m <= 9) m = "0" + m;
    if (d <= 9) d = "0" + d;
    let cdate = y + "-" + m + "-" + d;
    return cdate;
}

export {addDate, dateOperator}
