function random(razy,doilu){
  rndtmp = Math.floor(Math.random()*razy);
  if(rndtmp>=doilu){
    return random(razy,doilu);
  } else {
    return rndtmp;
  }
}

MATMASTER.random = function(){
   MATMASTER.quest = random(10,);
   return MATMASTER.quest;
};

MATMASTER.quests = ["+","-"];

MATMASTER.dbQuest = random(10,2);

function random(razy,doilu){
  rndtmp = Math.floor(Math.random()*razy);
  if(rndtmp>=doilu){
    return random(razy,doilu);
  } else {
    return rndtmp;
  }
}

MATMASTER.doQuest = function(){
   MATMASTER.toDo = MATMASTER.quests[MATMASTER.dbQuest];
   
   switch(MATMASTER.toDo){
   case "+":
   return MATMASTER.questFirst+MATMASTER.questSecond
   break;
   case "-":
   if(MATMASTER.questFirst<MATMASTER.questSecond){
   MATMASTER.toDo = "+"
   return MATMASTER.questFirst+MATMASTER.questSecond
   } else {
   return MATMASTER.questFirst-MATMASTER.questSecond
   }
   break;
   default: console.error("MATMASTER nie może wylosować działania");
   }
};

MATMASTER.cookie = MATMASTER.cook('punkty');
MATMASTER.points = MATMASTER.cookie;
MATMASTER.suma = MATMASTER.cook('suma');
MATMASTER.all = MATMASTER.suma;

// MATMASTER.count = 0;

MATMASTER.engine = function(){

MATMASTER.questFirst = MATMASTER.random();
MATMASTER.questSecond = MATMASTER.random();
MATMASTER.solve = MATMASTER.doQuest();

document.getElementsByTagName('b')[1].innerText = MATMASTER.toDo;
document.getElementsByTagName('b')[0].innerText = MATMASTER.questFirst;
document.getElementsByTagName('b')[2].innerText = MATMASTER.questSecond;
document.getElementsByTagName('b')[3].innerText = MATMASTER.cookie;
document.getElementsByTagName('b')[4].innerText = MATMASTER.suma;
document.getElementsByTagName('input')[0].value = "";
document.getElementsByTagName('input')[0].select();
// document.getElementById('ulamki').onclick="MATMASTER.engine()"
// }

/* if(MATMASTER.count=1 || MATMASTER.count>1){
MATMASTER.all++;
MATMASTER.l()
}
*/

MATMASTER.noangry = String(MATMASTER.solve)
if(MATMASTER.noangry.length>4){
MATMASTER.engine()
} else if(MATMASTER.solve>100){
MATMASTER.engine()
}

};