export class serviceDisplay {
    constructor(service) {
        this.service = service;
    }
    format(id) {
        const container = document.querySelector(id);
        const content = this.service.map(({ img, details, title }) => {
            return `
        <div class="service p-3-1">
            <img src=${img} alt=""/>
            <div>
                <h1>${title}</h1>
                <p>${details}</p>
            </div>
        </div>`;
        });
        container.innerHTML = content.join("");
    }
}
