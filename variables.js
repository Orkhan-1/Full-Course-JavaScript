// const - for fixed values that never change
const TAX_RATE = 0.08;

// let - for values that change over time
let finalPrice = 0;
let itemCount = 0;

// var - function-scoped variable
function addItem(price) {
  var discount = 0;

  if (price > 100) {
    discount = 10;
  }

  let priceAfterDiscount = price - discount;
  finalPrice += priceAfterDiscount;
  itemCount++;

  console.log(`Added item: $${priceAfterDiscount}`);
}

addItem(120);
addItem(80);

// const used for calculated total with tax (not reassigned after this)
const totalWithTax = finalPrice + finalPrice * TAX_RATE;

console.log(`Items in cart: ${itemCount}`);
console.log(`Cart total price tax: $${finalPrice.toFixed(2)}`);
console.log(`Total with tax: $${totalWithTax.toFixed(2)}`);
