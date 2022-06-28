import { sidebarData } from "../data/sidebar.js";
export class sidebarDisplay {
    format(id) {
        const { img, text, contacts } = sidebarData;
        const sidebar = document.querySelector(id);
        sidebar.innerHTML = ` 
      <button id="close-btn"><i class="fa-solid fa-xmark"></i></button>
      <img class="mb-3" src=${img} alt="" />
      ${this.displayText(text)}
      <div class="contacts-container mt-3">
        ${this.displayContacts(contacts)}
      </div>`;
        const closeSide = document.getElementById("close-btn");
        closeSide.addEventListener("click", () => {
            sidebar.classList.remove("show-side");
        });
    }
    displayText(text) {
        const content = text.map((el) => `<p>${el}</p>`);
        return content.join("<br/>");
    }
    displayContacts(contacts) {
        const content = contacts.map(({ img, details }) => {
            return `
        <div class="contacts g-3 mt-3">
          <img src=${img} alt="logo"/>
          <p>${details[0]}<br /><span>${details[1]}</span></p>
        </div>`;
        });
        return content.join("");
    }
}
