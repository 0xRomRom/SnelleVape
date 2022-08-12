"use strict";

const menuOptions = document.querySelector(".menu-options");
const mainMenu = document.querySelector(".main-menu");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".shopping-cart");
const formAmount = document.querySelector(".amount-value");
const cartAmount = document.querySelector(".cart-count");
const hideCart = document.querySelector(".hide-cart");
const hideCart2 = document.querySelector(".hide-cart2");
const checkoutCart = document.querySelector(".checkout-cart");
const customerDetails = document.querySelector(".customer-details");
const orderedItems = document.querySelector(".ordered-items");
const totalPrice = document.querySelector(".total-order-price");
const couponSubmit = document.querySelector(".coupon-submit");
const couponInput = document.querySelector(".coupon-input");
const discountPercentage = document.querySelector(".discount-percentage");
const gratisVape1 = document.querySelector(".gratisvape-1");
const freeVapeOption1 = document.querySelector("#freevape1");
const gratisVape2 = document.querySelector(".gratisvape-2");
const freeVapeOption2 = document.querySelector("#freevape2");
const menuCover = document.querySelector(".total-box-cover");
const correctOrder = document.querySelector(".to-address");
const couponLabel = document.querySelector(".coupon-label");
const finalText1 = document.querySelector(".tnx4ordertxt1");
const finalText2 = document.querySelector(".tnx4ordertxt2");
const closeContactForm = document.querySelector(".hide-contact-form");
const contactPage = document.querySelector(".contact-page");
const openContactPage = document.querySelector(".contact");
const contactText = document.querySelector(".contact-text");
const contactImage = document.querySelector(".contact2");
const formEmailInput = document.querySelector(".form-email");
const formBox2 = document.querySelector(".form-box2");

const naamInput = document.querySelector(".naam-input");
const naamError = document.querySelector(".naam-error");
const naamLabel = document.querySelector(".naam-label");
const straatInput = document.querySelector(".straat-input");
const straatError = document.querySelector(".straat-error");
const straatLabel = document.querySelector(".straat-label");
const huisnummerInput = document.querySelector(".huisnummer-input");
const huisnummerError = document.querySelector(".huisnummer-error");
const huisnummerLabel = document.querySelector(".huisnummer-label");
const postcodeInput = document.querySelector(".postcode-input");
const postcodeError = document.querySelector(".postcode-error");
const postcodeLabel = document.querySelector(".postcode-label");
const plaatsInput = document.querySelector(".plaats-input");
const plaatsError = document.querySelector(".plaats-error");
const plaatsLabel = document.querySelector(".plaats-label");
const emailInput = document.querySelector(".email-input");
const emailError = document.querySelector(".email-error");
const emailLabel = document.querySelector(".email-label");
const mobielInput = document.querySelector(".mobiel-input");
const mobielError = document.querySelector(".mobiel-error");
const mobielLabel = document.querySelector(".mobiel-label");
const allInputs = document.querySelector(".gegevens-div");
const verzendGegevens = document.querySelector(".verzend-gegevens");
const toShipping = document.querySelector(".to-shipping");
const textAreaContactForm = document.querySelector(".contact-textarea");
const submitContactForm = document.querySelector(".submit-contact-form");
const emailFormInput = document.querySelector(".form-email-input");
const formEndText = document.querySelector(".form-endtext");
const emailLabel2 = document.querySelector(".email-label2");
const versturenImg = document.querySelector(".versturen-img");

const trashCan1 = document.querySelector(".trash1");
const trashCan2 = document.querySelector(".trash2");
const trashCan3 = document.querySelector(".trash3");
const trashCan4 = document.querySelector(".trash4");
const trashCan5 = document.querySelector(".trash5");
const trashCan6 = document.querySelector(".trash6");
const trashCan7 = document.querySelector(".trash7");
const trashCan8 = document.querySelector(".trash8");
const trashCan9 = document.querySelector(".trash9");
const trashCan10 = document.querySelector(".trash10");

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

const decreaseCart1 = document.querySelector(".decrement1");
const decreaseCart2 = document.querySelector(".decrement2");
const decreaseCart3 = document.querySelector(".decrement3");
const decreaseCart4 = document.querySelector(".decrement4");
const decreaseCart5 = document.querySelector(".decrement5");
const decreaseCart6 = document.querySelector(".decrement6");
const decreaseCart7 = document.querySelector(".decrement7");
const decreaseCart8 = document.querySelector(".decrement8");
const decreaseCart9 = document.querySelector(".decrement9");
const decreaseCart10 = document.querySelector(".decrement10");

const increaseCart1 = document.querySelector(".increment1");
const increaseCart2 = document.querySelector(".increment2");
const increaseCart3 = document.querySelector(".increment3");
const increaseCart4 = document.querySelector(".increment4");
const increaseCart5 = document.querySelector(".increment5");
const increaseCart6 = document.querySelector(".increment6");
const increaseCart7 = document.querySelector(".increment7");
const increaseCart8 = document.querySelector(".increment8");
const increaseCart9 = document.querySelector(".increment9");
const increaseCart10 = document.querySelector(".increment10");

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
const gegevensBox = document.querySelector(".gegevens-box");

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
let coupString = "snelle10";
let someArray = [0];

let contactForm = {
  bericht: "",
  email: "",
};
let cartContent = {
  totalCount: 0,
  totalPrice: 0,
  freeVape1: "",
  freeVape2: "",
  discount: false,
  customerDetails: {
    naam: "",
    straat: "",
    huisnummer: "",
    postcode: "",
    plaats: "",
    email: "",
    mobiel: "",
  },
  flavorAmounts: {
    strawberryBanana: 0,
    mixedBerry: 0,
    redRazPassionFruit: 0,
    gummyBear: 0,
    pineappleMango: 0,
    bubblegumIce: 0,
    strawberryIcecream: 0,
    orangeSoda: 0,
    colaIce: 0,
    honeydewMelon: 0,
  },
};
let finalOrder = cartContent.flavorAmounts;
let totalOrder = cartContent.totalPrice;
let totalCount = cartContent.totalCount;
toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
toShipping.disabled = true;

openContactPage.addEventListener("click", () => {
  contactPage.classList.remove("hidden");
  formEndText.classList.add("hidden");
  emailFormInput.classList.remove("hidden");
  contactImage.classList.remove("hidden");
  emailLabel2.classList.remove("hidden");
  formBox2.classList.remove("hidden");
  submitContactForm.classList.remove("hidden");
  contactText.classList.remove("hidden");
});

closeContactForm.addEventListener("click", () => {
  contactPage.classList.add("hidden");
});

submitContactForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (textAreaContactForm.value.length < 3) return;
  contactForm.bericht = textAreaContactForm.value;
  contactForm.email = emailFormInput.value;
  fetch(
    "https://snelle-vape-default-rtdb.europe-west1.firebasedatabase.app/ContactFormulier.json",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(contactForm),
    }
  );
  emailFormInput.value = "";
  textAreaContactForm.value = "";
  formEndText.classList.remove("hidden");
  emailFormInput.classList.add("hidden");
  contactImage.classList.add("hidden");
  emailLabel2.classList.add("hidden");
  formBox2.classList.add("hidden");
  submitContactForm.classList.add("hidden");
  contactText.classList.add("hidden");
});

const shipToFirebase = () => {
  fetch(
    "https://snelle-vape-default-rtdb.europe-west1.firebasedatabase.app/Bestellingen.json",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cartContent),
    }
  );
};

toShipping.addEventListener("click", (e) => {
  e.preventDefault();
  cartContent.customerDetails.naam = naamInput.value;
  cartContent.customerDetails.straat = straatInput.value;
  cartContent.customerDetails.huisnummer = huisnummerInput.value;
  cartContent.customerDetails.postcode = postcodeInput.value;
  cartContent.customerDetails.plaats = plaatsInput.value;
  cartContent.customerDetails.email = emailInput.value;
  cartContent.customerDetails.mobiel = mobielInput.value;
  shipToFirebase();
  naamInput.value = "";
  straatInput.value = "";
  huisnummerInput.value = "";
  postcodeInput.value = "";
  plaatsInput.value = "";
  emailInput.value = "";
  mobielInput.value = "06-";

  allInputs.classList.add("hidden");
  verzendGegevens.classList.add("hidden");
  finalText1.classList.remove("hidden");
  finalText2.classList.remove("hidden");

  cartContent.totalCount = 0;
  cartContent.totalPrice = 0;
  cartContent.freeVape1 = "";
  cartContent.freeVape2 = "";
  cartContent.discount = false;
  cartAmount.textContent = cartContent.totalCount;
  cartContent.customerDetails.naam = "";
  cartContent.customerDetails.straat = "";
  cartContent.customerDetails.huisnummer = "";
  cartContent.customerDetails.postcode = "";
  cartContent.customerDetails.plaats = "";
  cartContent.customerDetails.email = "";
  cartContent.customerDetails.mobiel = "";

  cartContent.flavorAmounts.strawberryBanana = 0;
  cartContent.flavorAmounts.mixedBerry = 0;
  cartContent.flavorAmounts.redRazPassionFruit = 0;
  cartContent.flavorAmounts.gummyBear = 0;
  cartContent.flavorAmounts.pineappleMango = 0;
  cartContent.flavorAmounts.bubblegumIce = 0;
  cartContent.flavorAmounts.strawberryIcecream = 0;
  cartContent.flavorAmounts.orangeSoda = 0;
  cartContent.flavorAmounts.colaIce = 0;
  cartContent.flavorAmounts.honeydewMelon = 0;
  choice1.classList.add("hidden");
  choice2.classList.add("hidden");
  choice3.classList.add("hidden");
  choice4.classList.add("hidden");
  choice5.classList.add("hidden");
  choice6.classList.add("hidden");
  choice7.classList.add("hidden");
  choice8.classList.add("hidden");
  choice9.classList.add("hidden");
  choice10.classList.add("hidden");
  toShipping.disabled = true;
  naamInput.style.border = "2px solid black";
  naamLabel.style.color = "black";
  straatInput.style.border = "2px solid black";
  straatLabel.style.color = "black";
  huisnummerInput.style.border = "2px solid black";
  huisnummerLabel.style.color = "black";
  postcodeInput.style.border = "2px solid black";
  postcodeLabel.style.color = "black";
  plaatsInput.style.border = "2px solid black";
  plaatsLabel.style.color = "black";
  emailInput.style.border = "2px solid black";
  emailLabel.style.color = "black";
  mobielInput.style.border = "2px solid black";
  mobielLabel.style.color = "black";
  toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
});

document.addEventListener("keyup", () => {
  if (naamInput.value.length < 3) {
    naamError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    naamInput.style.border = "2px solid black";
    naamLabel.style.color = "black";
    return;
  }
  if (naamInput.value.length >= 3) {
    naamError.classList.add("hidden");
    naamInput.style.border = "2px solid green";
    naamLabel.style.color = "green";
  }

  if (straatInput.value.length < 4) {
    straatError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    straatInput.style.border = "2px solid black";
    straatLabel.style.color = "black";
    return;
  }

  if (straatInput.value.length >= 4) {
    straatError.classList.add("hidden");
    straatInput.style.border = "2px solid green";
    straatLabel.style.color = "green";
  }

  if (huisnummerInput.value.length < 1) {
    huisnummerError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    huisnummerInput.style.border = "2px solid black";
    huisnummerLabel.style.color = "black";
    return;
  }

  if (huisnummerInput.value.length >= 1) {
    huisnummerError.classList.add("hidden");
    huisnummerInput.style.border = "2px solid green";
    huisnummerLabel.style.color = "green";
  }

  if (postcodeInput.value.length < 6) {
    postcodeError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    postcodeInput.style.border = "2px solid black";
    postcodeLabel.style.color = "black";
    return;
  }

  if (postcodeInput.value.length === 6) {
    postcodeError.classList.add("hidden");
    postcodeInput.style.border = "2px solid green";
    postcodeLabel.style.color = "green";
  }

  if (postcodeInput.value.length > 6) {
    postcodeError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    return;
  }
  if (plaatsInput.value.length < 3) {
    plaatsError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    plaatsInput.style.border = "2px solid black";
    plaatsLabel.style.color = "black";
    return;
  }

  if (plaatsInput.value.length >= 3) {
    plaatsError.classList.add("hidden");
    plaatsInput.style.border = "2px solid green";
    plaatsLabel.style.color = "green";
  }

  if (emailInput.value.length <= 6) {
    emailError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    emailInput.style.border = "2px solid black";
    emailLabel.style.color = "black";
    return;
  }
  if (!emailInput.value.includes("@")) {
    emailError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    emailInput.style.border = "2px solid black";
    emailLabel.style.color = "black";
    return;
  }

  if (emailInput.value.length >= 5) {
    emailError.classList.add("hidden");
    emailInput.style.border = "2px solid green";
    emailLabel.style.color = "green";
  }

  if (mobielInput.value.length < 10) {
    mobielError.classList.remove("hidden");
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-square-xmark"></i>`;
    toShipping.disabled = true;
    mobielInput.style.border = "2px solid black";
    mobielLabel.style.color = "black";
    return;
  }
  if (mobielInput.value.length > 10) {
    mobielError.classList.add("hidden");
    mobielInput.style.border = "2px solid green";
    mobielLabel.style.color = "green";
    toShipping.disabled = false;
    toShipping.innerHTML = `Gegevens Correct <i class="fa-solid fa-check-double"></i>`;
    toShipping.style.cursor = "pointer";
  }
});

correctOrder.addEventListener("click", () => {
  if (cartContent.totalCount === 0) return;
  cartContent.freeVape1 = freeVapeOption1.value;
  cartContent.freeVape2 = freeVapeOption2.value;
  console.log(cartContent);
  customerDetails.classList.remove("hidden");
});

couponSubmit.addEventListener("click", () => {
  if (cartContent.totalCount === 0) {
    couponInput.value = "";
    return;
  }
  if (couponInput.value !== coupString) {
    couponInput.value = "";
    return;
  }
  if (couponInput.value === coupString) {
    couponInput.value = "";
    if (someArray.length === 2) return;
    someArray.push(0);
    cartContent.totalPrice = +((cartContent.totalPrice / 100) * 90).toFixed(2);
    discountPercentage.classList.remove("hidden");
    totalPrice.textContent = cartContent.totalPrice;
    menuCover.classList.remove("hidden");
    couponLabel.style.color = "green";
    couponInput.placeholder = "10% Korting!";
    couponSubmit.style.backgroundColor = "green";
    couponSubmit.style.color = "white";
    correctOrder.classList.add("cart-finished");
    cartContent.discount = true;
  }
});

const deleteFromCart = (item, key, value, amount) => {
  console.log(cartContent.totalPrice);
  item.classList.add("hidden");
  cartContent.flavorAmounts[key] = 0;
  cartContent.totalCount -= value;
  cartContent.totalPrice -= (value * 9.95).toFixed(2);
  totalPrice.textContent = Math.abs(cartContent.totalPrice.toFixed(2));
  cartAmount.textContent = cartContent.totalCount;
  amount.textContent = "0";
  //Hide discount if cart is empty
  if (cartContent.totalCount === 0) {
    discountPercentage.classList.add("hidden");
  }
  //Called here because it's used multiple times
  freeVapeHandler();
  console.log(cartContent.totalPrice);
};

const decreaseCartHandler = (item, key, choiceAmount) => {
  cartContent.flavorAmounts[key]--;
  if (cartContent.flavorAmounts[key] === 0) {
    item.classList.add("hidden");
  }
  cartContent.totalPrice = cartContent.totalPrice - 9.95;
  cartContent.totalCount--;
  choiceAmount.textContent = `x ${cartContent.flavorAmounts[key]}`;
  cartAmount.textContent = cartContent.totalCount;
  totalPrice.textContent = Math.abs(cartContent.totalPrice).toFixed(2);
  freeVapeHandler();
};

const increaseCartHandler = (key, choiceAmount) => {
  cartContent.totalPrice = cartContent.totalPrice + 9.95;
  cartContent.flavorAmounts[key]++;
  cartContent.totalCount++;
  choiceAmount.textContent = `x ${cartContent.flavorAmounts[key]}`;
  cartAmount.textContent = cartContent.totalCount;
  totalPrice.textContent = Math.abs(cartContent.totalPrice).toFixed(2);
  freeVapeHandler();
};

const freeVapeHandler = () => {
  if (cartContent.totalCount > 4) {
    gratisVape1.classList.remove("hidden");
  }
  if (cartContent.totalCount > 9) {
    gratisVape2.classList.remove("hidden");
  }
  if (cartContent.totalCount < 5) {
    gratisVape1.classList.add("hidden");
  }
  if (cartContent.totalCount < 10) {
    gratisVape2.classList.add("hidden");
  }
};

increaseCart1.addEventListener("click", () => {
  increaseCartHandler("strawberryBanana", choice1Amount);
});
increaseCart2.addEventListener("click", () => {
  increaseCartHandler("mixedBerry", choice2Amount);
});
increaseCart3.addEventListener("click", () => {
  increaseCartHandler("redRazPassionFruit", choice3Amount);
});
increaseCart4.addEventListener("click", () => {
  increaseCartHandler("gummyBear", choice4Amount);
});
increaseCart5.addEventListener("click", () => {
  increaseCartHandler("pineappleMango", choice5Amount);
});
increaseCart6.addEventListener("click", () => {
  increaseCartHandler("bubblegumIce", choice6Amount);
});
increaseCart7.addEventListener("click", () => {
  increaseCartHandler("strawberryIcecream", choice7Amount);
});
increaseCart8.addEventListener("click", () => {
  increaseCartHandler("orangeSoda", choice8Amount);
});
increaseCart9.addEventListener("click", () => {
  increaseCartHandler("colaIce", choice9Amount);
});
increaseCart10.addEventListener("click", () => {
  increaseCartHandler("honeydewMelon", choice10Amount);
});

decreaseCart1.addEventListener("click", () => {
  decreaseCartHandler(choice1, "strawberryBanana", choice1Amount);
});
decreaseCart2.addEventListener("click", () => {
  decreaseCartHandler(choice2, "mixedBerry", choice2Amount);
});
decreaseCart3.addEventListener("click", () => {
  decreaseCartHandler(choice3, "redRazPassionFruit", choice3Amount);
});
decreaseCart4.addEventListener("click", () => {
  decreaseCartHandler(choice4, "gummyBear", choice4Amount);
});
decreaseCart5.addEventListener("click", () => {
  decreaseCartHandler(choice5, "pineappleMango", choice5Amount);
});
decreaseCart6.addEventListener("click", () => {
  decreaseCartHandler(choice6, "bubblegumIce", choice6Amount);
});
decreaseCart7.addEventListener("click", () => {
  decreaseCartHandler(choice7, "strawberryIcecream", choice7Amount);
});
decreaseCart8.addEventListener("click", () => {
  decreaseCartHandler(choice8, "orangeSoda", choice8Amount);
});
decreaseCart9.addEventListener("click", () => {
  decreaseCartHandler(choice9, "colaIce", choice9Amount);
});
decreaseCart10.addEventListener("click", () => {
  decreaseCartHandler(choice10, "honeydewMelon", choice10Amount);
});
trashCan1.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.strawberryBanana;
  deleteFromCart(choice1, "strawberryBanana", cartValue, amount1);
});
trashCan2.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.mixedBerry;
  deleteFromCart(choice2, "mixedBerry", cartValue, amount2);
});
trashCan3.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.redRazPassionFruit;
  deleteFromCart(choice3, "redRazPassionFruit", cartValue, amount3);
});
trashCan4.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.gummyBear;
  deleteFromCart(choice4, "gummyBear", cartValue, amount4);
});
trashCan5.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.pineappleMango;
  deleteFromCart(choice5, "pineappleMango", cartValue, amount5);
});
trashCan6.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.bubblegumIce;
  deleteFromCart(choice6, "bubblegumIce", cartValue, amount6);
});
trashCan7.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.strawberryIcecream;
  deleteFromCart(choice7, "strawberryIcecream", cartValue, amount7);
});
trashCan8.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.orangeSoda;
  deleteFromCart(choice8, "orangeSoda", cartValue, amount8);
});
trashCan9.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.colaIce;
  deleteFromCart(choice9, "colaIce", cartValue, amount9);
});
trashCan10.addEventListener("click", () => {
  let cartValue = cartContent.flavorAmounts.honeydewMelon;
  deleteFromCart(choice10, "honeydewMelon", cartValue, amount10);
});

const cartRendering = () => {
  freeVapeHandler();
  totalPrice.textContent = cartContent.totalPrice.toFixed(2);

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
      if (key === "colaIce") {
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

document.onkeydown = function (e) {
  if (e.key === "Escape") {
    checkoutCart.style.display = "none";
  }
};

hideCart2.addEventListener("click", () => {
  customerDetails.classList.add("hidden");
  checkoutCart.style.display = "none";
  if (someArray.length === 2) {
    someArray.pop();
  }
  menuCover.classList.add("hidden");
  cartContent.totalPrice = cartContent.totalCount * 9.95;
  discountPercentage.classList.add("hidden");
  correctOrder.classList.remove("cart-finished");
  freeVapeOption1.value = "strawberryBanana";
  freeVapeOption2.value = "strawberryBanana";
  couponLabel.style.color = "white";
  couponInput.placeholder = " ";
  couponSubmit.style.backgroundColor = "white";
  couponSubmit.style.color = "black";
  cartContent.discount = false;
  allInputs.classList.remove("hidden");
  verzendGegevens.classList.remove("hidden");
  finalText1.classList.add("hidden");
  finalText2.classList.add("hidden");
});

hideCart.addEventListener("click", () => {
  checkoutCart.style.display = "none";
  if (someArray.length === 2) {
    someArray.pop();
  }
  menuCover.classList.add("hidden");
  cartContent.totalPrice = cartContent.totalCount * 9.95;
  discountPercentage.classList.add("hidden");
  correctOrder.classList.remove("cart-finished");
  freeVapeOption1.value = "strawberryBanana";
  freeVapeOption2.value = "strawberryBanana";
  couponLabel.style.color = "white";
  couponInput.placeholder = " ";
  couponSubmit.style.backgroundColor = "white";
  couponSubmit.style.color = "black";
  cartContent.discount = false;
  allInputs.classList.remove("hidden");
  verzendGegevens.classList.remove("hidden");
  finalText1.classList.add("hidden");
  finalText2.classList.add("hidden");
});
mainMenu.addEventListener("click", () => {
  customerDetails.classList.add("hidden");
  checkoutCart.style.display = "none";
  if (someArray.length === 2) {
    someArray.pop();
  }
  menuCover.classList.add("hidden");
  cartContent.totalPrice = cartContent.totalCount * 9.95;
  discountPercentage.classList.add("hidden");
  correctOrder.classList.remove("cart-finished");
  freeVapeOption1.value = "strawberryBanana";
  freeVapeOption2.value = "strawberryBanana";
  couponLabel.style.color = "white";
  couponInput.placeholder = " ";
  couponSubmit.style.backgroundColor = "white";
  couponSubmit.style.color = "black";
  cartContent.discount = false;
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
  cartContent.totalPrice += +(initValue1 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue2 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue3 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue4 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue5 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue6 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue7 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue8 * 9.95).toFixed(2);
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
  cartContent.totalPrice += +(initValue9 * 9.95).toFixed(2);
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.colaIce += initValue9;
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
  cartContent.totalPrice += +(initValue10 * 9.95).toFixed(2);
  cartAmount.textContent = cartContent.totalCount;
  cartContent.flavorAmounts.honeydewMelon += initValue10;
  initValue10 = 0;
  amount10.textContent = initValue10;
});
