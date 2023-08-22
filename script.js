
let horario;
let ano;
let year;
let month;
let day;
let hour;
let minutes;
let seconds;
let am_pm;
let frase_da_hora;
const mes =["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
//#region 







function date(){
let date = new Date();
month=date.getMonth();
year=date.getFullYear();
day=date.getDay();
hour=date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();

if (seconds>-1&&seconds<10){seconds="0"+seconds}
if (minutes>-1&&minutes<10){minutes="0"+minutes}
if (hour>-1&&hour<10){hour+="0"}

if (hour < 12 ){am_pm="AM"}else{am_pm="PM"; hour-=12}


horario=hour+":"+minutes+":"+seconds+am_pm;
ano="Hoje é dia "+day+ " do mes de " +mes[month]+" e do Ano "+year; 
document.getElementById("Horario").innerText = horario;
document.getElementById("Data").innerText = ano;
}
setInterval(date,1000)