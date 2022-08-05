var sec=0;
var min=0;
setInterval(startTime, 1000);

function startTime() {
    function myTimer() {
        sec++;
        sec=checkTime(sec)
        if (sec==60){
            min++
            sec=0;
        }
        document.getElementById("time").innerHTML = min+":"+sec;
    }
    myTimer()

    f()
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function f() {
    var color = document.getElementById('color').value;
    var c = document.getElementById("colo").style.backgroundColor = color;
    var colortxt = document.getElementById('color2').value;
     document.getElementById("time").style.color = colortxt;

}


