var wyszukiwarka = document.getElementById('szukaj');
var wyniki = document.getElementById('wyniki');
var rozwin = false;

function search(w) {
	czyznaleziono = false;
	if(wyszukiwarka.value!=""||w=="wszystko"){
		wyniki.innerHTML="<hr>";
		s=wyszukiwarka.value.replacePolishLetters().toUpperCase();
		if(w=="wszystko")s="";

		for (var i = 0; i < klucze.length; i++) {
			if(klucze[i].indexOf(s)!=-1){
				czyznaleziono=true;
				// no i tu się dzieje prawdziwa zabawa

				/*
				<div class="wynik">
					<h1 class="tytul"><a href="#">Testowa strona</a></h1>
					<div class="opis">Testowy opis</div>
				</div>
				*/
				var wynik = document.createElement("div");
				wynik.setAttribute("class","wynik");

				var tytul = document.createElement("h1");
				tytul.innerHTML="<a href='"+linki[i]+"'>"+nazwy[i]+"</a>";
				tytul.setAttribute("class","tytul");
				wynik.appendChild(tytul);

				var opis = document.createElement("div");
				opis.innerHTML=opisy[i];
				opis.setAttribute("class","opis");
				wynik.appendChild(opis);

				wyniki.appendChild(wynik);
			}
		}

		if(w!="wszystko")rozwin=false;
		if(rozwin&&w=="wszystko"){wyniki.innerHTML=""}
		if(rozwin&&w=="wszystko"){rozwin=false}else rozwin=true;

		if(!czyznaleziono)wyniki.innerHTML="<h3>Ja nic nie wiem.</h3>";
	}
}

function spacja(event){
	if(event.keyCode===13)search("nic");
}
