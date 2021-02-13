 main();

async function main() {
    const teddies = await getTeddies();
    for (teddy of teddies) {
         displayTeddy(teddy);
     }
 }

 function getTeddies() {
     return fetch('http://localhost:3000/api/teddies')
         .then(function(httpBodyResponse) {
             return httpBodyResponse.json()
         })
         .then(function(teddies){
             return teddies;
         })
         .catch(function() {
             alert("Vous n'avez pas connecté le backend au frontend.");
         })
 }

 function displayTeddy() {
     document.getElementById('nounours').innerHTML += `
     <div class="col-12 col-md-6">
         <h2>${teddy.name}</h2>
         <img src="${teddy.imageUrl}"</img>
         <h4>${teddy.price}</h4>
         <p>'Disponible dans les coloris suivants : ${teddy.colors}'</p>            
     </div>`;

 }

 function getId(teddies) {
    let idTeddies = (new URL(document.location)).searchParams;
    let idTeddy = params.get('_id');
    console.log(idTeddy);
 }



