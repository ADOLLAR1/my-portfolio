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

//WAIT SO PAGE CAN LOAD

{
    let i = 0;
    setInterval(() => {
        if (i === 1) {
            const foot = document.querySelector("#footer");

            const ch = document.documentElement.scrollHeight;
            const vwh = document.documentElement.clientHeight;
            document.documentElement.style.height = "100%";
            const h = Math.max(ch, vwh);

            console.log(ch);
            console.log(vwh);
            console.log(h);

            const height = foot.scrollHeight;

            if (h === vwh) {
                foot.style.position = 'absolute';
                foot.style.bottom = `1em`;
            }
        }
        if (i <= 2) {
            i++;
        }
    }, 10);
}