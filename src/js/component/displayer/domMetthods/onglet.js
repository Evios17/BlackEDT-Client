function oglt(input1, input2) {
    const btns = document.querySelectorAll(input1);
    const ctns = document.querySelectorAll(input2);
  
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.ogtl;
            console.log("Click ! Onglet : " + index);
    
            if (btn.classList.contains('active')) return;
    
            btns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
    
            ctns.forEach(ctn => {
                if (ctn.dataset.ogtl === index) {
                    ctn.classList.add('active');
                } else {
                    ctn.classList.remove('active');
                }
            });
        });
    });
}

oglt(".btn", ".ctn");
oglt(".ongletBtn", ".ongletSec");





function onglet(ogltBtns, ogltBtn, oglt) {
    // On initialise l'index à 0
    let idx = 0;

    // On actualise l'index par l'identifiant (data) du bouton
    idx = ogltBtn.getAttribute("data-oglt");
    
    // On log la valeur de l'index
    //console.log(idx);
    
    if(ogltBtn.classList.contains('active')){
        return;
    } else {
        ogltBtn.classList.add('active');
    }

    for(let i = 0; i < ogltBtns.length; i++) {
        if(ogltBtns[i].getAttribute("data-oglt") != idx){
            ogltBtns[i].classList.remove('active');
        }
    }

    for(let j = 0; j < oglt.length; j++){
        if(oglt[j].getAttribute("data-oglt") == idx){
            oglt[j].classList.remove('active');
        } else {
            oglt[j].classList.add('active');
        }
    }
}

// On boucle sur l'enssemble des boutons
document.querySelectorAll(".ogltBtnL1").forEach(ogltBtn => {
    // On attend un click sur le bouton
    ogltBtn.addEventListener('click', () => {
        // On appel notre fonction
        onglet(document.querySelectorAll(".ogltBtnL1"), ogltBtn, document.querySelectorAll(".ogltL1"));
    });
});

// On boucle sur l'enssemble des boutons
document.querySelectorAll(".ogltBtnL2").forEach(ogltBtn => {
    // On attend un click sur le bouton
    ogltBtn.addEventListener('click', () => {
        // On appel notre fonction
        onglet(document.querySelectorAll(".ogltBtnL2"), ogltBtn, document.querySelectorAll(".ogltL2"));
    });
});

// On boucle sur l'enssemble des boutons
document.querySelectorAll(".ogltBtnL3").forEach(ogltBtn => {
    // On attend un click sur le bouton
    ogltBtn.addEventListener('click', () => {
        // On appel notre fonction
        onglet(document.querySelectorAll(".ogltBtnL3"), ogltBtn, document.querySelectorAll(".ogltL3"));
    });
});