// krejzibot
// by skorupa (c)

// onload

function onloadDo(){
   a = document.getElementById("usermessage");
   update = document.getElementById("aktualizacja");
   if(!update.innerHTML) update.innerHTML = document.lastModified;
}

// specjalne funkcje

var specialFunction = {};

specialFunction.ILE = function(){
   addtochat("krejzi",Math.floor(Math.random()*100));
}

specialFunction.XD = function(){
   addtochat("krejzi","XD");
   setTimeout(function(){addtochat("dziwak","XDDDDDD");},2000);
}

// bazy danych 
  // klucze

var klucze = [
   ["ILE"],                                                   // 0
   ["CZESC","HEJ","SIEMA","ELO"],                             // 1
   ["GDZIE"],                                                 // 2
   ["CO TAM","U CIEBIE","CO SLYCHAC"],                        // 3                               
   ["POSIADAM","DOSTALEM","ZDOBYLEM"],                        // 4
   ["CZY","MASZ","?"],                                        // 5                        
   ["SPOKO","SPK","SPOCZKO"],                                 // 6
   ["IDIOT","DEBIL","GUNW"],                                  // 7
   ["ZLY","SMUTNY",":(",":<",":-(","ZLA","SMUTNA"],           // 8
   ["SZCZESLIWY",":)",":D","RADOSNY","SZCZESLIWA","RADOSNA"], // 9
   ["XD"]                                                     // 10
];

  // odpowiedzi

var odpowiedzi = [
   [
      specialFunction.ILE
   ], // 0
   [
     "Cześć!",
     "Siema!",
     "Hej!",
     "Cześć! Co u ciebie?",
     "Siema! Co tam?"
   ], // 1
   [
     "Skąd mam to wiedzieć?",
     "Sprawdź w swoim pokoju.",
     "Sprawdź w kuchni.",
     "Sprawdź na podwórku.",
     "Nie wiem :(",
     "Może gdzieś zostawiłeś?",
     "Zobacz w <a href='http://google.com' target='_blank'>Google</a>."
   ], // 2
   [
     "Nic :P",
     "Nic ciekawego... a u Ciebie?",
     "A dobrze, pogoda taka ok XD",
     "Źle, jestem wkurzony!!!",
     "Gram w Pac-Mana :v",
     "Jem :q",
     "Jestem zły, bo nikt dzisiaj ze mną nie gadał >:("
   ], // 3
   [
     "Ty farciarzu! :D",
     "Eh, szkoda. :(",
     "No to masz problem",
     "A ja nigdy czegoś nie dostałem. :<",
     "Brawo!",
     "Fajnie :)"
   ], // 4
   [
     "Tak :)",
     "Nie :/",
     "Nie wiem :@",
     "Nie znam się na tym!!!",
     "Trudno powiedzieć.",
     "Nie wiem, boli mnie dysk twardy...",
     "Zostaw mnie w spokoju!!",
     "No tak trochę..."
   ], // 5
   [
     ":)",
     ":(",
     ":P"
   ], // 6
   [
     "Fajnie się przedstawiasz. :)",
     "... z ciebie jest!",
     "Masz wybitny język!",
     "Idiota."
   ], // 7
   [
     "Przykro mi :(",
     "Przecież jest taki fajny dzień!",
     "Szkoda...",
     "Wyluzuj :)",
     "DOBRZE CI TAK!!"
   ], // 8
   [
     "Gratuluję!",
     "Piątka!",
     "Zazdroszczę :@",
     "Fajnie!",
     "Dzięki! :)",
     "No a mi nigdy nic nie dadzą. >:("
   ], // 9
   [
     specialFunction.XD,
     "XDDDDDDD",
     "looool XD",
     "SPOKO XD"
   ], // 10
];

   // odpowiedzi na wszystko
   
var alternatives = [
   ":(",
   "Zarąbiście :D",
   "No można tak powiedzieć :@",
   ":O",
   "Fajnie :P",
   "Aha.",
   "No, dawaj dalej...",
   "Nudzę się...",
   "Trudno powiedzieć.",
   "Spoko!",
   "Powoli zaczynasz mnie wkurzać...",
   "eeeeeeeee"
];

// gdy użytkownik wciśnie enter lub kliknie "wyślij"

var l = klucze.length; // ile jest kluczy

function send(){
  var v = a.value;
  v = v.toUpperCase();
  v = v.replace(/ŁAM/g,"ŁEM");
  v = v.replacePolishLetters();
  v = " "+v+" ";
  
  if(v.indexOf("?")!=-1){
   console.log("znaleziono '?'");
   while(occurrences(v,"?") != occurrences(v," ? ")){
      console.log("robię ?");
      v=v.replace("?"," ? ");
      console.log("? -> "+v);
   }
  }
  
  console.log(v);
  
  wykrycie=false;
  
  // komendy
  if(v[1]==="["&&v[v.length-2]==="]") cmd(a.value);
  // wykrywanie
  else {
     // sekwencja fraz
     for(q=0;q<l;q++){
        // sprawdzane słowo
        for(w=0;w<klucze[q].length;w++){
           if(v.indexOf(" "+klucze[q][w]+" ") != -1 && !wykrycie){
              // klucze[q][w] to zauważona fraza
              
              var randomOdp = randomize(odpowiedzi[q].length);
              // jeżeli odpowiedź to funkcja
              if(typeof odpowiedzi[q][randomOdp]=="function"){
                 odpowiedzi[q][randomOdp]();
                 wykrycie=true;
                 break;
              } else { // jeżeli odpowiedź to tekst
                 addtochat("krejzi",odpowiedzi[q][randomOdp]);
                 wykrycie=true;
                 break;
              }
           }
        }
     }
     // domyślnie, gdy nie znaleziono
     if(!wykrycie){
        console.log("nie wykryto");
        var randomOdp=randomize(alternatives.length);
        addtochat("krejzi",alternatives[randomOdp]);
     }
  } 
}

// komendy

function cmd(v){ 
  if(v.indexOf("[img ")!=-1){
    v=v.replace("[img ","");
    v=v.replace("]","");
    
    addtochat("krejzi","<br><img src='"+v+"'>");
  }
}

// funkcja do losowania liczby z limitem

function randomize(limit){
  return Math.floor(Math.random() * limit);
}

// funkcja do sprawdzania entera

function checkENTER(event){
  if(event.keyCode===13){
    addtochat("Ja",a.value);
  }
}

// wypisywanie na ekran

function addtochat(kto,tresc){
   var msg = "<b>"+kto+"</b>: "+tresc+"<br>";
   document.getElementById("chat").innerHTML += msg;
   if(kto=="Ja"){
     send();
     a.value="";
   }
}

// czyszczenie okna

function czysc(){
  document.getElementById("chat").innerHTML = "<b>krejzi</b>: Zacznij rozmowę! <br>";
}

// z http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string by Vitim.us
function occurrences(string, subString, allowOverlapping){

    string+=""; subString+="";
    if(subString.length<=0) return string.length+1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}