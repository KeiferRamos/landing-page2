export class navbarDisplay {
  format(id: string) {
    const container = document.getElementById(id) as HTMLElement;

    container.innerHTML = ` 
        <img src="./src/images/logo.png" alt="logo" />
        <i id="toggle-btn" class="fa-solid fa-bars"></i>
        <ul class="links">
            <li class="p-1-3"><a href="./index.html">Home</a></li>
            <li class="p-1-3"><a href="./about.html">About Banan</a></li>
            <li class="p-1-3"><a href="./contacts.html">Contact</a></li>
        </ul>
        <button id="toggle-sidebar">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>`;

    const toggleNav = document.getElementById("toggle-btn") as HTMLElement;
    const linksCont = document.querySelector(".links") as HTMLUListElement;
    const toggleSide = document.getElementById("toggle-sidebar") as HTMLElement;
    const sidebar = document.querySelector(".sidebar") as HTMLUListElement;

    toggleNav.addEventListener("click", () => {
      if (linksCont.classList.contains("show-links")) {
        linksCont.classList.remove("show-links");
      } else {
        linksCont.classList.add("show-links");
      }
    });

    toggleSide.addEventListener("click", () => {
      sidebar.classList.add("show-side");
    });

    linksCont.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).classList.contains("show-links")) {
        linksCont.classList.remove("show-links");
      }
    });
  }
}
