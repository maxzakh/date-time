function main() {
    let time = document.querySelector(".time");
    let times = document.querySelectorAll(".time-container>span");
    let date = new Date();
    
    function currentTime() {
        time.innerHTML = date;
    }
    
    function startTime() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        times[0].innerHTML = h;
        times[1].innerHTML = m;
        times[2].innerHTML = s;
        let t = setTimeout(startTime, 1000);
    }
    
    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
    
    currentTime();
    startTime();
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});