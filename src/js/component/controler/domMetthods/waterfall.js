import {newButton} from '../divTemplate.js';

const debug = false;
let objectCache = null;
let path = [];

export function initDisplay(object){
    // Sauvegarde de l'objet
    objectCache = object;

    // Affichage de l'arborescence
    refreshDisplay(object);
}

function refreshDisplay(object){
    const parent = document.querySelector(".treeBtnCtn");

    if(debug){
        console.log("{refreshDisplay, log} init Path : ");
        console.log(path);
        console.log("{refreshDisplay, log} init Object : ");
        console.log(object);
        console.log("{refreshDisplay, log} init ObjectCache : ");
        console.log(objectCache);
    }

    // Nettoyage de l'affichage
    parent.innerHTML = "";

    // Affichage du bouton de retour si l'on est pas à la racine
    if (path.length > 0){
        // Affichage du bouton de retour
        parent.insertAdjacentHTML("beforeend", newButton(1));

        const btnUp = document.querySelector(".treeBtnUp");

        // Ajout de l'évènement au bouton de retour
        btnUp.addEventListener("click", () => {
            // Suppression du dernier index de l'array path
            path.pop();

            if(debug) {
                console.log("{refreshDisplay, log} up Path : ");
                console.log(path);
                console.log("{refreshDisplay, log} up Object : ");
                console.log(object);
                console.log("{refreshDisplay, log} up ObjectCache : ");
                console.log(objectCache);
            }

            let objectBuffer = objectCache;

            // Récupération de l'objet à afficher en fonction de l'array path
            for (let i = 0; i < path.length; i++) {
                objectBuffer = objectBuffer[path[i]].content;
            }

            // Affichage de l'objet
            refreshDisplay(objectBuffer);
        });
    }

    // Affichage des boutons de l'arborescence
    for (let key in object){
        parent.insertAdjacentHTML("beforeend", newButton(0, object[key].name));
    }

    const btnDown = document.querySelectorAll(".treeBtnDown");

    // Ajout des évènements aux boutons de l'arborescence
    btnDown.forEach( buffer => {
        buffer.addEventListener("click", () => {
            switch(object[Array.from(btnDown).indexOf(buffer)].type){
                case "folder":
                    // Ajout de l'index du bouton à l'array path
                    path.push(Array.from(btnDown).indexOf(buffer));

                    if(debug) {
                        console.log("{refreshDisplay, log} down Path : ");
                        console.log(path);
                        console.log("{refreshDisplay, log} down Object : ");
                        console.log(object);
                        console.log("{refreshDisplay, log} down ObjectCache : ");
                        console.log(objectCache);
                    }

                    // Affichage de l'objet
                    refreshDisplay(object[Array.from(btnDown).indexOf(buffer)].content);
                    break;
                case "calendar":
                    console.log(object[Array.from(btnDown).indexOf(buffer)].resource);
                    let request = {
                        type: "calendar",
                        content: object[Array.from(btnDown).indexOf(buffer)].resource
                    };
                    socket.send(JSON.stringify(request));
                    break;
                case "pdf":
                    break;
                default:
                    console.error("{refreshDisplay, error} : Unknown object type");
                    break;
            }
            
        });
    });
}