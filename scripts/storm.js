let state = false;

const div = document.querySelector("#storm");

document.documentElement.style.height = "max-content";
const vh = document.documentElement.scrollHeight;
document.documentElement.style.height = "100%";
const vw = document.documentElement.clientWidth - 10;

let array = [];

let lastTime = Date.now();
let rand = Math.random() - 0.5

function toggleStorm() {
    if (!state) {
        state = true;
        div.style.height = `${vh}px`;
        for (let i = 0; i < 500; i++) {
            const element = document.createElement("div");
            element.className = "storm-element";
            array.push(new Drop(element, vw, vh));
            div.appendChild(element);
        }
    } else {
        state = false;
        array.forEach(element => {
            element.element.remove();
        });
        array = [];
    }
}

setInterval(() => {
    if (state) {
        if (Date.now() !== lastTime) {
            lastTime = Date.now();
            rand = Math.random() - 0.5
        }
        for (let i = 0; i < array.length; i++) {
            element = array[i];
            element.update(rand);
        }
    }
}, 10);

class Drop {
    constructor(element, vw, vh) {
        this.element = element;
        this.vw = vw;
        this.vh = vh;
        this.x = Math.floor(Math.random() * this.vw);
        this.y = Math.floor(Math.random() * this.vh) - this.vh;
        this.t = Math.random() * 360
        this.sx = Math.random() * 10;
        this.sy = this.sx * 2;
        this.update(0);
    }

    update(rand) {
        if (this.y > this.vh) {
            const footerRect = document.querySelector("#footer").getBoundingClientRect();
            this.x = Math.floor(Math.random() * this.vw);
            this.y = 0;
            this.t = Math.random() * 360
            this.sx = Math.random() * 10;
            this.sy = this.sx * 2
        }
        this.element.style.top = `${this.y}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.width = `${this.sx}px`;
        this.element.style.height = `${this.sy}px`;
        this.y = this.y + 2;
        this.x = this.x + (rand);
    }
}