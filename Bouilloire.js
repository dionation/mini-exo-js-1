export class Bouilloire {
    constructor() {
        this.name = "bouilloire";
        this.contenu;

    }

    chauffe(element) {
        // boucle tant que la temperature est inferieure à 100
        if (element.temperature < 100) {
            // après un seconde on fait monté la température de 20°C
            setTimeout(() => {
                element.temperature += 20;
                // on lance la fonction récurcive
                this.chauffe(element)
            }, 1000);
        } else {
            console.log("C'est fini");
        }
    }
}