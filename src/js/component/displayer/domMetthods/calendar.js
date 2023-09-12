const cursor = document.querySelector(".calendar-table-data-cursor-pointer");

function deplacerCurseur() {
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
    cursor.style.top = positionVerticale + "%";

    // Afficher la position du curseur dans la console
    console.log(positionVerticale + "%");
}

// Initialiser le curseur
deplacerCurseur();

// Mettre à jour le curseur toutes les secondes
setInterval(deplacerCurseur, 30000);