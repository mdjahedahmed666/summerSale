function getAccessoriesName(id){
    const kAccessories1 = document.getElementById(id);
  const kAccessoriesName = kAccessories1.innerText;
  return kAccessoriesName;
}
function getAccessoriesPrice (id){
    const priceEl = document.getElementById(id);
    const priceElString = priceEl.innerText;
    const Price = parseFloat(priceElString);
    return Price;
}
function getTotalPrice(id){
    const totalPriceEl = document.getElementById(id);
  const totalPriceElString = totalPriceEl.innerText;
  const totalPrice = parseFloat(totalPriceElString);
return totalPrice;
}

function handleKAccessories() {
  let itemCounter = 0;
const name = getAccessoriesName("kAccessories1");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("kAPrice");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}

function handleApplyBtn() {
  const coupon = document.getElementById("coupon");
  const couponValue = coupon.value;
  const couponConst = "SELL200";
  if (couponValue === couponConst) {

  // get the total price el
  // const totalPriceEl = document.getElementById("totalPrice");
  // const totalPriceElString = totalPriceEl.innerText;
  // const totalPrice = parseFloat(totalPriceElString);
  const totalPrice = getTotalPrice("totalPrice");

    // get the total el
    const totalEl = document.getElementById("total");

    // get the Discount el
    const discountEl = document.getElementById("discount");

    //set discount
    const disCountTotal = totalPrice * 0.2;
    discountEl.innerText = disCountTotal.toFixed(2);

    //set the total
    totalEl.innerText = totalPrice - disCountTotal;
  }
}


function handleCardHomeCooker() {
  let itemCounter = 0;
const name = getAccessoriesName("cooker");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("cookerPrice");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}

function handleKAccessories2() {
  let itemCounter = 0;
const name = getAccessoriesName("kAccessories2");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("kAPrice2");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}

function handleCardCap() {
  let itemCounter = 0;
const name = getAccessoriesName("capName");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("capPrice");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}

function handleCardJersey() {
  let itemCounter = 0;
const name = getAccessoriesName("jerseyName");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("jerseyPrice");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}

function handleCardCates() {
  let itemCounter = 0;
const name = getAccessoriesName("catesName");

  // get the Ol to show name
  const showName = document.getElementById("showName");
  const li = document.createElement("li");
  li.textContent = `${itemCounter + 1}. ${name}`;
  li.style.fontWeight = "medium";
  li.style.fontSize = "24px";
  li.style.marginBottom = "12px";
  showName.appendChild(li);
  itemCounter++;
//get the price of the accessories
const price = getAccessoriesPrice("catesPrice");

//get the total price 
const totalPrice = getTotalPrice("totalPrice");

const sum = totalPrice + price;
const totalPriceEl = document.getElementById("totalPrice");
totalPriceEl.innerText = sum;

  //   Get the Purchase button ref
  const purchaseBtn = document.getElementById("purchaseButton");
  if (sum > 0) {
    purchaseBtn.classList.remove("btn-disabled");
    purchaseBtn.classList.add("btn-secondary");
  }
  //   Get the Apply button ref
  const applyBtn = document.getElementById("applyButton");
  if (sum >= 200) {
    applyBtn.classList.remove("btn-disabled");
    applyBtn.classList.add("btn-secondary");
  }
}
