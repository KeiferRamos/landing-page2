import { displayContent } from "./classes/heroSection.js";
import { sidebarDisplay } from "./classes/sidebar.js";
import { hero } from "./data/heroSection.js";
import { sidebarData } from "./data/sidebar.js";
const toggleNav = document.getElementById("toggle-btn");
const toggleSide = document.getElementById("toggle-sidebar");
const linksCont = document.querySelector(".links");
const sidebar = document.querySelector(".sidebar");
toggleNav.addEventListener("click", () => {
    if (linksCont.classList.contains("show-links")) {
        linksCont.classList.remove("show-links");
    }
    else {
        linksCont.classList.add("show-links");
    }
});
toggleSide.addEventListener("click", () => {
    sidebar.classList.add("show-side");
});
linksCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("show-links")) {
        linksCont.classList.remove("show-links");
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const HeroContent = new displayContent(hero);
    HeroContent.format("container");
    HeroContent.setSelected();
    const displaySidebarContent = new sidebarDisplay(sidebarData);
    displaySidebarContent.format(sidebar);
});
