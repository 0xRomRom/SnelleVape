"use strict";

const cloudLogo = document.querySelector(".fa-cloud-bolt");
const home = document.querySelector(".home");
const faHouse = document.querySelector(".fa-house");
const stats = document.querySelector(".stats");
const faChartColumn = document.querySelector(".fa-chart-column");
const message = document.querySelector(".message");
const faEnvelope = document.querySelector(".fa-envelope");
const earnings = document.querySelector(".earnings");
const faSackDollar = document.querySelector(".fa-sack-dollar");

const newOrderCounter = document.querySelector(".count-inner");
const newMessageCounter = document.querySelector(".count-inner2");
const homePanel = document.querySelector(".home-panel");
const ordersPanel = document.querySelector(".orders-panel");
const messagesPanel = document.querySelector(".messages-panel");
const earningsPanel = document.querySelector(".earnings-panel");
const ordersBox = document.querySelector(".orders-box");

//Init//
home.style.transition = "all 0.1s ease-in-out";
home.style.marginLeft = "1.2rem";
faHouse.style.fontSize = "3rem";
let newOrderCount = 0;
let newMessageCount = 0;
let keyArray = [];
newOrderCounter.textContent = newOrderCount;
newMessageCounter.textContent = newOrderCount;
ordersPanel.classList.add("hidden");
messagesPanel.classList.add("hidden");
earningsPanel.classList.add("hidden");
////////

const orderLoop = (data) => {
  for (let [key] in Object.entries(data)) {
    let keyIncrease = +key + 1;
    const div = document.createElement("div");
    div.innerText = `${keyIncrease} `;
    document.getElementById("obx-count").appendChild(div);
  }
  let orderLength = Object.values(data).length;
  for (let i = 0; i < orderLength; i++) {
    const div = document.createElement("div");
    const anotherDiv = document.createElement("div");
    div.innerText = Object.values(data)[i].customerDetails.naam;
    anotherDiv.innerText = `Qty: ${Object.values(data)[i].totalCount}`;

    document.getElementById("obx-email").appendChild(div);
    document.getElementById("obx-amount").appendChild(anotherDiv);
  }
};

const orderFetcher = async () => {
  const response = await fetch(
    "https://snelle-vape-default-rtdb.europe-west1.firebasedatabase.app/Bestellingen.json"
  );
  if (!response.ok) {
    throw new Error("Could not fetch orders from server");
  }
  const data = await response.json();
  orderLoop(data);
};
orderFetcher();

cloudLogo.addEventListener("mouseover", () => {
  const int1 = Math.floor(Math.random() * 255 + 1);
  const int2 = Math.floor(Math.random() * 255 + 1);
  const int3 = Math.floor(Math.random() * 255 + 1);
  cloudLogo.style.color = `rgb(${int1}, ${int2}, ${int3})`;
});

cloudLogo.addEventListener("mouseleave", () => {
  cloudLogo.style.color = `white`;
});

const menuBoxHandler = (menu, icon, b1, b2, b3, r1, r2, r3) => {
  //Modify clicked Icon
  menu.style.transition = "all 0.1s ease-in-out";
  menu.style.marginLeft = "1.2rem";
  icon.style.fontSize = "3rem";
  //Reset others
  b1.style.marginLeft = "0rem";
  b2.style.marginLeft = "0rem";
  b3.style.marginLeft = "0rem";
  r1.style.fontSize = "2.5rem";
  r2.style.fontSize = "2.5rem";
  r3.style.fontSize = "2.5rem";
};

home.addEventListener("click", () => {
  menuBoxHandler(
    home,
    faHouse,
    stats,
    message,
    earnings,
    faChartColumn,
    faEnvelope,
    faSackDollar
  );
  earningsPanel.classList.add("hidden");
  messagesPanel.classList.add("hidden");
  ordersPanel.classList.add("hidden");
  homePanel.classList.remove("hidden");
  homePanel.classList.add("fadeDivIn");
});

stats.addEventListener("click", () => {
  menuBoxHandler(
    stats,
    faChartColumn,
    home,
    message,
    earnings,
    faHouse,
    faEnvelope,
    faSackDollar
  );
  earningsPanel.classList.add("hidden");
  messagesPanel.classList.add("hidden");
  homePanel.classList.add("hidden");
  ordersPanel.classList.remove("hidden");
  ordersPanel.classList.add("fadeDivIn");
});

message.addEventListener("click", () => {
  menuBoxHandler(
    message,
    faEnvelope,
    home,
    earnings,
    stats,
    faHouse,
    faChartColumn,
    faSackDollar
  );
  ordersPanel.classList.add("hidden");
  earningsPanel.classList.add("hidden");
  homePanel.classList.add("hidden");
  messagesPanel.classList.remove("hidden");
  messagesPanel.classList.add("fadeDivIn");
});

earnings.addEventListener("click", () => {
  menuBoxHandler(
    earnings,
    faSackDollar,
    stats,
    message,
    home,
    faChartColumn,
    faEnvelope,
    faHouse
  );
  ordersPanel.classList.add("hidden");
  homePanel.classList.add("hidden");
  messagesPanel.classList.add("hidden");
  earningsPanel.classList.remove("hidden");
  earningsPanel.classList.add("fadeDivIn");
});
