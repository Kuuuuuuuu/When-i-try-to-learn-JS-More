function break() {
  var i = 100;
   while (true) {
     console.log(`count ${i}`);
     i-= 1;
     if (i == 0) {
         break;
     }
   }
 }
break();
