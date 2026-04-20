let cartCount = 0;
let totalMoney = 0;

function addToCart(name, price) {
    cartCount += 1;
    totalMoney += price;

    const badge = document.getElementById("cart-badge");
    if (badge) badge.textContent = String(cartCount);

    const msg = document.getElementById("msg");
    if (msg) {
        msg.textContent = `${name} added to bag!`;
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
        }, 1200);
    }

    console.log(`Added ${name}. Total: $${totalMoney}`);
}
