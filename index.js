function displayMenu() {
    const menu = document.getElementById("primary-navigation");
    const state = document.querySelector(".mobile-nav-toggle");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    menu.classList.toggle("primary-navigation-toggle");

    if(state.getAttribute("data-visible") === "false") {

        state.style = "background-image: url(./images/icon-close.svg);";
        state.setAttribute("data-visible", true);
        state.setAttribute("aria-expanded", true);
        main.style.background = "#000000";
        main.style.opacity = ".5";
        footer.style.background = "#000000";
        footer.style.opacity = ".5";
    } else {

        state.style = "background-image: url(./images/icon-hamburger.svg);";
        state.setAttribute("data-visible", false);
        state.setAttribute("aria-expanded", false);
        main.style.background = "";
        main.style.opacity = "";
        footer.style.background = "";
        footer.style.opacity = "";
    }
}