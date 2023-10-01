let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");

let state = true;

document.addEventListener("click", function (e) {
  if (state === true && e.target === icon) {
    menu.style.display = "block";
    icon.style.cssText = "transform: scale(1.2) rotate(90deg);";
    icon.onmouseover = function (e) {
      icon.style.cssText = "transform: scale(1.2) rotate(90deg);";
    };
    icon.onmouseleave = function (e) {
      icon.style.cssText = "transform: scale(1.2) rotate(90deg);";
    };
    state = false;
  } else {
    menu.style.display = "none";
    icon.style.cssText = "transform: scale(1) rotate(0);";
    icon.onmouseover = function (e) {
      icon.style.cssText = "transform: scale(1.2)";
    };
    icon.onmouseleave = function (e) {
      icon.style.cssText = "transform: scale(1)";
    };
    state = true;
  }
});
