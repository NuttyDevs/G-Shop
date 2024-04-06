const navTrigerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

// even listendr
navTrigerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});
