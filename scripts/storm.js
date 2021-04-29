let state = false;

const div = document.querySelector("#storm");

document.documentElement.style.height = "max-content";
const vh1 = document.documentElement.scrollHeight;
const vh2 = document.documentElement.clientHeight;
document.documentElement.style.height = "100%";
const vh = Math.max(vh1, vh2);
const vw = document.documentElement.clientWidth - 10;

let array = [];
let bolt;

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
            rand = Math.random();
            if (rand <= 0.001) {
                if (bolt === undefined || bolt === null) {
                    const element = document.createElement("div");
                    element.className = "storm-element-1";
                    bolt = new Bolt(element, vw, vh);
                    div.appendChild(element)
                }
            }
        }
        if (bolt !== undefined && bolt !== null) {
            bolt.update(rand);
        }
        for (let i = 0; i < array.length; i++) {
            element = array[i];
            element.update(rand);
        }
    }
}, 10);

class Drop {
    /**
     * 
     * @param {HTMLDivElement} element 
     * @param {Number} vw 
     * @param {Number} vh 
     */
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

    /**
     * 
     * @param {Number} rand 
     */
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
        this.x = this.x + (0);
    }
}

class Bolt {
    /**
     * 
     * @param {HTMLDivElement} element 
     * @param {Number} vw 
     * @param {Number} vh 
     */
    constructor(element, vw, vh) {
        this.element = element;
        this.vw = vw;
        this.vh = vh;
        this.x = Math.floor(Math.random() * this.vw);
        this.y = this.vh / 2
        this.sx = Math.random() * 10 + 5;
        this.sy = this.vh;
        this.update(0);
        this.life = Math.random() * 20;
    }

    /**
     * 
     * @param {Number} rand 
     * @returns {void}
     */
    update(rand) {
        if (this.life < 0) {
            this.element.remove();
            this.element = null;
            bolt = null;
            return;
        }
        this.element.style.top = "0";
        this.element.style.left = `${this.x}px`;
        this.element.style.width = `${this.sx}px`;
        this.element.style.height = `${this.sy}px`;
        this.life--;
    }
}