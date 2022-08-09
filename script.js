"use strict";

const menuOptions = document.querySelector(".menu-options");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".shopping-cart");
const formAmount = document.querySelector(".amount-value");
const cartAmount = document.querySelector(".cart-count");
const hideCart = document.querySelector(".hide-cart");
const checkoutCart = document.querySelector(".checkout-cart");
const orderedItems = document.querySelector(".ordered-items");
const totalPrice = document.querySelector(".total-order-price");
const trashCan1 = document.querySelector(".trash1");
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

const choice1 = document.querySelector(".choice1");
const choice1Title = document.querySelector(".choice1-title");
const choice1Amount = document.querySelector(".choice1-amount");
const choice2 = document.querySelector(".choice2");
const choice2Title = document.querySelector(".choice2-title");
const choice2Amount = document.querySelector(".choice2-amount");
const choice3 = document.querySelector(".choice3");
const choice3Title = document.querySelector(".choice3-title");
const choice3Amount = document.querySelector(".choice3-amount");
const choice4 = document.querySelector(".choice4");
const choice4Title = document.querySelector(".choice4-title");
const choice4Amount = document.querySelector(".choice4-amount");
const choice5 = document.querySelector(".choice5");
const choice5Title = document.querySelector(".choice5-title");
const choice5Amount = document.querySelector(".choice5-amount");
const choice6 = document.querySelector(".choice6");
const choice6Title = document.querySelector(".choice6-title");
const choice6Amount = document.querySelector(".choice6-amount");
const choice7 = document.querySelector(".choice7");
const choice7Title = document.querySelector(".choice7-title");
const choice7Amount = document.querySelector(".choice7-amount");
const choice8 = document.querySelector(".choice8");
const choice8Title = document.querySelector(".choice8-title");
const choice8Amount = document.querySelector(".choice8-amount");
const choice9 = document.querySelector(".choice9");
const choice9Title = document.querySelector(".choice9-title");
const choice9Amount = document.querySelector(".choice9-amount");
const choice10 = document.querySelector(".choice10");
const choice10Title = document.querySelector(".choice10-title");
const choice10Amount = document.querySelector(".choice10-amount");

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
checkoutCart.style.display = "none";

let cartContent = {
  totalCount: 0,
  totalPrice: 0,
  flavorAmounts: {
    strawberryBanana: 0,
    mixedBerry: 0,
    redRazPassionFruit: 0,
    gummyBear: 0,
    pineappleMango: 0,
    bubblegumIce: 0,
    strawberryIcecream: 0,
    orangeSoda: 0,
    colaIca: 0,
    honeydewMelon: 0,
  },
};
let finalOrder = cartContent.flavorAmounts;
let totalOrder = cartContent.totalPrice;

const deleteFromCart = (item, key, value) => {
  item.classList.add("hidden");
  cartContent.flavorAmounts[key] = 0;
  cartContent.totalCount -= value;
  cartContent.totalPrice -= (value * 9.95).toFixed(2);
  totalPrice.textContent = cartContent.totalPrice;
  cartAmount.textContent -= value;
};

trashCan1.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.strawberryBanana;
  deleteFromCart(choice1, "strawberryBanana", cartValue);
});

const cartRendering = () => {
  totalPrice.textContent = (cartContent.totalCount * 9.95).toFixed(2);
  cartContent.totalPrice = (cartContent.totalCount * 9.95).toFixed(2);
  console.log(cartContent.totalPrice);
  console.log(cartContent.totalCount);
  for (let [key, value] of Object.entries(finalOrder)) {
    if (+value > 0) {
      if (key === "strawberryBanana") {
        choice1Title.textContent = "Strawberry Banana";
        choice1Amount.textContent = ` x ${value}`;
        choice1.classList.remove("hidden");
      }
      if (key === "mixedBerry") {
        choice2Title.textContent = "Mixed Berry";
        choice2Amount.textContent = ` x ${value}`;
        choice2.classList.remove("hidden");
      }
      if (key === "redRazPassionFruit") {
        choice3Title.textContent = "Red Raz Passion Fruit";
        choice3Amount.textContent = ` x ${value}`;
        choice3.classList.remove("hidden");
      }
      if (key === "gummyBear") {
        choice4Title.textContent = "Gummy Bear";
        choice4Amount.textContent = ` x ${value}`;
        choice4.classList.remove("hidden");
      }
      if (key === "pineappleMango") {
        choice5Title.textContent = "Pineapple Mango";
        choice5Amount.textContent = ` x ${value}`;
        choice5.classList.remove("hidden");
      }
      if (key === "bubblegumIce") {
        choice6Title.textContent = "Bubblegum Ice";
        choice6Amount.textContent = ` x ${value}`;
        choice6.classList.remove("hidden");
      }
      if (key === "strawberryIcecream") {
        choice7Title.textContent = "Strawberry Icecream";
        choice7Amount.textContent = ` x ${value}`;
        choice7.classList.remove("hidden");
      }
      if (key === "orangeSoda") {
        choice8Title.textContent = "Orange Soda";
        choice8Amount.textContent = ` x ${value}`;
        choice8.classList.remove("hidden");
      }
      if (key === "colaIca") {
        choice9Title.textContent = "Cola Ice";
        choice9Amount.textContent = ` x ${value}`;
        choice9.classList.remove("hidden");
      }
      if (key === "honeydewMelon") {
        choice10Title.textContent = "Honeydew Melon";
        choice10Amount.textContent = ` x ${value}`;
        choice10.classList.remove("hidden");
      }
    }
  }
};

// Burger menu
burgerMenu.addEventListener("click", () => {
  menuOptions.style.display =
    menuOptions.style.display != "flex" ? "flex" : "none";
  shoppingCart.style.display =
    shoppingCart.style.display != "none" ? "none" : "flex";
});

//Show Cart
shoppingCart.addEventListener("click", () => {
  checkoutCart.style.display = "flex";
  cartRendering();
});

//Hide cart
hideCart.addEventListener("click", () => {
  checkoutCart.style.display = "none";
});

const shoppingCartFlashing = (itemCount) => {
  if (itemCount === 0) return;
  shoppingCart.classList.add("flashing");
  setTimeout(() => {
    shoppingCart.classList.remove("flashing");
  }, 1000);
};

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
  shoppingCartFlashing(initValue1);
  cartContent.totalCount += initValue1;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.strawberryBanana += initValue1;
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
  shoppingCartFlashing(initValue2);
  cartContent.totalCount += initValue2;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.mixedBerry += initValue2;
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
  shoppingCartFlashing(initValue3);
  cartContent.totalCount += initValue3;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.redRazPassionFruit += initValue3;
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
  shoppingCartFlashing(initValue4);
  cartContent.totalCount += initValue4;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.gummyBear += initValue4;
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
  shoppingCartFlashing(initValue5);
  cartContent.totalCount += initValue5;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.pineappleMango += initValue5;
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
  shoppingCartFlashing(initValue6);
  cartContent.totalCount += initValue6;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.bubblegumIce += initValue6;
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
  shoppingCartFlashing(initValue7);
  cartContent.totalCount += initValue7;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.strawberryIcecream += initValue7;
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
  shoppingCartFlashing(initValue8);
  cartContent.totalCount += initValue8;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.orangeSoda += initValue8;
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
  shoppingCartFlashing(initValue9);
  cartContent.totalCount += initValue9;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.colaIca += initValue9;
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
  shoppingCartFlashing(initValue10);
  cartContent.totalCount += initValue10;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.honeydewMelon += initValue10;
  initValue10 = 0;
  amount10.textContent = initValue10;
});
