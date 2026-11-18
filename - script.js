
const SHOP_PHONE = "919906083732";

let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();
  alert(name + " added to your cart!");
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItems.textContent = "Your cart is empty.";
    cartTotal.textContent = "Total: ₹0";
    return;
  }

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const line = document.createElement("div");
    line.className = "cart-line";

    const details = document.createElement("span");
    details.textContent =
      `${item.name} × ${item.quantity} — ₹${subtotal}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove " + item.name);
    removeButton.onclick = () => removeFromCart(index);

    line.appendChild(details);
    line.appendChild(removeButton);
    cartItems.appendChild(line);
  });

  cartTotal.textContent = "Total: ₹" + total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function enquire(productName) {
  const message =
    `Hello Royal Trading Agency! I am interested in ${productName}. Please share more details.`;

  const url =
    `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a product first.");
    return;
  }

  let message = "Hello Royal Trading Agency! I want to enquire about this order:\n\n";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    message +=
      `${item.name} × ${item.quantity} = ₹${subtotal}\n`;
  });

  message += `\nTotal: ₹${total}`;
  message += "\n\nPlease confirm availability and delivery details.";

  const url =
    `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

updateCart();
