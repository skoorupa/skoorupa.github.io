MATMASTER.random = function(){
MATMASTER.quest = Math.floor((Math.random()*10)+1);
return MATMASTER.quest;
};

MATMASTER.cookie = MATMASTER.cook('punktytro');
MATMASTER.points = MATMASTER.cookie;
MATMASTER.suma = MATMASTER.cook('sumatro');
MATMASTER.all = MATMASTER.suma;

MATMASTER.engine = function(){

MATMASTER.questFirst = MATMASTER.random();
MATMASTER.questSecond = MATMASTER.random();
MATMASTER.questThird = MATMASTER.random();
MATMASTER.solve = MATMASTER.questFirst*MATMASTER.questSecond/2*MATMASTER.questThird;

document.getElementsByTagName('b')[0].innerText = MATMASTER.questFirst;
document.getElementsByTagName('b')[1].innerText = MATMASTER.questSecond;
document.getElementsByTagName('b')[2].innerText = MATMASTER.questThird;
document.getElementsByTagName('b')[3].innerText = MATMASTER.cookie;
document.getElementsByTagName('b')[4].innerText = MATMASTER.suma;
document.getElementsByTagName('input')[0].value = "";
document.getElementsByTagName('input')[0].select();

MATMASTER.noangry = String(MATMASTER.solve)
if(MATMASTER.noangry.length>4){
MATMASTER.engine();
} else if(MATMASTER.solve>40){
MATMASTER.engine();
}

};

MATMASTER.name = ["punktyobj","sumaobj",3,4];