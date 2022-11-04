// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var button = document.getElementsByClassName("fechar")[0];
// Porximo Turno

// When the user clicks on the button, open the modal
// MODIFICADO PARA JA ABRIR O MODAL

btn.onclick = function () {
  modal.style.display = "block";
};
var btnproxTurno = document.getElementById("proxTurno");

var tply = document.getElementById("players");
var ply1 = document.getElementById("player1");
var ply2 = document.getElementById("player2");
var ply3 = document.getElementById("player3");
var ply4 = document.getElementById("player4");

btnproxTurno.onclick = function () {
  ply1.classList.remove("turn");
  ply2.classList.add("turn");
};

// When the user clicks on <span> (x), close the modal
button.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
