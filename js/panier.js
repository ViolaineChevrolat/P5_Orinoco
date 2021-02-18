// const teddyList = document.querySelector('.teddy-list');
// //const teddyForm = document.querySelector('.teddy-form');

// let panier = localStorage.getItem("panier");
// if (panier != null) 

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




// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(key, localStorage.getItem(key))
// }


//const panier = async localStorage.storage.getItem("monTeddy");
//let teddy = localStorage.getItem('teddy');
//console.log(teddy)

// var MonPanier = (function() {
//     panier = [];
//     function Teddy() {
//         localStorage.getItem('teddy');
//     }
    
//     function savepanier() {
//     sessionStorage.setItem('MonPanier', JSON.stringify(panier));
//     }
    
//     function loadpanier() {
//     panier = JSON.parse(sessionStorage.getItem('MonPanier'));
//     }
//     if (sessionStorage.getItem("MonPanier") != null) {
//     loadpanier();
//     }
    
//     var obj = {};
    
//     obj.ajouter_produit_dans_panier = function(name, price, qte) {
//     for(var item in panier) {
//       if(panier[item].name === name) {
//     panier[item].qte ++;
//     savepanier();
//     return;
//       }
//     }
//     var item = new Item(name, price, qte);
//     panier.push(item);
//     savepanier();
//     }
    
//     obj.setCountForItem = function(name, qte) {
//     for(var i in panier) {
//       if (panier[i].name === name) {
//     panier[i].qte = qte;
//     break;
//       }
//     }
//     };
    
//     obj.enlever_produit_de_panier = function(name) {
//       for(var item in panier) {
//     if(panier[item].name === name) {
//       panier[item].qte --;
//       if(panier[item].qte === 0) {
//     panier.splice(item, 1);
//       }
//       break;
//     }
//     }
//     savepanier();
//     }
    
//     obj.enlever_produit_de_panier_tous = function(name) {
//     for(var item in panier) {
//       if(panier[item].name === name) {
//     panier.splice(item, 1);
//     break;
//       }
//     }
//     savepanier();
//     }
    
//     obj.clearpanier = function() {
//     panier = [];
//     savepanier();
//     }
    
//     obj.totalQte = function() {
//     var totalQte = 0;
//     for(var item in panier) {
//       totalQte += panier[item].qte;
//     }
//     return totalQte;
//     }
    
//     obj.totalpanier = function() {
//     var totalpanier = 0;
//     for(var item in panier) {
//       totalpanier += panier[item].price * panier[item].qte;
//     }
//     return Number(totalpanier.toFixed(2));
//     }
    
//     obj.listpanier = function() {
//     var panierCopy = [];
//     for(i in panier) {
//       item = panier[i];
//       itemCopy = {};
//       for(p in item) {
//     itemCopy[p] = item[p];
//       }
//       itemCopy.total = Number(item.prix * item.count).toFixed(2);
//       panierCopy.push(itemCopy)
//     }
//     return panierCopy;
//     }
    
//     return obj;
//     })();

const teddyParams = (new URL(document.location)).searchParams;
const teddyId = teddyParams.get('id');
console.log(teddyId);

async function teddyFetch() {
  await fetch('http://localhost:3000/api/teddies/' + teddyId)
  .then(response => response.json())
  .then(donnees => {

  function teddyStorage() {
    console.log(donnees);
    if(donnees != undefined || donnees != null){
        localStorage.getItem(teddyId);
        //console.log(teddyRecup);

    } else {
        alert(`l'accès n'est pas établi`)
    };
  }
  teddyStorage();

})
}





// formulaire

const inpNom = document.getElementById('nom');
console.log(inpNom);
const inpPrenom = document.getElementById('prenom');
const inpMail = document.getElementById('mail');
const inpRue = document.getElementById('rue');
const inpCP = document.getElementById('code-postal');
const inpVille = document.getElementById('ville');
const allSpan = document.querySelectorAll('span');
console.log(allSpan);

inpNom.addEventListener('input', (e) => {
    if(e.target.value.length >=3) {
        allSpan[0].style.display ="none";
    } else {
        allSpan[0].style.display ="inline";
    }

})

inpMail.addEventListener('input', (e) => {

    const regexMail = /\S+@\S+\.\S+/;
    if(e.target.value.search(regexMail) === 0) {
        allSpan[2].style.display ="none";

    } else if(e.target.value.search(regexMail) === -1) {
        allSpan[2].style.display ="inline";
    }
})

inpCP.addEventListener('input', (e) => {

    const regexCP = /[0-9]/;
    if(e.target.value.search(regexCP) === 0) {
        allSpan[4].style.display ="none";

    } else if(e.target.value.search(regexCP) === -1) {
        allSpan[4].style.display ="inline";
    }
})

inpVille.addEventListener('input', (e) => {

    const regexVille = /[^0-9]/;
    if(e.target.value.search(regexVille) === 0) {
        allSpan[5].style.display ="none";

    } else if(e.target.value.search(regexVille) === -1) {
        allSpan[5].style.display ="inline";
    }
})