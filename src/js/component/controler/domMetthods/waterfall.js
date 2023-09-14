import * as btn from '../divTemplate.js';

export function initDisplay(object){
    const parent = document.querySelector(".treeBtnCtn");

    console.log("init Path : " + path);
    //console.log("init Path : " + JSON.stringify(path));

    parent.innerHTML = "";

    if (path.length > 0){
        parent.innerHTML += btn.newButton(1);

        const btnUp = document.querySelectorAll(".treeBtnUp");

        btnUp.forEach( buffer => {
            buffer.addEventListener("click", () => {
                console.log(object);

                up();
            });
        });
    }

    for (let key in object){
        parent.innerHTML += btn.newButton(0, object[key].name);

        const btnDown = document.querySelectorAll(".treeBtnDown");

        btnDown.forEach( buffer => {
            buffer.addEventListener("click", () => {
                console.log(object[Array.from(btnDown).indexOf(buffer)]);

                down(Array.from(btnDown).indexOf(buffer), object[Array.from(btnDown).indexOf(buffer)].content);
            });
        });
    }
}

function up(){
    path.pop();
    console.log("up Path : " + path);

    //const newObj = path.reduce((acc, key) => acc[key], objectCache);

    if (path.length > 0){
        let newObj = objectCache;

        for (let key of path) {
            newObj = newObj.content[key];
        }

        console.log(newObj);

        initDisplay(newObj);
    } else {
        initDisplay(objectCache);
    }
}

function down(in1, in2) {
    path.push(in1);
    console.log("down Path : " + path);
    
    initDisplay(in2);
}