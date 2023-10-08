import {initDisplay} from '../controler/domMetthods/waterfall.js';

const debug = false;

export function requestParser(object) {
    try{
        var buffer = JSON.parse(object);
    } catch (e) {
        console.error("{initSocket, error} Can't JSON.parse the object : " + e);
        return;
    }


    // Vérifier l'existence de l'objet
    if (typeof buffer === "undefined") {
        console.error("{initSocket, error} Object doesn't exit");
        return;
    }

    // Vérifier la présence des champs "type" et "content"
    if (!buffer.hasOwnProperty("type") || !buffer.hasOwnProperty("content")) {
        console.error("{initSocket, error} No label type and content detected");
        return;
    }

    // Vérifier que les champs ne sont pas vides
    if (!buffer.type || !buffer.content) {
        console.error("{initSocket, error} Empty label");
        return;
    }

    switch (buffer.type){
        case "directory":
            if(debug) {
                console.log("{requestParser, log} Object de type directory : ");
                console.log(buffer);
            }

            // Affichage de l'arborescence
            initDisplay(buffer.content);

            break;
        case "calendar":
            if(debug){
                console.log("{requestParser, log} Object de type calendar : ");
                console.log(buffer);
            }

            // Affichage du calendrier
            console.log(buffer.content);
            break;
        case "pdf":
            console.log("pdf");
            console.log(JSON.stringify(buffer));
            break;
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