
const SHOP_PHONE = "919906083732";

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    alert(name + " added to your cart!");
}

function updateCart() {
    const items = document.getElementById("cart-items");
    const count = document.getElementById("cart-count");
    const total = document.getElementById("cart-total");

    items.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price;

        const div = document.createElement("p");
        div.textContent =
            (index + 1) + ". " + item.name + " - ₹" + item.price;

        items.appendChild(div);
    });

    if (cart.length === 0) {
        items.textContent = "Your cart is empty.";
    }

    count.textContent = cart.length;
    total.textContent = sum;
}

function clearCart() {
    cart = [];
    updateCart();
}

function enquire(product) {
    const message =
        "Hello Royal Trading Agency! I want to enquire about " + product + ".";

    window.open(
        "https://wa.me/" + SHOP_PHONE + "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add a product first.");
        return;
    }

    let message = "Hello Royal Trading Agency! I want to order:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += (index + 1) + ". " + item.name +
            " - ₹" + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal: ₹" + total;
    message += "\nPlease confirm availability and delivery details.";

    window.open(
        "https://wa.me/" + SHOP_PHONE + "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}

updateCart();
