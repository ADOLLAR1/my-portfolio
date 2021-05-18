let clickCounter = 0;

let clickers = 0;

let element;

function setElement(ele) {
    element = ele;
}

function clicker(element) {
    clickCounter++;
    element.innerHTML = clickCounter;
}

function update(element) {
    element.innerHTML = clickCounter;
}

function purchaseCheck() {
    if (clickCounter >= 10) {
        clickCounter -= 10;
        clickers++;
    }
}

function startClickers() {
    setInterval(() => {
        clickCounter += clickers;
        update(element);
    }, 1000);
}