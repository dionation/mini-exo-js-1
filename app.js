// Création d'un module
import { Personne } from "./personne.js"
import { Liquide } from "./liquide.js";
import { Bouilloire } from "./Bouilloire.js";
// Déclaration de variable
var maVille = "Bruxelles";
let monQuartier = "Minoterie";
const maConstante = 3.14;

// Créer un tableau de prénom
let prenoms = [
    "camélia",
    "soukaina",
    "fatima",
    "samy",
    "soufiane",
    "mohamed",
    "simon",
    "jonathan",
    "salahedin",
    "adel",
    "mehdi",
    "sam",
    "arthur",
    "cracotte",
    "okan",
    "axel",
    "julian",
    "adnen",
    "patrick"
];

prenoms.forEach((unElementDuTableau, index) => {
    // Je prend la première lettre
    let firstLetter = unElementDuTableau.charAt(0);
    // Je transforme la première lettre en majuscule
    firstLetter = firstLetter.toUpperCase();
    // Je prend le reste du prénom
    let restePrenom = unElementDuTableau.slice(1);
    // Je met dans le tableau le prénom capitalisé au bon index
    prenoms[index] = firstLetter + restePrenom;
});

// Mise en place d'une boucle 
let personnes = [];
for (let i = 0; i < 10; i++) {
    // Je créer un nombre au hazar entre 0 et 1 que je multiplie par la longueur de mon tableau prénom
    let nbrHazar = Math.random() * prenoms.length;
    // J'arrondi ce nombre à la valeur supérieur
    let nbrArondi = Math.ceil(nbrHazar);
    // Je choisi au hazar un prénom dans mon tableau en grâce à de l'index que je lui passe
    let prenom = prenoms[nbrArondi];
    // Je créer un age arondi entre 10 et 25 ans
    let age = 10 + (Math.ceil(Math.random() * 15));
    // Je créer génére un personne et la met dans mon tableau personnes
    personnes.push(new Personne(prenom, age));
}

// Faite le trie
let cinema = [];
let nightClub = [];

personnes.forEach((personne) => {
    // Si la personne à un age en dessous de 18 ans
    if (personne.age < 18) {
        // on la push dans le cinema
        cinema.push(personne);
    } else {// sinon
        // on la push dans le nightclub
        nightClub.push(personne);
    }
});

// Allez jusqu'au bout
// Créer une bouilloire
let bouilloire = new Bouilloire;
// Créer un litre d'eau
let eau = new Liquide("eau", 1, 20);
bouilloire.chauffe(eau);
