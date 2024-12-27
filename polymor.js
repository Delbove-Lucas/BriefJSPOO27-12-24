class Animal {
    faireDuBruit(){
        console.log("Fait du bruit");
    }
}

class Chat extends Animal {
    faireDuBruit(){
        console.log("Fait du bruit");
    }
}

class Chien extends Animal {
    faireDuBruit(){
        super.faireDuBruit();
        console.log("Fait du bruit");
    }
    
}

const chat = new Chat();
chat.faireDuBruit();

const chien = new Chien();    
chien.faireDuBruit();