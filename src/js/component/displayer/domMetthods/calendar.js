
/*function deplacerCurseur() {
    // Obtenir l'heure actuelle
    var date = new Date();
    var heureActuelle = date.getHours();
    var minuteActuelle = date.getMinutes();

    // Calculer la position en pourcentage du curseur par rapport à la tranche horaire
    var trancheHoraireDebut = 7;
    var trancheHoraireFin = 20;

    // Calculer la position en pourcentage du curseur par rapport à la tranche horaire
    var positionVerticale = ((heureActuelle - trancheHoraireDebut) * 60 + minuteActuelle) / ((trancheHoraireFin - trancheHoraireDebut) * 60) * 100;

    // Déplacer le curseur en fonction du pourcentage total
    cursor.style.height = positionVerticale + "%";

    // Afficher la position du curseur dans la console
    console.log(positionVerticale + "%");
}*/

function pourcentageCurseur() {
    // Récupérer l'heure actuelle
    var date = new Date();
    var heureActuelle = date.getHours();
    var minutesActuelle = date.getMinutes();
    var secondsActuelle = date.getSeconds();

    // Si l'heure est entre 20h et 23h59, retourner 100%
    if (heureActuelle >= 20 && heureActuelle <= 23) {
        return 100;
    }

    // Si l'heure est entre 00h et 7h, retourner 0%
    if (heureActuelle >= 0 && heureActuelle < 7) {
        return 0;
    }

    // Calculer le pourcentage en fonction de l'heure actuelle
    var pourcentage = (((heureActuelle + (minutesActuelle / 60) + (secondsActuelle / (60 * 60))) - 7) / 13) * 100;
    return pourcentage;
}

function deplacerCurseur(){
    const cursor = document.querySelector(".calendar-table-data-cursor-pointer");

    // Déplacer le curseur en fonction du pourcentage total
    cursor.style.height = pourcentageCurseur() + "%";

    // Afficher la position du curseur dans la console
    console.log(pourcentageCurseur() + "%");
}

// Initialiser le curseur
deplacerCurseur();

// Mettre à jour le curseur toutes les secondes
setInterval(deplacerCurseur, 60000);