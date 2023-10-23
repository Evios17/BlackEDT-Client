export function newSubWindow(){
    return window.open("screen2.html", "", "fullscreen=no, scrollbars=auto, width=" + window.screen.availWidth + ", height= " + window.screen.availHeight).moveTo(window.screen.availWidth, window.screen.availHeight);
}