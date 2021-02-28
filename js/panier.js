console.log(localStorage);

const tousLesTeddies = document.querySelector('#panier');
console.log(tousLesTeddies);
const montantTotal = document.querySelector('#montant');

//creation de variables de base pour la récupération du panier du localStorage
let panierTeddies = [];
let panier;

const recupTeddies = function () {

    let lignesPanier;
    let prixTotalPanier = 0;

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key));        

        lignesPanier += 
        `<tr>
        <td><img src="${data.imageUrl}" width= 100px></td>
        <td><p style="font-size: 1em;">${data._id}</p>
        <td><p style="font-size: 1.5em;">${data.name}<p></td>
        <td><h3 id="prix">${data.prixTotal}</h3></td>
        </tr>`;

        prixTotalPanier += data.prixTotal;
        console.log(prixTotalPanier);
    }

    tousLesTeddies.innerHTML = lignesPanier;

    let thePrix = document.createElement('td')
    thePrix.style.fontSize = '1.8em';
    thePrix.style.fontWeight = '600';
    thePrix.style.textAlign = 'center';
    thePrix.innerHTML = `Total du panier : ${prixTotalPanier} Euros`;
    montantTotal.appendChild(thePrix);

    return panier;
}

recupTeddies();
panierTeddies.push(panier);
console.log(panierTeddies);


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

//je dois récupérer la valeur du cntact sous forme d'objet

//envoi de la commande en POST via l'API
let validation = document.querySelector('main');
console.log(validation);
let buttonEnvoi = document.querySelector('.valide-commande');
console.log(buttonEnvoi);

buttonEnvoi.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/teddies',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
})