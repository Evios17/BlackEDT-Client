import {initSocket} from "./socket.js";
import {newSubWindow} from "../displayer/new-sub-window.js";

// Initation de la fennêtre secondaire

const wdw = newSubWindow();

// Initiation du socket

/*export async function initMainSocket() {
    for (let i = 0; i < 5; i++) {
        try {
            initSocket();
            break;
        }
        catch (e) {
            console.error(e);
            console.error("Erreur de connexion au serveur");
            console.log(`Tentative ${i}, reconnexion dans 2 secondes`)
        }
        
        if (i === 4) console.error("Erreur de connexion au serveur");
        
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

initMainSocket();*/

initSocket();

// Requête de récupération des données



// Traitement des données reçues

//requestParser(socket.dataSocket);