// silniczek skracacza
// plz nie kopiuj :/
// by skorupa

function ID(id){
   return document.getElementById(id);
}

function enterdetect(event){
   if(event.keyCode===13){
      szuk();
   }
}

// skrótowce ID:
path = window.location.pathname;

window.onload=function(){
   if(path=="/" || path=="/F:/Documents%20and%20Settings/beata/projektyStronkiSkorupy/zaxad23.github.io/index.html"){
      fraza = document.querySelector("#fraza");
   } else {
      fraza = path.substring(1,path.length);
      szuk();
   }
   var wyniki = ID("wyniki");
   // frazy,nazwy,linki
}
    
var klucze = [
   "MATMASTER MATEMATYKA MATGENIUSZ GENIUSZ MASTER",
   "GDS GENERATOR DZIWNYCH SLOW",
   "KREJZIBOT BOT ROBOT KREJZI",
   "FOTKI WEBCAM+ + PLUS WEBCAMPLUS WEBCAM",
   "GANDALF STYLE GS",
   "POLE TROJKATA MATMASTER",
   "POLE TRAPEZU MATMASTER",
   "GENERATOR GANDALFA STYLE GSGEN",
   "GANDALF STYLE HISTORIA GS",
   "MATMASTER DZIALANIA",
   "HOTEL 13 DRAJCEN DREIZEHN H13",
   "FAQ PYTANIA I ODPOWIEDZI STRONKI SKORUPY SKORUPA",
   "PIANO PIANO5 5 PIANINO PIANINKO MUZYKA",
   "MATGENIUSZ MATMASTER MATEMATYKA GENIUSZ MASTER",
   "FOTKI KAMERA CAMERA ZDJECIA FOTKI!",
   "GS NA YT YOUTUBE GANDALF STYLE NA YOUTUBE ODCINKI"
];

var nazwy = [
   "MATMASTER - Strona Główna",
   "Generator Dziwnych Słów",
   "krejzibot",
   "webcam+",
   "Katalog z Gandalfem",
   "MATMASTER - Pole trójkąta",
   "MATMASTER - Pole trapezu",
   "Generator Gandalfa",
   "Historia Gandalfa",
   "MATMASTER - Działania",
   "titelsong h13 (otwórz w nowej karcie)",
   "FAQ - Pytania i odpowiedzi",
   "piano5 (pianino)",
   "MATGENIUSZ",
   "Fotki!",
   "GS na YT - spis odcinków"
];
   
var linki = [
   "MATMASTER",
   "gds.html",
   "krejzibot",
   "webcamplus",
   "gs",
   "MATMASTER/poletro.html",
   "MATMASTER/poletr.html",
   "gs/generator",
   "gs/wiecejogs.html",
   "MATMASTER/matmaster.html",
   "https://www.youtube.com/watch?v=Gm95Rg3R6Iw",
   "faq.html",
   "piano5",
   "MATGENIUSZ",
   "fotki",
   "gs/yt"
];

// zmienna z długościami
var l = {};

// silniczek

function szuk(){
   tempwyniki = ""; // wyniki w zmiennej
   
   ileznam = 0; // ile wyników
   l.klucze = klucze.length-1; // długość klucze
   
   if(!fraza.value==false||fraza.value==""){
      frz = fraza.value; // wartość pola tekstowego
      frz=frz.toUpperCase(); // caps lock
   } else {
      frz=fraza.toUpperCase(); // caps lock
   }
   
   frz=frz.replacePolishLetters(); // zamiana polskich ogonków
   
   // szukanie
   
   for(var i=0;i<=l.klucze;i++){
      var tmp=klucze[i];
      tmp=tmp.replacePolishLetters();
      if(frz.indexOf(tmp) != -1 || tmp.indexOf(frz) != -1){
         // mam wynik! co teraz?
         ileznam++; // mówię, że mam o jeden więcej wynik
         tempwyniki+="<b>"+nazwy[i]+"</b> -> <a href='"+linki[i]+"'>LINK</a><br>"; // piszę wynik
      }
   }
   // piszę formułkę...
   
   if(path=="/"|| path == "/F:/Documents%20and%20Settings/beata/projektyStronkiSkorupy/zaxad23.github.io/index.html"){
      trescwyniki = "Znalazłem <b>"+ileznam+"</b> wyników: <br>"+tempwyniki+"<br> Folder \""+ID("fraza").value+"\" -> <a href='"+ID("fraza").value+"'>LINK</a> PLIK \""+ID("fraza").value+"\" -> <a href='"+ID("fraza").value+".html'>LINK</a>";
   } else {
      if(ileznam!=0){
         trescwyniki = "Może chodziło ci o: <br>"+tempwyniki;
      }
   }
   ID("wyniki").innerHTML = trescwyniki; //... i wstawiam do diva wyniki
}
