const teddyList = document.querySelector('.teddy-list');
//const teddyForm = document.querySelector('.teddy-form');

let panier = localStorage.getItem("panier");
if (panier != null) 

// localStorage.setItem('id','Chris');
// var myName = localStorage.getItem('id');
// myName


// let panier = JSON.parse(localStorage.getItem("panier")) // pour récupérer un tableau de données

// var tab = [1, 2, 3, 4];
// localStorage.setItem("tab", JSON.stringify(tab));

// function initBasket() {
//     var basket = localStorage.getItem("basket");
//     if (basket != null) {
//         return JSON.parse(basket);
//     }else{
//         return [];
//     }
// }

// function addToBasket(teddy) {
//     var basket = initBasket();
//     var teddy = basket.find(teddy => teddy.id == id);
//     teddy.quantity = 1;
//     if()
//     basket.push(teddy);
//     saveBasket(basket);
// }

// function removeFromBasket (teddy) {

// }

// function saveBasket(basket) {
//     localStorage.setItem("basket", JSON.stringify(basket));
// }

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    console.log(key, localStorage.getItem(key))
}