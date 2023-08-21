
let horario;
let hour;
let minutes;
let seconds;
let am_pm;
let frase_da_hora;
//#region 







function date(){
let date = new Date();
day=date.getDay();
hour=date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();

if (seconds>-1&&seconds<10){seconds="0"+seconds}
if (minutes>-1&&minutes<10){minutes="0"+minutes}

if (hour < 12 ){am_pm="AM"}else{am_pm="PM"; hour-=12}


horario=+hour+":"+minutes+":"+seconds+am_pm;
document.getElementById("Horario").innerText = horario;
}
setInterval(date,1000)