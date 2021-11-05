function callback(){
  var a = function() {
    console.log("it works!");
  }
  setTimeout(a, 5000);
}
callback();
