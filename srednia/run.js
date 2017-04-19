// run.js
// dla strony "Średnia ocen"
// by skorupa

document.addEventListener("DOMContentLoaded", function(){ // onload 
  markBox = document.getElementById("markbox");
  titleInput = document.getElementById("title");
  markInput = document.getElementById("mark");
  marks = document.getElementsByClassName("MarkMark");
  medianVal = document.getElementById("medianContext");
  
  markInput.addEventListener("keypress",function(event){
     if(detectEnter(event)) addMark();
  });
  titleInput.addEventListener("keypress",function(event){
     if(detectEnter(event)) markInput.select();
  });
});

function detectEnter(event){
   if(event.keyCode===13) return true;
   else return false;
}

/*
   MarkElement ->
   <div class="MarkElement">
      <div class="MarkTitle"></div>
      <div class="MarkMark"></div>
      <button onclick="markBox.removeChild(this.parentNode);doCalc();">X</button>
   </div>
*/

function addMark(){
   if(validate()){
      titleValue = titleInput.value.slice();
      
      var Mark = document.createElement("div");
      Mark.className = "MarkElement";
      
      var MarkTitle = document.createElement("span");
      MarkTitle.className = "MarkTitle";
      
      MarkTitle.style.fontWeight = "bold";
      
      if(titleValue)titleValue=titleValue[0].toUpperCase()+titleValue.substring(1,titleValue.length);
      
      if(titleValue) titleValue+=": ";
      MarkTitle.innerHTML = titleValue;
      Mark.appendChild(MarkTitle);
      
      var MarkMark = document.createElement("span");
      MarkMark.className = "MarkMark";
      MarkMark.innerHTML = markInput.value;
      if(parseInt(markInput.value)===1) MarkMark.style.color="red";
      Mark.appendChild(MarkMark);
      
      var MarkElementRemoveBox = "   <button onclick='markBox.removeChild(this.parentNode);doCalc()'>X</button>";
      Mark.innerHTML+=(MarkElementRemoveBox);
      
      markBox.appendChild(Mark);
      doCalc();
      
      markInput.value = "";
      titleInput.value = "";
      (titleValue)? titleInput.select():markInput.select();
   } else {
      titleInput.select();
   }
}

function validate(){
   var markNum = parseInt(markInput.value);
   if(markNum>0&&markNum<=6) return true;
   else return false;
}

function doCalc(){
   // var colMarks = [];
   colMarks = marks;
   allMarks = 0;
   // for(var i=0;i<marks.length;i++){
   //    colMarks[colMarks.length]=marks[i];
   // }
   for(var i=0;i<colMarks.length;i++){
      allMarks+=parseInt(colMarks[i].innerHTML);
   }
   
   median = allMarks/colMarks.length;
   if(!median){
      median = "brak danych";
      medianVal.style.color="black";
   }
   else if(median<=2) medianVal.style.color="red";
   else medianVal.style.color="black";
   medianVal.innerHTML = median;
}