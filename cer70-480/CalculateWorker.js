//window.Worker: postMessage, terminate, onmessage, onerror

onmessage = function (evt){
  var work = 10000000,
      i = 0,
      a = new Array(work),
      sum = 0;
   for (i = 0; i < work; i++) {
     a[i] = i * i;
     sum += i * i;
   }
   self.postMessage(sum); 
}
