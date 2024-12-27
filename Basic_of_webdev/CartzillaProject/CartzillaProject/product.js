let elementsel = document.querySelector(".elements");
let cartitemsel = document.querySelector(".offcanvas-body");
let itemsincartel = document.querySelector(".x");
let subtotalel = document.querySelector(".subtotal");

const products = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujiya",
    desc: "Snacks & Munchies",
    stock: 10,
    price: 18,
    qty: 0,
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    desc: "Bakery & Biscuits",
    stock: 8,
    price: 24,
    qty: 0,
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    desc: "Bakery & Biscuits",
    stock: 9,
    price: 32,
    qty: 0,
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    desc: "Snacks & Munchies",
    stock: 10,
    price: 3,
    qty: 0,
  },
  {
    id: 5,
    name: "Salted Instant Popcorn",
    desc: "Instant Food",
    stock: 5,
    price: 13,
    qty: 0,
  },
  {
    id: 6,
    name: "Blueberry Greek Yogurt",
    desc: "Dairy, Bread & Eggs",
    stock: 6,
    price: 18,
    qty: 0,
  },
  {
    id: 7,
    name: "Britannia Cheese Slices",
    desc: "Dairy, Bread & Eggs",
    stock: 7,
    price: 24,
    qty: 0,
  },
  {
    id: 8,
    name: "Kellog's Original Cereals",
    desc: "Instant Food",
    stock: 8,
    price: 32,
    qty: 0,
  },
  {
    id: 9,
    name: "Slurrp Millet Chocolate",
    desc: "Snacks & Munchies",
    stock: 9,
    price: 3,
    qty: 0,
  },
  {
    id: 10,
    name: "Amul Butter - 500g",
    desc: "Dairy, Bread & Eggs",
    stock: 10,
    price: 13,
    qty: 0,
  },
];

function displayproduct() {
  products.forEach((i) => {
    elementsel.innerHTML += `
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <img src="./images/images/${i.id}.jpg" height="140" width="140" />
                        <p class="card-text text-muted">${i.desc}</p>
                        <a href="details.html" style="font-size:15px;">${i.name}</a>
                        <div class="d-flex" style="font-size:12px;">
                            <p>$${i.price}</p>
                            <button type="button" class="btn btn-sm btn-success" onclick="addtocart(${i.id})">+ Add</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
}

displayproduct();

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();

function addtocart(id) {
  if (cart.some((item) => item.id === id)) {
    changeqty("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({ ...item, qty: 1 });
  }
  updatecart();
}

function updatecart() {
  rendercartitem();
  rendersubstotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

function rendercartitem() {
  cartitemsel.innerHTML = "";
  cart.forEach((item) => {
    cartitemsel.innerHTML += `
            <table class="table w-100">
                <tbody>
                    <tr>
                        <td><img src="./images/images/${item.id}.jpg" height="50" width="50" /></td>
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td>
                            <svg onclick="changeqty('minus',${item.id})" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                            ${item.qty}
                            <svg onclick="changeqty('plus',${item.id})" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </td>
                        <td>
                            <i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
  });
}

function changeqty(action, id) {
  cart = cart.map((item) => {
    let qty = item.qty;
    if (item.id === id) {
      if (action === "minus" && qty > 1) qty--;
      if (action === "plus" && qty < item.stock) qty++;
    }
    return { ...item, qty };
  });
  updatecart();
}

function removeitem(id) {
  cart = cart.filter((item) => item.id !== id);
  updatecart();
}

function rendersubstotal() {
  let totalprice = 0,
    totalitems = 0;
  cart.forEach((item) => {
    totalprice += item.price * item.qty;
    totalitems += item.qty;
  });
  subtotalel.innerHTML = `Subtotal (${totalitems} items): $${totalprice.toFixed(
    2
  )}`;
  itemsincartel.innerHTML = totalitems;
}
