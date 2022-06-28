export class navbarDisplay {
    format(id) {
        const container = document.getElementById(id);
        container.innerHTML = ` 
        <img src="./src/images/logo.png" alt="logo" />
        <i id="toggle-btn" class="fa-solid fa-bars"></i>
        <ul class="links">
            <li class="p-1-3"><a href="../../../index.html">Home</a></li>
            <li class="p-1-3"><a href="#">About Banan</a></li>
            <li class="p-1-3"><a href="#">Contact</a></li>
        </ul>
        <button id="toggle-sidebar">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>`;
        const toggleNav = document.getElementById("toggle-btn");
        const linksCont = document.querySelector(".links");
        const toggleSide = document.getElementById("toggle-sidebar");
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
    }
}
