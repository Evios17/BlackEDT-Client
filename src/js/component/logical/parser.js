import {initDisplay} from '../controler/domMetthods/waterfall.js';

const debug = false;

export function requestParser(object, socket) {
    switch (object.type){
        // Si la requête est de type "calendar"
        case "calendar":
            if(debug){
                console.log("{requestParser, log} Object de type calendar : ");
                console.log(object);
            }

            // Affichage du calendrier
            initDisplay(object.content, socket);

            break;
        // Si la requête est de type "directory"
        case "directory":
            if(debug) {
                console.log("{requestParser, log} Object de type directory : ");
                console.log(object);
            }

            // Affichage de l'arborescence
            initDisplay(object.content);
            
            break;
        // Si la requête n'est pas valide
        default:
            if(debug) console.error("{requestParser, error} : Unknown request type");
            
            break;
    }
}

export async function configParser() {
    try {
        // Récupération des données du fichier config.json
        let response =  await fetch("/src/js/data/config.json");

        // Retourne les données du fichier config.json
        return await response.json();
    } catch (e) {
        // Affichage de l'erreur dans la console
        if(debug) console.error("{initSocket, error} : " + e);

        return 1;
    }
}