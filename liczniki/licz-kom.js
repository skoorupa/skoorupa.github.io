(function(){
   console.log("Ładowanie licznika komentarzy...");
   
   komentarze=document.querySelectorAll(".UFIList");
   liczkomentarzezyrafa = function(){
      rrr=this.id.slice();
      this.id="sprawdzamy";
      
      nosprawdzamyzyrafe=document.querySelectorAll("#sprawdzamy>li.UFIComment").length;
      alert("Komentarze: "+nosprawdzamyzyrafe+"\nby skorupa ©");
      document.getElementById("sprawdzamy").id=rrr;
   };
   
   for($zyrafaa=0;$zyrafaa<komentarze.length;$zyrafaa++){
      komentarze[$zyrafaa].addEventListener("click",liczkomentarzezyrafa);
   }
   function usuntocos(){
      for($zyrafaa=0;$zyrafaa<komentarze.length;$zyrafaa++){
         komentarze[$zyrafaa].removeEventListener("click",liczkomentarzezyrafa);
      }
      info.style.backgroundColor="red";
      info.innerHTML="Wyłączam licznik komentarzy...";
      
      setTimeout(function(){
         document.body.removeChild(document.getElementById("aktywacjainfo"));
      },2000);
   }
      
   var info=document.createElement("div");
   info.id="aktywacjainfo";
   info.setAttribute("style","background-color:lime;position:fixed;z-index:9999;top:0 !important;padding:5px;right:0 !important;");
   info.innerHTML="Licznik komentarzy aktywowano. ";
   
   var infodel=document.createElement("button");
   infodel.innerHTML="Wyłącz";
   infodel.addEventListener("click",usuntocos);
   info.appendChild(infodel);
   document.body.appendChild(info);
   info=document.getElementById("aktywacjainfo");
   
   console.log("Zakończono ładowanie licznika.");
})();