
var x = 0, y = 0, w = 200, h = 200;
var dx = 20, dy = 20;
var win = window.open("", "window", "width=" + w + ",height=" + h);
win.document.write("welcome");
win.moveTo(x, y);
function bounce() {

    if (win.closed) {
        clearInterval(intervalID);
        return;
    }
    if ((x + dx > (screen.availWidth - w)) || (x + dx < 0)) {
        dx = -dx;

    };
    if ((y + dy > (screen.availHeight - h)) || (y + dy < 0)) {
        dy = -dy;

    };
    x += dx;
    y += dy;
    win.moveTo(x, y);
}
var intervalID = window.setInterval(bounce, 500);
function closeWindow() {
    clearInterval(intervalID);
    win.close();
}




