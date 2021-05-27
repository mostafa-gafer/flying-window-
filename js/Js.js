/*jslint plusplus: true */
/*global console, alert, prompt*/
// to open window and make it move 

var win;

var x = 0,
    y = 0,
    incrementedX = 10,
    incrementedY = 10,
    windowWidth = 100,
    windowHeight = 100;

var interval;


function openFlyingWindow() {
    win = window.open("", "myWindow", "width=50,height=20");
    win.document.write("welcome");
    win.focus();


    // Initial Position on screen at  0 , 0
    win.moveTo(x, y);
    // Interval to make window move diagonally each second
    interval = setInterval(function () {
        if (((x + incrementedX) > (screen.availWidth - windowWidth)) || ((x + incrementedX) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        if (((y + incrementedY) > (screen.availHeight - windowHeight)) || ((y + incrementedY) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        x += incrementedX;
        y += incrementedY;

        // Move to new position
        win.moveTo(x, y);
    }, 50);
}


function stopFlyingWindow() {
    clearInterval(interval);
    x = 0;
    y = 0;
    win.focus();
    //setTimeout(function () { win.close(); }, 2000);
}
function closeFlyingWindow() {
    clearInterval(interval);
    win.close();

}
/*
var myWindow,
    timer;

function openWindow() {
    'use strick';
    myWindow = window.open("", "myWindow", "width=50,height=20,left=50,top=50 ");
    myWindow.document.write("welcome");
    myWindow.focus();
    timer = setInterval(function () {
        if (myWindow.screenLeft <= 500) {
            myWindow.moveBy(500, 500);
            console.log(myWindow.screenLeft);


        }
        else {
            myWindow.moveBy(-500, -500);
        }

    }, 1000);

}

/*
function moveWindow() {
    'use strick';
    timer = setInterval(function () {
        if (x < 250) {
            myWindow.moveBy(50, 50);
            console.log(myWindow.screenLeft);


        }
        else {
            myWindow.close();

        }








        myWindow.focus();
        console.log();


    }, 1000);



}
*/
/*
// to stop wondow
function stopWindow() {
    'use strick';
    // to stop moving
    clearInterval(timer);
    myWindow.focus();

}
// to close wondow
function closeWindow() {
    'use strick';
    // to call close funtion
    clearInterval(timer);
    myWindow.close();

}

var timer,
    timer2,
    myWindow,
    i,
    x = 0,
    y = 0;
function openWindow() {
    'use strick';
    myWindow = window.open("", "myWindow", "width=50,height=20,left=150,top=100 ");
    myWindow.document.write("welcome");
    myWindow.focus();

}
function moveWindow() {
    timer = setInterval(downMove, 1000);

}
function downMove() {
    if (x == 200) {
        clearInterval(timer);
        upMove();

    } else {
        x += 30;
        y += 30;
        myWindow.moveTo(x, y);
        myWindow.focus();


    }



}
function upMove() {
    timer = setInterval(function () {
        if (x == 0) {
            clearInterval(timer);
            moveWindow()


        } else {
            x -= 30;
            y -= 30;
            myWindow.moveTo(x, y);
            myWindow.focus();

        }


    }, 1000);






}


function moveWindow() {
    'use strick';
    /*timer = setInterval(function () {
        if (x <= 100) {

            x += 20;
            y += 20;
            myWindow.moveTo(x, y);
        } else {

            timer2 = setInterval(function () {
                if (x >= 0) {

                    x -= 20;
                    y -= 20;
                    myWindow.moveTo(x, y);

                } else {
                    clearInterval(timer2);

                }



            }, 1000);


        }

        console.log(x + "" + y);


    }, 1000);
    *//*
if (x == 0) {
timer = setInterval(function () {
x += 20;
y += 20;

if (x == 100) {
clearInterval(timer);
}
myWindow.moveTo(x, y);

}, 1000);

} else {
timer = setInterval(function () {
x -= 20;
y -= 20;
myWindow.moveTo(x, y);

}, 1000);

};*//*
timer = setInterval(function () {


    if (x >= 100) {
        x -= 20;
        y -= 20;
    }
    if( x==0){


    }
    myWindow.moveTo(x, y);

}, 1000);

myWindow.focus();

}



function stopWindow() {
    'use strick';
    // to call close funtion
    clearInterval(timer);
    clearInterval(timer2);
    myWindow.focus();


}
function closeWindow() {
    'use strick';
    // to call close funtion
    clearInterval(timer);
    clearInterval(timer2);

    myWindow.close();

}
////////////////////////////////////
*/



