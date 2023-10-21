export function newSubWindow(){
    return window.open("screen2.html", "", "fullscreen=yes, scrollbars=auto, left=' + screen.availWidth");
}