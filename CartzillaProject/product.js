let elementsel = document.querySelector(".elements");
let cartitemsel = document.querySelector(".offcanvas-body");

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
    desc: "Bakery & Buiscuits",
    stock: 8,
    price: 24,
    qty: 0,
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    desc: "Bakery & Buiscuits",
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
    name: "Salted instant popcorn",
    desc: "Instant food",
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
    name: "Kellog's original cereals",
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
    elementsel.innerHTML += `    <div class="col-md-2">
    <div class="card">
    <div class="card-body">
      
      <img src="images/images/${i.id}.jpg" height="140" width="140">
      <div class="d-flex justify-content-center d-none">
      
       
      </div>
      
      <p class="card-text text-muted">${i.desc}</p>
      <a href="details.html"><p style="font-size:15px;">${i.name}</p></a>
      <div class="d-flex" style="font-size:12px;">
      <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star-half-stroke text-warning"></i>
      <p class="text-muted">4.5(149)</p>         
      </div>
      <div class="d-flex" style="font-size:12px;">
        <p>$${i.price}</p><p class="text-muted flex-grow-1">$24</p> 
        <button type="button" class="btn btn-sm btn-success" onclick="addtocart(${i.id})">+ Add</button>        
      </div>
    </div>
  </div>
  </div>    
</div>`;
  });
}

displayproduct();

let cart = [];

function addtocart(id) {
  //check if the product is already in there or not
  if (cart.some((item) => item.id === id)) {
    changeqty();
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({ ...item, qty: 1 });
  }
}

function changeqty() {}
