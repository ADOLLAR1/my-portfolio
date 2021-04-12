let copy = document.querySelector("#copyright")
let date = new Date();
let year = date.getFullYear();

let str = `&copy; ${year.toString()} Alex Dollar`

copy.innerHTML = str;