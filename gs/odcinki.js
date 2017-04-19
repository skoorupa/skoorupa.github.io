var xhr = new XMLHttpRequest(); // przygotowywanie połączenia
var yt; // tu będzie JSON
var odcinki = {}; // tu będą normalne rzeczy, podane jasno

/* <a href="#">
 *   <div class="odcinek">                                    = 1
 *     <div class="miniaturka"></div>                         = 2
 *     <span class="aboutodc">                                = 3
 *       <h3 class="title">TYTUŁ</h3>                         = 4
 *       <div class="data">Data: 1.01.2015 r.</div>           = 5
 *     </span>                                                  
 *   </div>                                                     
 * </a>
*/

function Odcinek(odc){
   var lacze = document.createElement("a");
      lacze.href = "https://www.youtube.com/watch?v="+odc.snippet.resourceId.videoId;
      lacze.target = "_blank";
   
   var odcinek = document.createElement("div"); // 1
      odcinek.className = "odcinek";
      
   var miniaturka = document.createElement("div"); // 2
      miniaturka.className = "miniaturka";
      miniaturka.style.backgroundImage = "url('"+odc.snippet.thumbnails.default.url+"')";
      
      lacze.appendChild(miniaturka);
      
   var aboutodc = document.createElement("span"); // 3
      aboutodc.className = "aboutodc";
      
   var tytul = document.createElement("h3"); // 4
      tytul.className = "title";
      tytul.innerHTML = odc.snippet.title;
      aboutodc.appendChild(tytul);
   
   var data = document.createElement("div");
   var answ = odc.snippet.publishedAt; 
      data.className = "data";
      data.innerHTML = "Data: "+answ.substring(8,10)+"."+answ.substring(5,7)+"."+answ.substring(0,4) + " r.";
      aboutodc.appendChild(data);
      
   lacze.appendChild(aboutodc);
   odcinek.appendChild(lacze);
   
   document.getElementById("odcinki").appendChild(odcinek);
}

xhr.open("GET","https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLzbhNJz_sER-mY1kjZa3j1_uxzjLASQLA&maxResults=20&key=AIzaSyDHMw3oK2PpfNo33zPGlp6uMQKi6Ya1EXI",true); // otwieranie połączenia
xhr.send(); // wysyłanie

xhr.onreadystatechange = function(){
   if(xhr.readyState==4 && xhr.status==200){
     yt = JSON.parse(xhr.responseText); // przekształcanie tekstu w JSON
     run();
   }
}

function run(){
   odcinki.ilosc = yt.pageInfo.totalResults;
   odcinki.lista = yt.items;
   
   for(var i=odcinki.ilosc-1;i>=0;i--) Odcinek(odcinki.lista[i]);
   
   document.getElementById("loading").style.display = "none";
}
