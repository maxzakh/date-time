var time = document.getElementsByClassName("time");
var date = new Date();

function currentTime() {
    time[0].innerHTML = date;
}

document.addEventListener("DOMContentLoaded", function() {
    currentTime()
});