class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;
    constructor(marque, modele, annee, couleur){
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }

get marque(){
    return this.#marque;
}
get modele(){
    return this.#modele;
}
get annee(){
    return this.#annee;
}
get couleur(){
    return this.#couleur;
}      
set marque(val){
    this.#marque = val;
}
set modele(val){
    this.#modele = val;
}
set annee(val){
    this.#annee = val;
}
set couleur(val){
    this.#couleur = val;
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

voiture.couleur = "Blanc";
console.log(voiture.couleur);