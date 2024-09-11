var nav = document.querySelector("nav");
var btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    nav.classList.remove("navdefault");
    nav.classList.add("navscroll");
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    nav.classList.remove("navscroll");
    nav.classList.add("navdefault");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo("", 0);
});

const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  this.classList.toggle("active");
});
