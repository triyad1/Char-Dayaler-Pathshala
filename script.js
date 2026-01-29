function copyNumber(number) {
  navigator.clipboard.writeText(number);
  alert("নাম্বার কপি হয়েছে: " + number);
}

let cart = [];
function addToCart(course) {
  cart.push(course);
  alert(course +
