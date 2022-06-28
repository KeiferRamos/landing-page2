export class HeaderDisplay {
    constructor(content) {
        this.content = content;
    }
    format(id) {
        const container = document.getElementById(id);
        container.innerHTML = `
        <h1>${this.content}</h1>
        <p class="home-link g-3 mt-2">
        <a href="./index.html">Homepage</a>
        <i class="fa-solid fa-arrow-right"></i>
        <span>${this.content}</span>`;
    }
}
