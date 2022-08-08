"use strict";

const menuOptions = document.querySelector(".menu-options");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".shopping-cart");

burgerMenu.addEventListener("click", () => {
  menuOptions.style.display =
    menuOptions.style.display != "flex" ? "flex" : "none";
  shoppingCart.style.display =
    shoppingCart.style.display != "none" ? "none" : "flex";
});

// const findOverflows = () => {
//   const documentWidth = document.documentElement.offsetWidth;

//   document.querySelectorAll("*").forEach((element) => {
//     const box = element.getBoundingClientRect();

//     if (box.left < 0 || box.right > documentWidth) {
//       console.log(element);
//       element.style.border = "1px solid red";
//     }
//   });
// };

// // Execute findOverflows to find overflows on the page.
// findOverflows();
