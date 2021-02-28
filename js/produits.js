
const theNounours = document.querySelector('#thenounours');
console.log(theNounours);
const teddyParams = (new URL(document.location)).searchParams;
const teddyId = teddyParams.get('id');
console.log(teddyId);

//recuperation du teddy seul avec l'Id du produit via l'API
async function teddyFetch() {
    await fetch('http://localhost:3000/api/teddies/' + teddyId)
        .then(response => {
            return response.json();
        })
        .then(teddy => {

            //création de la fiche produit
            function theTeddy() {
                const theTeddy = document.createElement('div');

                //création de la carte produit
                theTeddy.setAttribute("class", "col-12 card text-center");
                theTeddy.innerHTML = `
                            <h2>${teddy.name}</h2>
                            <img src="${teddy.imageUrl}">
                            <h3 id="prix">${teddy.price/100} euros</h3>
                            <p class="text-center">${teddy.description}<p>
                            <label for="couleurs">Disponible en</label>
                            <select name="colors" id="colors">
                            </select><br>
                            <label for="qte" style= "display: inline">Quantité : </label>
                            <input id="quantite" name="quantité" type="number" value="1" style= "width: 50px; display: inline"/><br>                                                       
                            <button type="button" class="add-teddy" style= "margin-top: 1em">Ajouter au panier</button>
                            `;
                theNounours.appendChild(theTeddy);

                //selection du coloris
                function coloris(teddy){
                    let color = document.getElementById('colors');
                    for (let i = 0; i < teddy.colors.length; i++){
                    let choixColor = document.createElement('option');
                    choixColor.innerText = teddy.colors[i];
                    color.appendChild(choixColor);
                    }
                }
                coloris(teddy);
                console.log(teddy);
            }

            theTeddy();

            //stocker les données en localStorage
            function recupStorageTeddy(){

                let btn = document.querySelector(".add-teddy");
                console.log(btn);

                btn.addEventListener('click', () => {
                    let quantite = document.getElementById('quantite');
                    teddy.prixTotal = quantite.value * `${teddy.price/100}`;
                
                    ajoutTeddy();                
                })
                
                function ajoutTeddy() {            
                    localStorage.setItem(teddyId, JSON.stringify(teddy));
                    console.log(JSON.stringify(teddy));
                    alert(`${quantite.value} oursons ${teddy.name} ajoutés à votre panier`);
                    }
            }

            recupStorageTeddy();
        })
        .catch((error) => {
            console.log(error);
    })
}

teddyFetch();

