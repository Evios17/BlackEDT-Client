//import {initMainSocket} from "./main";
import * as parser from "./parser.js";

const debug = true;
var retries = 0;

export async function initSocket() {
    let buffer = await parser.configParser();

    // Création de la connexion websocket
    // Faire en sorte que la variable socket soit global
    window.socket = new WebSocket(
        // Adresse du serveur
        buffer.socket.address
    );

    // Définition des évènements
    // Lorsque la connexion est établie
    socket.onopen = () => {
        retries = 0;

        // Affichage de l'erreur dans la console
        if(debug) console.log("{initSocket, success} Socket connection established");

        // Lorsque l'on reçoit un message
        socket.onmessage = (e) => {
            if(debug){
                console.log("{initSocket, success} Socket message received : \n");
                console.log(e.data);
            }

            // Conversion des données JSON en objet
            parser.requestParser(e.data);
        };
    };

    // Lorsque la connexion est fermée
    socket.onclose = (e) => {
        // Affichage de l'erreur dans la console
        if(debug) console.warn("{initSocket, event} Socket connection closed : " + JSON.stringify(e));

        if (retries < 2) { // Faire 3 tentatives au total
            retries++;
            console.log("Tentative de reconnexion dans 10 secondes...");
            setTimeout(initSocket, 10000); // Nouvelle tentative après 10 secondes
        } else {
            console.log("Échec de la reconnexion après 3 tentatives.");
            // Faire quelque chose d'autre ou quitter l'instance ici
        }
    };
}