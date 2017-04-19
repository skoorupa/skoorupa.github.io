function FindGo(f){
   if(f===""||f==="?") location.href="http://google.com";
   else {
      var q = f.slice();
      var bang, tofind;
      
      q = unescape(q);
      
      if(q[1]==="!"){
         q = q.substring(1,q.length);
         bang = q.substring(0,q.indexOf("+"));
         
         if(bang==="") bang = q;
         tofind = q.substring(bang.length+1,q.length);
         
         switch(bang){
            case "!yt":
            case "!youtube":
               location.href="https://www.youtube.com/results?search_query="+escape(tofind);
            break;
            
            case "!bing":
            case "!b":
               location.href="https://www.bing.com/search?q="+escape(tofind);
            break;
            
            case "!tt":
            case "!twitter":
            case "!tw":
            case "!t":
               if(tofind[0]==="@") location.href="https://twitter.com/"+escape(tofind.substring(1,tofind.length));
               else location.href="https://twitter.com/search?q="+escape(tofind);
            break;
            
            case "!w":
            case "!wiki":
            case "!wikipedia":
               if(tofind) location.href="https://pl.wikipedia.org/wiki/Special:Search?search="+tofind;
               else location.href="https://pl.wikipedia.org/";
            break;
            
            case "!ddg": 
            case "!duck":
            case "!duckduckgo":
               location.href="https://duckduckgo.com/?q="+tofind;
            break;
            
            case "!fb":
            case "!facebook":
               location.href="https://www.facebook.com/search/results/?q="+tofind;
            break;
            
            case "!mail":
            case "!mailto":
            case "!@":
               location.href="mailto:"+tofind;
            break;
            
            case "!maps":
            case "!m":
               location.href="https://www.google.com/maps/search/"+tofind;
            break;
            
            case "!img":
            case "!images":
            case "!image":
            case "!i":
               location.href="https://www.google.com/search?tbm=isch&q="+tofind;
            break;
            
            
            default:
               location.href="https://www.google.com/search?q="+escape(tofind);
         }
      } else {
         location.href="https://www.google.com/search?q="+escape(q.substring(1,q.length));
      }
   }
}