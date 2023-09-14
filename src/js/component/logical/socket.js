import * as parser from "./parser.js";

export async function initSocket() {
    let buffer = await parser.configParser();

    // Création de la connexion websocket
    // Faire en sorte que la variable socket soit global
    var socket = new WebSocket(
        // Adresse du serveur
        buffer.socket.address
    );

    // Définition des évènements
    // Lorsque la connexion est établie
    socket.onopen = () => {
        // Affichage de l'erreur dans la console
        console.log("{initSocket, success} Socket connection established");
    };

    // Lorsque l'on reçoit un message
    socket.onmessage = (e) => {
        console.log("{initSocket, success} Socket message received : \n");
        
        // Conversion des données JSON en objet
        parser.requestParser(JSON.parse(e.data));
    };

    // Lorsque la connexion est fermée
    socket.onclose = (e) => {
        // Affichage de l'erreur dans la console
        console.warn("{initSocket, event} Socket connection closed : " + e);
    };
}


//module.exports = {initSocket,}