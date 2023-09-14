import * as waterfall from '../controler/domMetthods/waterfall.js';
import {initDisplay} from "../controler/domMetthods/waterfall.js";

export function requestParser(object) {
    switch (object.type){
        case "calendar":
            console.log(object);
            objectCache = object.content;
            waterfall.initDisplay(object.content);

            break;
        case "directory":
            console.log(object);
            waterfall.initDisplay(object.content);
            
            break;
        default:
            console.error("{requestParser, error} : Unknown request type");
            
            break;
    }
}

export async function configParser() {
    try {
        // Récupération des données du fichier config.json
        let response =  await fetch("/src/js/data/config.json");
        // Conversion des données en JSON
        var config = {};
        
        config = await response.json();

        return config;
    } catch (e) {
        // Affichage de l'erreur dans la console
        console.error("{initSocket, error} : " + e);

        return 1;
    }
}