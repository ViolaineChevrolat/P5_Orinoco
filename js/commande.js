
console.log(sessionStorage);


function validationCommande() {
    const commande = sessionStorage.getItem('order');
    const confirmation = document.getElementById('cde');
    confirmation.innerHTML = 
    `<h1 class="title">Merci pour votre commande.<br>Elle est enregistrée sous le n°: ${commande}.</h1>`;
    
    sessionStorage.clear();
}

validationCommande();

