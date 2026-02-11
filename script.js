const mesProduits = [
    // FEMMES
    { cat: 'femmes', nom: 'Robe de Sortie', prix: '25 000', img: 'Robeblanche1.jpg', desc: 'Robe élégante pour soirées.', tailles: 'S, M, L' },
    { cat: 'femmes', nom: 'Robe Verte', prix: '25 000', img: 'Robeverte.jpg', desc: 'Coupe ajustée chic.', tailles: 'M, L' },
    { cat: 'femmes', nom: 'Look de Soirée', prix: '22 000', img: '1770591816994.png', desc: 'Ensemble moderne scintillant.', tailles: 'S, M' },
    { cat: 'femmes', nom: 'Tenue de Travail', prix: '25 000', img: 'IMG-20260115-WA0025.jpg', desc: 'Style professionnel chic.', tailles: 'M, L, XL' },

    // HOMMES
    { cat: 'hommes', nom: 'Polo de Sortie', prix: '7 000', img: 'IMG-20260205-WA0046.jpg', desc: 'Coton haute qualité.', tailles: 'L, XL, XXL' },

    // ACCESSOIRES (SANS CADENAS)
    { cat: 'accessoires', nom: 'Sac à Main Luxe', prix: '20 000', img: 'sac.jpg', desc: 'Finition cuir premium.', tailles: 'Unique' },

    // LINGERIE (AVEC CADENAS)
    { cat: 'lingerie', nom: 'Nuisette Sexy', prix: '15 000', img: 'Ensemblesexy1.jpg', desc: 'Dentelle fine et soie.', tailles: 'Unique' },
    { cat: 'lingerie', nom: 'Bodystoking', prix: '12 000', img: 'Bodystoking.jpg', desc: 'Extensible luxe.', tailles: 'S au L' }
];

function chargerProduits() {
    mesProduits.forEach(p => {
        const grid = document.getElementById('grid-' + p.cat);
        if(grid) {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}">
                    <div class="badge-taille">Tailles: ${p.tailles}</div>
                    <h3>${p.nom}</h3>
                    <p class="desc-texte">${p.desc}</p>
                    <p class="prix-rouge">${p.prix} FCFA</p>
                    <a href="https://wa.me/237691405697?text=🛒 PANIER : Je souhaite commander l'article [ ${p.nom} ] en taille [ ${p.tailles} ] au prix de ${p.prix} FCFA." class="btn-achat">Ajouter au panier</a>
                </div>`;
        }
    });
}

function ouvrirModal() { document.getElementById('age-gate').style.display = 'flex'; }
function fermerModal() { document.getElementById('age-gate').style.display = 'none'; }

function confirmerAge() {
    localStorage.setItem('ageOK', 'true');
    fermerModal();
    appliquerDeverrouillage();
}

function appliquerDeverrouillage() {
    const wrapper = document.getElementById('lingerie-wrapper');
    const cadenas = document.getElementById('cadenas-orange');
    if (wrapper) wrapper.classList.remove('verrouille');
    if (cadenas) cadenas.style.display = 'none';
}

window.onload = function() {
    chargerProduits();
    if (localStorage.getItem('ageOK') === 'true') {
        appliquerDeverrouillage();
    }
};
function partagerSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Universal Store Chic Mode',
            text: 'Regarde cette boutique incroyable à Douala !',
            url: window.location.href,
        })
        .then(() => console.log('Partage réussi'))
        .catch((error) => console.log('Erreur de partage', error));
    } else {
        alert("Le partage n'est pas supporté sur ce navigateur, copie l'adresse du site !");
    }
}
