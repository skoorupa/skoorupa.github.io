MATMASTER.random = function(){
MATMASTER.quest = Math.floor((Math.random()*10)+1);
return MATMASTER.quest;
};

MATMASTER.cookie = MATMASTER.cook('punktytr');
MATMASTER.points = MATMASTER.cookie;
MATMASTER.suma = MATMASTER.cook('sumatr');
MATMASTER.all = MATMASTER.suma;

MATMASTER.engine = function(){

MATMASTER.questFirst = MATMASTER.random();
MATMASTER.questSecond = MATMASTER.random();
MATMASTER.questThree = MATMASTER.random();
MATMASTER.solve = (MATMASTER.questFirst+MATMASTER.questThree)*MATMASTER.questSecond/2;

document.getElementsByTagName('b')[1].innerText = MATMASTER.questThree;
document.getElementsByTagName('b')[0].innerText = MATMASTER.questFirst;
document.getElementsByTagName('b')[2].innerText = MATMASTER.questSecond;
document.getElementsByTagName('b')[3].innerText = MATMASTER.cookie;
document.getElementsByTagName('b')[4].innerText = MATMASTER.suma;
document.getElementsByTagName('input')[0].value = "";
document.getElementsByTagName('input')[0].select();

MATMASTER.noangry = String(MATMASTER.solve)
if(MATMASTER.noangry.length>4){
MATMASTER.engine()
} else if(MATMASTER.solve>30){
MATMASTER.engine()
}

};

MATMASTER.name = ["punktytr","sumatr",3,4];