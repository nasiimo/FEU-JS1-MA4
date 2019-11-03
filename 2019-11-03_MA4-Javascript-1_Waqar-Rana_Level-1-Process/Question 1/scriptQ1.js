
var button = document.getElementById("button") ;

button.addEventListener("click", function(e){

  alert("Success");
  e.stopPropagation();
})
