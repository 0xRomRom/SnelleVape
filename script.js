"use strict";

const menuOptions = document.querySelector(".menu-options");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".shopping-cart");
const formAmount = document.querySelector(".amount-value");
const decreaseQuantity1 = document.querySelector(".min1");
const decreaseQuantity2 = document.querySelector(".min2");
const decreaseQuantity3 = document.querySelector(".min3");
const decreaseQuantity4 = document.querySelector(".min4");
const decreaseQuantity5 = document.querySelector(".min5");
const decreaseQuantity6 = document.querySelector(".min6");
const decreaseQuantity7 = document.querySelector(".min7");
const decreaseQuantity8 = document.querySelector(".min8");
const decreaseQuantity9 = document.querySelector(".min9");
const decreaseQuantity10 = document.querySelector(".min10");
const increaseQuantity1 = document.querySelector(".plus1");
const increaseQuantity2 = document.querySelector(".plus2");
const increaseQuantity3 = document.querySelector(".plus3");
const increaseQuantity4 = document.querySelector(".plus4");
const increaseQuantity5 = document.querySelector(".plus5");
const increaseQuantity6 = document.querySelector(".plus6");
const increaseQuantity7 = document.querySelector(".plus7");
const increaseQuantity8 = document.querySelector(".plus8");
const increaseQuantity9 = document.querySelector(".plus9");
const increaseQuantity10 = document.querySelector(".plus10");
const amount1 = document.querySelector(".amount1");
const amount2 = document.querySelector(".amount2");
const amount3 = document.querySelector(".amount3");
const amount4 = document.querySelector(".amount4");
const amount5 = document.querySelector(".amount5");
const amount6 = document.querySelector(".amount6");
const amount7 = document.querySelector(".amount7");
const amount8 = document.querySelector(".amount8");
const amount9 = document.querySelector(".amount9");
const amount10 = document.querySelector(".amount10");

//Init
let initValue1 = 0;
let initValue2 = 0;
let initValue3 = 0;
let initValue4 = 0;
let initValue5 = 0;
let initValue6 = 0;
let initValue7 = 0;
let initValue8 = 0;
let initValue9 = 0;
let initValue10 = 0;
amount1.textContent = initValue1;
amount2.textContent = initValue2;
amount3.textContent = initValue3;
amount4.textContent = initValue4;
amount5.textContent = initValue5;
amount6.textContent = initValue6;
amount7.textContent = initValue7;
amount8.textContent = initValue8;
amount9.textContent = initValue9;
amount10.textContent = initValue10;

// Burger menu
burgerMenu.addEventListener("click", () => {
  menuOptions.style.display =
    menuOptions.style.display != "flex" ? "flex" : "none";
  shoppingCart.style.display =
    shoppingCart.style.display != "none" ? "none" : "flex";
});

//Form Logic

//===1===
increaseQuantity1.addEventListener("click", () => {
  initValue1++;
  amount1.textContent = initValue1;
});
decreaseQuantity1.addEventListener("click", () => {
  if (initValue1 === 0) return;
  initValue1--;
  amount1.textContent = initValue1;
});
//===2===
increaseQuantity2.addEventListener("click", () => {
  initValue2++;
  amount2.textContent = initValue2;
});
decreaseQuantity2.addEventListener("click", () => {
  if (initValue2 === 0) return;
  initValue2--;
  amount2.textContent = initValue2;
});
//===3===
increaseQuantity3.addEventListener("click", () => {
  initValue3++;
  amount3.textContent = initValue3;
});
decreaseQuantity3.addEventListener("click", () => {
  if (initValue3 === 0) return;
  initValue3--;
  amount3.textContent = initValue3;
});
//===4===
increaseQuantity4.addEventListener("click", () => {
  initValue4++;
  amount4.textContent = initValue4;
});
decreaseQuantity4.addEventListener("click", () => {
  if (initValue4 === 0) return;
  initValue4--;
  amount4.textContent = initValue4;
});
//===5===
increaseQuantity5.addEventListener("click", () => {
  initValue5++;
  amount5.textContent = initValue5;
});
decreaseQuantity5.addEventListener("click", () => {
  if (initValue5 === 0) return;
  initValue5--;
  amount5.textContent = initValue5;
});
//===6===
increaseQuantity6.addEventListener("click", () => {
  initValue6++;
  amount6.textContent = initValue6;
});
decreaseQuantity6.addEventListener("click", () => {
  if (initValue6 === 0) return;
  initValue6--;
  amount6.textContent = initValue6;
});
//===7===
increaseQuantity7.addEventListener("click", () => {
  initValue7++;
  amount7.textContent = initValue7;
});
decreaseQuantity7.addEventListener("click", () => {
  if (initValue7 === 0) return;
  initValue7--;
  amount7.textContent = initValue7;
});
//===8===
increaseQuantity8.addEventListener("click", () => {
  initValue8++;
  amount8.textContent = initValue8;
});
decreaseQuantity8.addEventListener("click", () => {
  if (initValue8 === 0) return;
  initValue8--;
  amount8.textContent = initValue8;
});
//===9===
increaseQuantity9.addEventListener("click", () => {
  initValue9++;
  amount9.textContent = initValue9;
});
decreaseQuantity9.addEventListener("click", () => {
  if (initValue9 === 0) return;
  initValue9--;
  amount9.textContent = initValue9;
});
//===10===
increaseQuantity10.addEventListener("click", () => {
  initValue10++;
  amount10.textContent = initValue10;
});
decreaseQuantity10.addEventListener("click", () => {
  if (initValue10 === 0) return;
  initValue10--;
  amount10.textContent = initValue10;
});
