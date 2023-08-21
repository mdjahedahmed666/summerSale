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
let itemCounter = 0;
const addedLi = [];

function showName(id,name){
  console.log(id);
  console.log(name);
    // get the Ol to show name
    const showName = document.getElementById(id);
    const li = document.createElement("li");
    itemCounter++;
    li.textContent = `${itemCounter}. ${name}`;
    li.style.fontWeight = "bold";
    li.style.fontSize = "24px";
    li.style.marginBottom = "12px";
    showName.appendChild(li);
    addedLi.push(li);
}

function handleKAccessories() {
const name = getAccessoriesName("kAccessories1");
showName("showName",name);

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


function handleCardHomeCooker() {
const name = getAccessoriesName("cooker");
showName("showName",name);

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
const name = getAccessoriesName("kAccessories2");
showName("showName",name);

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
const name = getAccessoriesName("capName");
showName("showName",name);
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
const name = getAccessoriesName("jerseyName");
showName("showName",name);
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
  
const name = getAccessoriesName("catesName");
showName("showName",name);
  
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

function handleApplyBtn() {
  const coupon = document.getElementById("coupon");
  const couponValue = coupon.value;
  const couponConst = "SELL200";
  if (couponValue === couponConst) {

    // get total price
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

function resetValue(){
  // get total price
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = "0";
  // get the Discount el
  const discount = document.getElementById("discount");
  discount.textContent = "0";
  // get the total el
  const total = document.getElementById("total");
  total.textContent = "0";

  //reset the coupon value
  document.getElementById("coupon").value= "";

  //reset the ol
  const ol = document.getElementById("showName");
  for (const li of addedLi) {
      ol.removeChild(li);
    }
    addedLi.length = 0;

}
