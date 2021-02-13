
const theNounours = document.querySelector('#thenounours');
console.log(theNounours);
const teddyParams = (new URL(document.location)).searchParams;
const teddyId = teddyParams.get('id');
console.log(teddyId);


fetch('http://localhost:3000/api/teddies/' + teddyId)
        .then(response => response.json())
        .then(donnees => {
    const theTeddy = document.createElement('div');
    theTeddy.setAttribute("class", "col-12 card text-center");
    theTeddy.innerHTML = `
                <h2>${donnees.name}</h2>
                <img src="${donnees.imageUrl}">
                <h3 id="prix">${donnees.price} euros</h3>
                <h4>Disponible en ${donnees.colors}<h4>
                <label for="q">Quantité:</label>
                <select id="quantite" name="q">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <button type="button" class="add-teddy">Ajouter au panier</button>
                `;
    theNounours.appendChild(theTeddy);

    let btn = document.querySelector(".add-teddy");
    console.log(btn);
    btn.addEventListener ('click', () => {
        let quantite = document.getElementById('quantite');
        let prixUnit = document.getElementById('prix');
        let prixTotal = quantite.value * `${donnees.price}`;
        console.log(prixTotal);       
        })

        let teddies  = localStorage.getItem("teddies");
        if (teddies != null) {
        return JSON.parse(teddies);
        }else{
        return [];
        }
        console.log(teddies);


    
});


 




// 