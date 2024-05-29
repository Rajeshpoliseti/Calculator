var display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
    resizeFont();
}

function AllClear(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}


function resizeFont(){
    const display = document.getElementById("display");
    const containerWidth = display.clientWidth;
    let fontSize = parseInt(window.getComputedStyle(display).fontSize);
    let textWidth = display.scrollWidth;

    while (textWidth > containerWidth && fontSize > 10) { 
        fontSize -= 1;
        display.style.fontSize = fontSize + 'px';
        textWidth = display.scrollWidth;
    }
}

resizeFont();