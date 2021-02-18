// je récupère le teddy selectionné

const theNounours = document.querySelector('#thenounours');
console.log(theNounours);
const teddyParams = (new URL(document.location)).searchParams;
const teddyId = teddyParams.get('id');
console.log(teddyId);
let donneesTeddy = [];

//je fais la requete API

const urlTeddy = 'http://localhost:3000/api/teddies/' + teddyId;
console.log(urlTeddy);

const requete = async function () {
    try {
        let theTeddy = await fetch(urlTeddy);
        if (theTeddy.ok) {
            let donnees = await theTeddy.json();
            console.log(theTeddy);
            return donneesTeddy();
        } else {
            alert('La connexion au serveur a échoué')
        }
    } catch (e) {
        console.log(e)
    }
}

//je cree le teddy article

const getTeddy = function () {
    requete();

    const theTeddy = document.createElement('div');
    theTeddy.setAttribute("class", "col-12 card text-center");
    theTeddy.innerHTML = `
                <h2>${donneesTeddy.name}</h2>
                <img src="${donneesTeddy.imageUrl}">
                <h3>${donneesTeddy.price} euros</h3>
                <h4>Disponible en ${donneesTeddy.colors}<h4>
                <label for="q">Quantité:</label>
                <select id="quantite" name="q">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>>
                </select>
                <button type="button" class="add-teddy">Ajouter au panier</button>
                `;
    theNounours.appendChild(theTeddy); 

}

getTeddy();


