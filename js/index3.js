/* = function (url) {

}*/


const getTeddies = async function() {
    try {
        let response = await fetch('http://localhost:3000/api/teddies')
        if(response.ok) {
            let data = await response.json()
            console.log(data)
        } else {
            console.error('retour serveur : ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

//getTeddies();
//console.log(getTeddies);


const teddies = document.getElementById('nounours');




for (let i = 0; i < getTeddies.length; i++) {
    
let newCardTeddy = document.createElement('div');
newCardTeddy.className = `col-12 col-md-6`;
newCardTeddy.style.cursor = `pointer`;


let newName = document.createElement('h2');
let newId = document.createElement('h4')
let newImageUrl = document.createElement('img');
let newColors = document.createElement('p');
let newPrice = document.createElement('h3');

newName.innerText = getTeddies[i].name;
newId.innerText = getTeddies[i]._id;
newId.style.display = 'none';
newPrice.innerText = `${getTeddies[i].price} euros`;
newPrice.style.textAlign = 'center';
newColors.innerText = `Disponible dans les coloris : ${getTeddies[i].colors}`;
newColors.style.textAlign = 'center';
newImageUrl.src = getTeddies[i].imageUrl;
newImageUrl.style.maxWidth = '100%';
newImageUrl.style.objectFit = 'cover';
newImageUrl.style.padding = '0.5em';
newImageUrl.style.marginBottom = '1em';

teddies.appendChild(newCardTeddy);
newCardTeddy.insertAdjacentElement('afterbegin', newColors);
newCardTeddy.insertAdjacentElement('afterbegin', newPrice);
newCardTeddy.insertAdjacentElement('afterbegin', newName);
newCardTeddy.insertAdjacentElement('afterbegin', newImageUrl);
newCardTeddy.insertAdjacentElement('afterbegin', newId);

}

