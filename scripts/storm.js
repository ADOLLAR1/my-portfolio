let state = false;

const div = document.querySelector("#storm");

let array = [];

let lastTime = Date.now();
let rand = Math.random() - 0.5

function GetHeight() {
    let oDiv = document.documentElement;
    let sOriginalOverflow = oDiv.style.overflow;
    let sOriginalHeight = oDiv.style.height;
    oDiv.style.overflow = "show";
    oDiv.style.height = "";
    let height = oDiv.offsetHeight;
    oDiv.style.height = sOriginalHeight;
    oDiv.style.overflow = sOriginalOverflow;
    return height;
}

function toggleStorm() {
    if (!state) {
        state = true;
        const vw = Math.max(document.documentElement.clientWidth);
        const vh = Math.max(GetHeight());
        for (let i = 0; i < 1000; i++) {
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
        this.sx = Math.random() * 5;
        this.sy = this.sx * 2;
        this.update(0);
    }

    equalsElement(element) {
        return this.element = element;
    }

    update(rand) {
        if (this.y > this.vh) {
            this.vw = Math.max(document.documentElement.clientWidth);
            this.vh = Math.max(GetHeight());
            this.x = Math.floor(Math.random() * this.vw);
            this.y = 0;
            this.t = Math.random() * 360
            this.sx = Math.random() * 10;
            this.sy = Math.random() * 10;
        }
        this.element.style.top = `${this.y}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.width = `${this.sx}px`;
        this.element.style.height = `${this.sy}px`;
        this.element.style.transform = `${this.t}deg`;
        this.y = this.y + 2;
        this.x = this.x + (0);
    }
}