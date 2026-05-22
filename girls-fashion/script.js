/* ==========================
   Mobile Menu
========================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

menuBtn.addEventListener("click", ()=>{

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

}


/* ==========================
 Product Database
========================== */

const products = {

1: {

name:"Floral Summer Dress",

price:"₹1,299",

image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",

description:"A premium floral summer dress designed for comfort, elegance and everyday styling. Perfect for parties, casual outings and festive occasions.",

sizes:["XS","S","M","L","XL"],

colors:["Pink","White","Peach","Lavender"]

},

2: {

name:"Premium Denim Jacket",

price:"₹1,899",

image:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80",

description:"Stylish denim jacket with premium finishing. Best for casual fashion, college wear and modern western styling.",

sizes:["S","M","L","XL"],

colors:["Blue","Black","Sky Blue"]

},

3: {

name:"Elegant Party Wear",

price:"₹2,499",

image:"https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",

description:"Luxury party wear outfit with elegant design and premium fabric feel.",

sizes:["XS","S","M","L"],

colors:["Red","Maroon","Black","Gold"]

},

4: {

name:"Classic White Outfit",

price:"₹1,599",

image:"https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=900&q=80",

description:"Classic white premium outfit with clean elegant look.",

sizes:["S","M","L","XL"],

colors:["White","Cream","Beige"]

}

};



/* ==========================
 Product Page Logic
========================== */

let selectedSize="";
let selectedColor="";
let quantity=1;

const params = new URLSearchParams(window.location.search);

const productId=params.get("id");

if(productId && products[productId]){

const product=products[productId];

const productName=document.getElementById("productName");
const productPrice=document.getElementById("productPrice");
const productImage=document.getElementById("productImage");
const productDescription=document.getElementById("productDescription");

if(productName){

productName.textContent=product.name;

productPrice.textContent=product.price;

productImage.src=product.image;

productDescription.textContent=product.description;

}


/* ==========================
 Size Options
========================== */

const sizeOptions=document.getElementById("sizeOptions");

if(sizeOptions){

product.sizes.forEach(size=>{

const btn=document.createElement("button");

btn.className="option-btn";

btn.textContent=size;

btn.addEventListener("click",()=>{

selectedSize=size;

document.querySelectorAll(
"#sizeOptions .option-btn"
).forEach(b=>{

b.classList.remove("active");

});

btn.classList.add("active");

updateWhatsApp(product);

});

sizeOptions.appendChild(btn);

});

}



/* ==========================
 Color Options
========================== */

const colorOptions=document.getElementById("colorOptions");

if(colorOptions){

product.colors.forEach(color=>{

const btn=document.createElement("button");

btn.className="option-btn";

btn.textContent=color;

btn.addEventListener("click",()=>{

selectedColor=color;

document.querySelectorAll(
"#colorOptions .option-btn"
).forEach(b=>{

b.classList.remove("active");

});

btn.classList.add("active");

updateWhatsApp(product);

});

colorOptions.appendChild(btn);

});

}


/* ==========================
 Related Products
========================== */

const relatedProducts=document.getElementById(
"relatedProducts"
);

if(relatedProducts){

Object.keys(products).forEach(id=>{

if(id!=productId){

const item=products[id];

relatedProducts.innerHTML +=`

<a href="product-details.html?id=${id}"
class="related-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price}</p>

</a>

`;

}

});

}


updateWhatsApp(product);

}



/* ==========================
 Quantity
========================== */

function changeQty(value){

quantity+=value;

if(quantity<1){

quantity=1;

}

const qty=document.getElementById("quantity");

if(qty){

qty.textContent=quantity;

}

if(productId){

updateWhatsApp(products[productId]);

}

}



/* ==========================
 WhatsApp Order
========================== */

function updateWhatsApp(product){

const message=

`Hello, I want to order this product:%0A%0A`

+

`Product: ${product.name}%0A`

+

`Price: ${product.price}%0A`

+

`Size: ${selectedSize || "Not selected"}%0A`

+

`Color: ${selectedColor || "Not selected"}%0A`

+

`Quantity: ${quantity}%0A%0A`

+

`Please confirm availability.`;


const whatsappNumber="917349753030";


const whatsappLink=

`https://wa.me/${whatsappNumber}?text=${message}`;


const orderBtn=

document.getElementById("whatsappOrder");

if(orderBtn){

orderBtn.href=whatsappLink;

}

}