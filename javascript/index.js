import * as utilities from "./utilities.js";

async function start() {
    //Init main
    let main = document.getElementById("main");

    //Include home
    main.appendChild(await utilities.renderElement("home.html"));

    let home = document.getElementById("home");
    let posts = document.getElementById("posts");
    let participations = document.getElementById("participations");

    function deleteActiveNavOption(){
        home.classList.remove("active");
        posts.classList.remove("active");
        participations.classList.remove("active");
    }

    home.addEventListener("click", async function () {
        main.innerHTML = "";
        main.appendChild(await utilities.renderElement("home.html"));
        deleteActiveNavOption();
        home.classList.add("active");
    });

    posts.addEventListener("click", async function () {
        main.innerHTML = "";
        main.appendChild(await utilities.renderElement("posts.html"));
        deleteActiveNavOption();
        posts.classList.add("active");
    });

    participations.addEventListener("click", async function () {
        main.innerHTML = "";
        main.appendChild(await utilities.renderElement("participations.html"));
        deleteActiveNavOption();
        participations.classList.add("active");
    });
}
start();