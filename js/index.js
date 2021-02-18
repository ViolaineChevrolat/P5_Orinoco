// les ours en page d'accueil

const teddies = document.getElementById('nounours');


fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(donnees => {


    for (let i = 0; i < donnees.length; i++) {
        let newCardTeddy = document.createElement('div');

        newCardTeddy.className = `col-12 col-md-5`;
        newCardTeddy.style.alignItems = `center`;
        newCardTeddy.style.cursor = `pointer`;
        newCardTeddy.style.border = `0.5px solid black`;
        newCardTeddy.style.margin = `1em 0.5em`;
        newCardTeddy.style.padding = `0`;
        
        let newLink = document.createElement('a');
        let newName = document.createElement('h2');
        let newId = document.createElement('h4')
        let newImageUrl = document.createElement('img');
        let newColors = document.createElement('p');
        let newPrice = document.createElement('h3');

        newName.innerText = donnees[i].name;
        //newLink.dataset.id = donnees[i]._id;
        newLink.href = `produits.html?id=${donnees[i]._id}`;
        console.log(newLink);
        //newId.innerText = donnees[i]._id;
        //newId.style.display = 'none';
        newPrice.innerText = `${donnees[i].price} euros`;
        newPrice.style.textAlign = 'center';
        newColors.innerText = `Disponible dans les coloris : ${donnees[i].colors}`;
        newColors.style.textAlign = 'center';
        newImageUrl.src = donnees[i].imageUrl;
        newImageUrl.style.maxWidth = '100%';
        newImageUrl.style.objectFit = 'cover';
        newImageUrl.style.padding = '0.5em';
        newImageUrl.style.marginBottom = '1em';

        teddies.appendChild(newCardTeddy);
        newCardTeddy.appendChild(newLink);
        newLink.insertAdjacentElement('afterbegin', newColors);
        newLink.insertAdjacentElement('afterbegin', newPrice);
        newLink.insertAdjacentElement('afterbegin', newName);
        newLink.insertAdjacentElement('afterbegin', newImageUrl);
        newLink.insertAdjacentElement('afterbegin', newId);

        //const teddy = document.querySelector('.col-12 .col-md-5');

        }


    })

    .catch((error) => {
        console.log(error);
})




