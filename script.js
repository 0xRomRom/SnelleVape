"use strict";

const menuOptions = document.querySelector(".menu-options");
const burgerMenu = document.querySelector(".burger-button");
const shoppingCart = document.querySelector(".shopping-cart");

burgerMenu.addEventListener("click", () => {
  menuOptions.style.display =
    menuOptions.style.display != "flex" ? "flex" : "none";
  shoppingCart.style.display =
    shoppingCart.style.display != "none" ? "none" : "flex";
});
