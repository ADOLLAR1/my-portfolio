let clickCounter = 0;


function clicker(element) {
    clickCounter++;
    element.innerHTML = clickCounter;
}