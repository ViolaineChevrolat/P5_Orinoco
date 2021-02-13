// je récupère le teddy selectionné

const theNounours = document.querySelector('#thenounours');
console.log(theNounours);
const teddyParams = (new URL(document.location)).searchParams;
const teddyId = teddyParams.get('id');
console.log(teddyId);

//je fais la requete API

const urlTeddy = 'http://localhost:3000/api/teddies/' + teddyId;
console.log(urlTeddy);

const requete = async function () {
    try {
        let theTeddy = await fetch(urlTeddy);
        if (theTeddy.ok) {
            let donnees = await theTeddy.json();
            console.log(theTeddy);

        } else {
            alert('La connexion au serveur a échoué')
        }
    } catch (e) {
        console.log(e)
    }
}

//je cree le teddy article

const theTeddy = document.createElement('div');

const getTeddy = function () {
    theTeddy.setAttribute("class", "col-12 card text-center");
    theTeddy.innerHTML = `
                <h2>${urlTeddy.name}</h2>
                <img src="${urlTeddy.imageUrl}">
                <h3>${urlTeddy.price} euros</h3>
                <h4>Disponible en ${theTeddy.colors}<h4>
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
    requete();

}

getTeddy();




