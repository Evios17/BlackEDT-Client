export function newButton(in1, in2){
    let icon = '';

    switch (in2){
        case "Calendrier":
            icon = 'fa-calendar-days';
            break;
        case "Salles":
            icon = 'fa-door-open';
            break;
        case "Notes":
            icon = 'fa-list-check';
            break;
        default:
            //icon = 'fa-bug';
            icon = 'fa-graduation-cap';
            break;
    }

    switch (in1){
        case 0:
            return `
                <button class="treeBtnDown"><i class="fa-solid ${icon}"></i><span>${in2}</span></button>
            `;
            
            break;
        case 1:
            return `
                <button class="treeBtnUp"><i class="fa-solid fa-arrow-left"></i></button>
            `;
            
            break;
        default :
            return console.error("{newButton, error} input button type not set");
            
            break;
    }
}