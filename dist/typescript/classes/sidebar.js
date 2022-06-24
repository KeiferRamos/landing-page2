export class sidebarDisplay {
    constructor(sidebarContent) {
        this.sidebarContent = sidebarContent;
    }
    format(div) {
        const { img, text, contacts } = this.sidebarContent;
        div.innerHTML = ` 
      <button id="close-btn"><i class="fa-solid fa-xmark"></i></button>
      <img class="mb-3" src=${img} alt="" />
      ${this.displayText(text)}
      <div class="contacts-container mt-3">
        ${this.displayContacts(contacts)}
      </div>`;
        const closeSide = document.getElementById("close-btn");
        closeSide.addEventListener("click", () => {
            div.classList.remove("show-side");
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
