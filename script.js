"use strict";

const menuOptions = document.querySelector(".menu-options");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".shopping-cart");
const formAmount = document.querySelector(".amount-value");
const cartAmount = document.querySelector(".cart-count");
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
const addToCart1 = document.querySelector(".cartAdd1");
const addToCart2 = document.querySelector(".cartAdd2");
const addToCart3 = document.querySelector(".cartAdd3");
const addToCart4 = document.querySelector(".cartAdd4");
const addToCart5 = document.querySelector(".cartAdd5");
const addToCart6 = document.querySelector(".cartAdd6");
const addToCart7 = document.querySelector(".cartAdd7");
const addToCart8 = document.querySelector(".cartAdd8");
const addToCart9 = document.querySelector(".cartAdd9");
const addToCart10 = document.querySelector(".cartAdd10");

//Init
let cartInit = 0;
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
cartAmount.textContent = cartInit;
let cartContent = {
  totalCount: 0,
  flavorAmounts: {
    choice1: 0,
    choice2: 0,
    choice3: 0,
    choice4: 0,
    choice5: 0,
    choice6: 0,
    choice7: 0,
    choice8: 0,
    choice9: 0,
    choice10: 0,
  },
};

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
addToCart1.addEventListener("click", () => {
  cartContent.totalCount += initValue1;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice1 += initValue1;
  initValue1 = 0;
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
addToCart2.addEventListener("click", () => {
  cartContent.totalCount += initValue2;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice2 += initValue2;
  initValue2 = 0;
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
addToCart3.addEventListener("click", () => {
  cartContent.totalCount += initValue3;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice3 += initValue3;
  initValue3 = 0;
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
addToCart4.addEventListener("click", () => {
  cartContent.totalCount += initValue4;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice4 += initValue4;
  initValue4 = 0;
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
addToCart5.addEventListener("click", () => {
  cartContent.totalCount += initValue5;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice5 += initValue5;
  initValue5 = 0;
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
addToCart6.addEventListener("click", () => {
  cartContent.totalCount += initValue6;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice6 += initValue6;
  initValue6 = 0;
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
addToCart7.addEventListener("click", () => {
  cartContent.totalCount += initValue7;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice7 += initValue7;
  initValue7 = 0;
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
addToCart8.addEventListener("click", () => {
  cartContent.totalCount += initValue8;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice8 += initValue8;
  initValue8 = 0;
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
addToCart9.addEventListener("click", () => {
  cartContent.totalCount += initValue9;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice9 += initValue9;
  initValue9 = 0;
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
addToCart10.addEventListener("click", () => {
  cartContent.totalCount += initValue10;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.choice10 += initValue10;
  initValue10 = 0;
  amount10.textContent = initValue10;
});
