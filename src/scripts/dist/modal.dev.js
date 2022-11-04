"use strict";

// Get the modal
var modal = document.getElementById("myModal"); // Get the button that opens the modal

var btn = document.getElementById("myBtn"); // Get the <span> element that closes the modal

var button = document.getElementsByClassName("fechar")[0];
console.log(p1);
console.log(p1); // When the user clicks on the button, open the modal

btn.onclick = function () {
  modal.style.display = "block";
}; // When the user clicks on <span> (x), close the modal


button.onclick = function () {
  modal.style.display = "none";
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* var p1 = document.querySelector("#player1 .infos .name");
var p2 = document.querySelector("#player2 .infos .name");
var p3 = document.querySelector("#player3 .infos .name");
var p4 = document.querySelector("#player4 .infos .name");

var i1 = document.querySelector("#inputName1");
var i2 = document.querySelector("#inputName1");
var i3 = document.querySelector("#inputName1");
var i4 = document.querySelector("#inputName1");

p1.innerHTML = i1.innerHTML;
p2.innerHTML = i2.innerHTML;
p2.innerHTML = i3.innerHTML;
p2.innerHTML = i4.innerHTML; */