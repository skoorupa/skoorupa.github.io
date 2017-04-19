var MATMASTER = {};

/* nie mój skrypt */

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}

/* koniec nie mojego skryptu */

MATMASTER.enter = function(eve){
if(eve.keyCode == 13){
MATMASTER.us()
} else if(document.getElementsByTagName('input')[0].value == "HOTEL13" || document.getElementsByTagName('input')[0].value == "HOTEL 13" || document.getElementsByTagName('input')[0].value == "hotel 13"){
window.open("http://youtu.be/Gm95Rg3R6Iw?t=1m13s")
}
}

MATMASTER.cook = function(asd){
if(getCookie(asd)==""){
return 0;
} else {
return getCookie(asd);
}
}

MATMASTER.check = function(){
MATMASTER.si = String(document.getElementsByTagName('input')[0].value);
MATMASTER.si = MATMASTER.si.replace(",",".")
MATMASTER.si = Number(MATMASTER.si);
if(MATMASTER.solve==MATMASTER.si){
return true;
} else {
return false;
}
};

MATMASTER.us = function(){
if(MATMASTER.check()){
alert("Brawo! :)");
MATMASTER.engine();
MATMASTER.points++
MATMASTER.all++;
MATMASTER.cookie = MATMASTER.points;
MATMASTER.suma = MATMASTER.all;
document.getElementsByTagName('b')[MATMASTER.name[2]].innerText = MATMASTER.points;
document.getElementsByTagName('b')[MATMASTER.name[3]].innerText = MATMASTER.all;
if(getCookie(MATMASTER.name[0]) == ""){
document.cookie = MATMASTER.name[0]+"=1";
} else {
MATMASTER.cookie = Number(getCookie(MATMASTER.name[0]));
document.cookie = MATMASTER.name[0]+"="+(MATMASTER.cookie+1);
}
if(getCookie(MATMASTER.name[1]) == ""){
document.cookie = MATMASTER.name[1]+"=1";
} else {
MATMASTER.suma = Number(getCookie(MATMASTER.name[1]));
document.cookie = MATMASTER.name[1]+"="+(MATMASTER.suma+1);
}
} else {
alert("Pudło! Poprawna odpowiedź to: "+MATMASTER.solve);
MATMASTER.engine();
document.getElementsByTagName('b')[MATMASTER.name[2]].innerText = MATMASTER.points;
MATMASTER.all++;
MATMASTER.cookie = MATMASTER.points;
MATMASTER.suma = MATMASTER.all;
document.getElementsByTagName('b')[MATMASTER.name[3]].innerText = MATMASTER.all;
if(getCookie(MATMASTER.name[1]) == ""){
document.cookie = MATMASTER.name[1]+"=1";
} else {
MATMASTER.suma = Number(getCookie(MATMASTER.name[1]));
document.cookie = MATMASTER.name[1]+"="+(MATMASTER.suma+1);
}
}
};

setInterval(function(){
document.getElementsByTagName('b')[MATMASTER.name[2]].innerText = MATMASTER.points;
document.getElementsByTagName('b')[MATMASTER.name[3]].innerText = MATMASTER.all;
},1000);
