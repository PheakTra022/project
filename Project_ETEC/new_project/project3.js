const openShop = document.querySelector(".shop");
const closeShop = document.querySelector(".closeShop");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");
openShop.addEventListener("click", () =>{
    body.classList.add("active")
})
closeShop.addEventListener("click", () =>{
    body.classList.remove("active")
})
let prodcuts = [
    {
        id: 1,
        name: "T-shirt",
        images: "nike_1.jpg",
        price: 100,
    },
    {
        id: 2,
        name: "T-shirt",
        images: "nike_2.jpg",
        price: 100,
    },
    {
        id: 3,
        name: "T-shirt",
        images: "nike_3.jpg",
        price: 100,
    },
    {
        id: 4,
        name: "T-shirt",
        images: "nike_4.jpg",
        price: 100,
    },
    {
        id: 5,
        name: "T-shirt",
        images: "nike_5.jpg",
        price: 100,
    },
    {
        id: 6,
        name: "T-shirt",
        images: "nike_6.jpg",
        price: 100,
    },
]

let listCards = [];

const initApp = () =>{
    prodcuts.forEach((value , key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="img/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to card</button>
        `;
        list.appendChild(newDiv)
    })
}
initApp()


const addToCard = (key) =>{
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(prodcuts[key]));
        listCards[key].quantity = 1
    }
    reloadcard();
}
const reloadcard = () =>{
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src ="img/${value.image}"</div>
                <div class ="cardTitle">${value.name}</div>
                <div class ="cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style="background-color: #560bad"
                    class="cardButton" onclick ="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class ="count">${count}</div>
                    <button style="background-color: #560bad"
                    class="cardButton" onclick ="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity)=>{
    if(quantity==0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * prodcuts[key].price
    }
    reloadcard()
}