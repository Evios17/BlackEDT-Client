import * as btn from '../divTemplate.js';

export function initDisplay(object){
    const parent = document.querySelector(".treeBtnCtn");
    //const btnUp = document.querySelector(".treeBtnUp");
    //const btnDown = document.querySelectorAll(".treeBtnDown");
    
    console.log("init Path : " + path);
    console.log("init Path : " + JSON.stringify(path));


    parent.innerHTML = "";

    if (path.length > 0){
        parent.innerHTML += btn.newButton(1);

        document.querySelector(".treeBtnCtn").addEventListener("click", () => {
            console.log("click");
            
            up(object);
        });
    }



    /*for (let key in object){
        parent.innerHTML += btn.newButton(0, object[key].name, key);

        document.querySelectorAll(".treeBtnDown").forEach( buffer => {
            buffer.addEventListener("click", () => {
                console.log("click");
                
                console.log(object[Object.keys(object)[Array.from(document.querySelectorAll(".treeBtnDown")).indexOf(buffer)]]);
                
                down(object, object[Object.keys(object)[Array.from(document.querySelectorAll(".treeBtnDown")).indexOf(buffer)]]);
            });
        });
    }*/
}

function up(in1){
    if (path.length > 0) {
        path.pop();
        initDisplay(in1);
    }
}

function down(object, key) {
    /*if (object[key] && typeof object[key] === 'object') {
        path.push(key);
        const newObj = path.reduce((acc, key) => acc[key], object);
        initDisplay(newObj);
    }*/

    path.push(key);
    const newObj = path.reduce((acc, key) => acc[key], object);
    initDisplay(newObj);
}