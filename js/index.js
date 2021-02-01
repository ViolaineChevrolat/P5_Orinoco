// les ours en page d'accueil

const teddies = document.querySelector('.col-12', '.col-md-6');

fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(donnees => {
    

    for (let i = 0; i < donnees.length; i++) {

        var newCardTeddy = document.createElement('div');
        newCardTeddy.className = `card-body_teddy`;
        newCardTeddy.style.cursor = `pointer`;
   
        var newName = document.createElement('h2');
        let newId = document.createElement('h3')
        var newImageUrl = document.createElement('img');
        var newColors = document.createElement('p');
        var newPrice = document.createElement('h3');
        console.log(newId);

        newName.innerText = donnees[i].name;
        newId.innerText = donnees[i]._id;
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
        newCardTeddy.insertAdjacentElement('afterbegin', newColors);
        newCardTeddy.insertAdjacentElement('afterbegin', newPrice);
        newCardTeddy.insertAdjacentElement('afterbegin', newName);
        newCardTeddy.insertAdjacentElement('afterbegin', newImageUrl);
        newCardTeddy.insertAdjacentElement('afterbegin', newId);

    }

// selection de chaque ours et ouverture d'une page produit

    const allTeddies = Array.from(document.querySelectorAll('.card-body_teddy'));

    allTeddies.forEach(teddy => {
        teddy.addEventListener('click', (e) => {
            for (let i = 0; i < allTeddies.length; i++){
            document.location.href="produits.html";
            allTeddies[i].contains;
            }
        })
    })
});

