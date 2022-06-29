export class displayContent {
    constructor(content) {
        this.content = content;
        this.currentDisplay = 0;
        this.timer = null;
        this.displayContent = this.content[this.currentDisplay];
    }
    format(id) {
        const container = document.getElementById(id);
        const { details, title, img } = this.displayContent;
        this.timer = window.setTimeout(() => {
            if (this.currentDisplay >= this.content.length - 1) {
                this.currentDisplay = 0;
            }
            else {
                this.currentDisplay = this.currentDisplay += 1;
            }
            this.displayContent = this.content[this.currentDisplay];
            this.format("container");
        }, 1700);
        container.innerHTML = `
        <header>
            <h1 class="mb-2">${title}</h1>
            <p>${details}</p>
            <button>Know More</button>
        </header>
        <div class="img-container">
          <img src=${img} alt="">
        </div>
        <div class="next-btn">
          ${this.setSelectionnum()}
        </div>`;
        const heroBtns = document.querySelectorAll("#hero-btn");
        heroBtns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                clearTimeout(this.timer);
                this.currentDisplay = i;
                this.displayContent = this.content[this.currentDisplay];
                this.format("container");
            });
        });
        this.setBackground();
    }
    setBackground() {
        const container = document.querySelector(".hero-section");
        this.content.forEach(({ bgColor }) => container.classList.remove(`bg-${bgColor}`));
        container.classList.add(`bg-${this.content[this.currentDisplay].bgColor}`);
    }
    setSelectionnum() {
        const content = this.content.map(({ title, bgColor }, i) => {
            return `
        <div id="hero-btn" class="g-2 p-3 bg-${bgColor}">
          <p class="title">${title}</p>
          <h1>${i + 1}</h1>
        </div>`;
        });
        return content.join("");
    }
    setSelected() {
        const arrows = document.querySelectorAll("#arrow");
        arrows.forEach((arrow) => {
            arrow.addEventListener("click", (e) => {
                clearTimeout(this.timer);
                const className = e.target.classList;
                if (className.contains("fa-arrow-right")) {
                    if (this.currentDisplay >= this.content.length - 1) {
                        this.currentDisplay = 0;
                    }
                    else {
                        this.currentDisplay += 1;
                    }
                }
                else if (className.contains("fa-arrow-left")) {
                    if (this.currentDisplay <= 0) {
                        this.currentDisplay = this.content.length - 1;
                    }
                    else {
                        this.currentDisplay -= 1;
                    }
                }
                this.displayContent = this.content[this.currentDisplay];
                this.format("container");
            });
        });
    }
}
