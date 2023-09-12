export function newButton(input1, input2, input3){
    let icon = '';

    switch (input1) {
        case 1:
            icon = 'fa-calendar-days';
            break;
        case 2:
            icon = 'fa-door-open';
            break;
        case 3:
            icon = 'fa-list-check';
            break;
        case 4:
            icon = 'fa-graduation-cap';
            break;
        default:
            icon = '';
            break;
    }

    return `
        <button class="${input2}"><i class="fa-solid ${icon}"></i><span>${input3}</span></button>
    `;
}