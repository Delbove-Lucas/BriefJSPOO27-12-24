class Voiture {
    constructor(marque, modele, annee, couleur){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails(){
        console.log("la marque est : " + this.marque);  
        console.log("le modele est : " + this.modele);  
        console.log("l'annee est : " + this.annee);
        console.log("la couleur est : " + this.couleur);
        return this.marque;
    }
}

const voiture = new Voiture("Peugeot", "208", 2008, "Rouge");
voiture.afficherDetails();
