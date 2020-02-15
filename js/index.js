var time = document.getElementsByClassName("time");
var date = new Date();

function currentTime() {
    time[0].innerHTML = date;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

document.addEventListener("DOMContentLoaded", function () {
    currentTime()
});

document.addEventListener("DOMContentLoaded", function () {
    startTime()
});