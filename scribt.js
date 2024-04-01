// Get Hidden Menu Elemnet
let hiddenMenu = document.querySelector(".hiddenMenu");
let menuBtn = document.querySelector(".fa-bars");
let bodyOpacity = document.querySelector(".bodyOpacity");
// Add Event To Btn
menuBtn.addEventListener("mouseup", function () {
  hiddenMenu.classList.toggle("show");
  bodyOpacity.classList.toggle("block");
  bodyOpacity.addEventListener("click", function () {
    hiddenMenu.classList.remove("show");
    bodyOpacity.classList.remove("block");
  });
});
