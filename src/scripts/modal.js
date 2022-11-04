// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
addEventListener("submit", () => {
  document.getElementById("myModal").style.display = "none";

});
addEventListener("load", () => {
  document.getElementById("console").value+="Sejam bem Vindos seu primeiro desafio\n é descobrir como  inicia\n o jogo BANG." 
});
