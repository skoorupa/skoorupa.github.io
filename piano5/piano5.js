  // keys.js
var normalKeys = [
   "c", // 0 
   "d", // 1
   "e", // 2
   "f", // 3
   "g", // 4
   "a", // 5
   "b"  // 6
];

var hashKeys = [
   null, // 0
   "c#", // 1
   "d#", // 2
   null, // 3
   "f#", // 4
   "g#", // 5
   "a#", // 6
];

var normalOctaves = [
   0,0,0,0,0,0,0,
   1,1,1,1,1,1,1,
   2,2,2,2,2,2,2,
   3,3,3,3,3,3,3,
   4,4,4,4,4,4,4, // pierwsza 4 = normalOctaves[28]
   5,5,5,5,5,5,5,
   6,6,6,6,6,6,6,
   7,7,7,7,7,7,7,
   8,8,8,8,8,8,8,
   9,9,9,9,9,9,9
];

var hashOctaves = [
   0,0,0,0,0,0,0,0,
   1,1,1,1,1,1,1,1,
   2,2,2,2,2,2,2,2,
   3,3,3,3,3,3,3,3,
   4,4,4,4,4,4,4,4, // pierwsza 4 = hashOctaves[32]
   5,5,5,5,5,5,5,5,
   6,6,6,6,6,6,6,6,
   7,7,7,7,7,7,7,7,
   8,8,8,8,8,8,8,8,
   9,9,9,9,9,9,9,9
];

function keyDetect(eve){
   var key = eve.keyCode||eve.which;
   switch(key){
      // klawisz -> nuta
      // z -> c
      case 122: playKey(normalKeys[0] ,normalOctaves[28],null); break;
      // x -> d             
      case 120: playKey(normalKeys[1] ,normalOctaves[29],null); break;
      // c -> e             
      case 99 : playKey(normalKeys[2] ,normalOctaves[30],null); break;
      // v -> f             
      case 118: playKey(normalKeys[3] ,normalOctaves[31],null); break;
      // b -> g             
      case 98 : playKey(normalKeys[4] ,normalOctaves[32],null); break;
      // n -> a             
      case 110: playKey(normalKeys[5] ,normalOctaves[33],null); break;
      // m -> b             
      case 109: playKey(normalKeys[6] ,normalOctaves[34],null); break;
      // a -> null
      case 97:  playKey(hashKeys[0],hashOctaves[32],null); break;
      // s -> c#
      case 115: playKey(hashKeys[1],hashOctaves[33],null); break;
      // d -> d#
      case 100: playKey(hashKeys[2],hashOctaves[34],null); break;
      // f -> null
      case 102: playKey(hashKeys[3],hashOctaves[35],null); break;
      // g -> f#
      case 103: playKey(hashKeys[4],hashOctaves[36],null); break;
      // h-> g#
      case 104: playKey(hashKeys[5],hashOctaves[37],null); break;
      // j-> a#
      case 106: playKey(hashKeys[6],hashOctaves[38],null); break;
      // k-> null
      case 107: playKey(hashKeys[0],hashOctaves[39],null); break;
      
      case 39:
         if(normalOctaves[34]!=9){
            for(var i=0;i<7;i++){
               hashKeys = hashKeys.organize("left");
               hashOctaves   = hashOctaves.organize("left");
               normalKeys    = normalKeys.organize("left");
               normalOctaves = normalOctaves.organize("left");
            }
         }
         console.log(normalOctaves[34]);
      break;
      case 37:
         if(normalOctaves[34]!=0){
            for(var i=0;i<7;i++){
               hashKeys = hashKeys.organize("right");
               hashOctaves   = hashOctaves.organize("right");
               normalKeys    = normalKeys.organize("right");
               normalOctaves = normalOctaves.organize("right");
            }
         }
         console.log(normalOctaves[34]);
      break;
      
      case 44:
         hashKeys      = hashKeys.organize("right");
         hashOctaves   = hashOctaves.organize("right");
         normalKeys    = normalKeys.organize("right");
         normalOctaves = normalOctaves.organize("right");
      break;
      case 46:
         hashKeys = hashKeys.organize("left");
         hashOctaves   = hashOctaves.organize("left");
         normalKeys    = normalKeys.organize("left");
         normalOctaves = normalOctaves.organize("left");
      break;
      
      default:
         if(key <= 57 && key >= 48) currentOctave=key-48;
   }
}

function playKey(key,octave,object){
   if(key!=null){
      tones.play(key,octave);
      ar=document.getElementsByClassName("klawisz");
      
      if(object===null){
         for(var i=0;i<ar.length;i++){
            if(ar[i].outerHTML.indexOf("playKey('"+key+"',"+octave+",this)")!=-1){
               ar[i].style.backgroundColor="cyan";
               var tmpi=i;
               if(ar[i].outerHTML.indexOf("kl-bialy")!=-1) var previousColor="white";
               if(ar[i].outerHTML.indexOf("kl-czarny")!=-1) var previousColor="black";
               setTimeout(function(){
                  ar[tmpi].style.backgroundColor=previousColor;
               },500);
            }
         }
      } else {
         obj = object.outerHTML;
         if(obj.indexOf("kl-bialy")!=-1) var previousColor="white";
         if(obj.indexOf("kl-czarny")!=-1) var previousColor="black";
         object.style.backgroundColor="cyan";
         setTimeout(function(){
            object.style.backgroundColor=previousColor;
         },500);
      }
   }
}

Array.prototype.organize = function(side){
  var tmp = this.slice();
  
  if(side=="left"){
    for(var i = 0;i<this.length;i++){
      if(i+1 != this.length){
        tmp[i] = this[i+1];
      } else {
        tmp[i] = this[0];
      }
    }
  } else if(side=="right"){
    for(var i = 0;i<this.length;i++){
      if(i !== 0){
        tmp[i] = this[i-1];
      } else {
        tmp[i] = this[this.length-1];
      }
    }
  }
  return tmp;
};