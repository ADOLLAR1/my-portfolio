/*
    Alex Dollar
    /scripts/footer.js
    04-12-2021
*/

let copy = document.querySelector("#copyright")
let date = new Date();
let year = date.getFullYear();

let str = `&copy; ${year.toString()} Alex Dollar`

copy.innerHTML = str;