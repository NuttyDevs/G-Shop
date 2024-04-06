// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", navToggle);

// function navToggle() {
//   btn.classList.toggle("open");
//   menu.classList.toggle("flex");
//   menu.classList.toggle("hidden");
// }

/* Mobile Menu */
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

/* Image Small */
// const imgSmall1 = document.getElementById("img-small1");
// const imgSmall2 = document.getElementById("img-small2");
// const imgSmall3 = document.getElementById("img-small3");
// const imgSmall4 = document.getElementById("img-small4");
// const imgLarge = document.getElementById("img-large");

// imgSmall1.addEventListener("click", () => {
//   imgLarge.src = imgSmall1.src;
// });

// imgSmall2.addEventListener("click", () => {
//   imgLarge.src = imgSmall2.src;
// });

// imgSmall3.addEventListener("click", () => {
//   imgLarge.src = imgSmall3.src;
// });

// imgSmall4.addEventListener("click", () => {
// imgLarge.src = imgSmall4.src;
// });

function imgGallery() {
  const mainImg = document.querySelector("#img-large"),
    smallImg = document.querySelectorAll(".img-small");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();
