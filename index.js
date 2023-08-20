import * as utilities from "./utilities.js";

async function start() {
    //Init main
    let main = document.getElementById("main");

    //Include home
    main.appendChild(await utilities.renderElement("home.html"));
}
start();