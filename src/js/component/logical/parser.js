import * as waterfall from '../controler/waterfall.js';

export function requestParser(objet) {

    switch (objet.type){
        case "calendar":
            console.log(objet); 
            break;
        case "directory":
            waterfall.
            console.log(objet);
            break;
        default:
            console.error("{requestParser, error} : Unknown request type");
            break;
    }
}

function keyParser(object, prefixe = '') {
    // Parcourir les clés de l'objet
    for (let key in object) {
      // Vérifier si la valeur de la clé est un objet
      if (typeof object[key] === 'object' && object[key] !== null) {
        // Afficher la clé préfixée et appeler récursivement la fonction pour parcourir le sous-objet
        console.log(`${prefixe}${key}`);
        keyParser(object[key], `${prefixe}${key}.`);
      } else {
        // Afficher la clé préfixée si la valeur n'est pas un objet
        console.log(`${prefixe}${key}`);
      }
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

//module.exports = {requestParser, configParse,};