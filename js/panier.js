console.log(localStorage);

const tousLesTeddies = document.querySelector('#panier');
console.log(tousLesTeddies);
const montantTotal = document.querySelector('#montant');

//creation de variables de base pour la récupération du panier du localStorage
let products = [];
let teddy;

const recupTeddies = function () {

    let lignesPanier;
    let prixTotalPanier = 0;

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key));        

        lignesPanier += 
        `<tr width= 100%>
        <td width= 25%><img src="${data.imageUrl}" width= 100%></td>
        <td width= 25%><p style="font-size: 1em;">${data._id}</p>
        <td width= 25%><p style="font-size: 1.2em;">${data.name}<p></td>
        <td width= 25%><h3 id="prix">${data.prixTotal}</h3></td>
        </tr>`;

        prixTotalPanier += data.prixTotal;

        products.push(data._id);
    }
    
    if(localStorage.length > 0){
        tousLesTeddies.innerHTML = lignesPanier;
    }else{
        tousLesTeddies.innerHTML = `<h3>Votre panier est vide</h3>`;
    }

    let thePrix = document.createElement('td')
    thePrix.style.fontSize = '1.2em';
    thePrix.style.fontWeight = '600';
    thePrix.style.textAlign = 'center';
    thePrix.innerHTML = `Total du panier : ${prixTotalPanier} Euros`;
    montantTotal.appendChild(thePrix);
    
}

recupTeddies();
console.log(products);


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

//je teste chaque valeur d'input
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

let contact;

let buttonEnvoi = document.querySelector('.valide-commande');

buttonEnvoi.addEventListener('click', (e) => {
    if(e.target.value != null){
        contact = {
            lastName: inpPrenom.value,
            firstName: inpNom.value,
            address: inpVille.value,
            city: inpRue.value,
            email: inpMail.value
        };

        let ordreConfirme = {contact, products};

        if(confirm(`Voulez-vous valider la commande ?`)){
            fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ordreConfirme)
            })
            .then(reponse => {
                return reponse.json()
            })
            .then(reponse => { 
                sessionStorage.setItem('order', reponse.orderId)
                localStorage.clear();
                location.href ="commande.html";               
            })
        }
    } 
})

