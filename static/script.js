// Rewritten Scrap Logic

var cartCount = 0;
var totalMoney = 0;

function addToCart(name, price) {
  cartCount = cartCount + 1;
  totalMoney += price;

  // Refreshing the ui
  document.getElementById('cart-link').innerText = "Cart (" + cartCount + ")";

  console.log("Added " + name + " to cart. Total is now $" + totalMoney);

  // Show them big boss message...
  var msg = name + " added!";
  )






}
