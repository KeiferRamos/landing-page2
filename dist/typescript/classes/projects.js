export class displayProjects {
    constructor(imgs, containerID) {
        this.imgs = imgs;
        this.containerID = containerID;
        this.timer = null;
        this.screenWidth = window.innerWidth;
    }
    resize() {
        window.addEventListener("resize", () => {
            this.screenWidth = window.innerWidth;
        });
    }
    format() {
        const container = document.getElementById(this.containerID);
        const imgContent = [];
        for (var i = 0; i < (this.screenWidth <= 900 ? 1 : 3); i++) {
            imgContent.push(`<img src=${this.imgs[i]} />`);
        }
        this.timer = window.setTimeout(() => {
            let firstImg = this.imgs.shift();
            this.imgs.push(firstImg);
            this.format();
        }, 1800);
        container.innerHTML = imgContent.join("");
    }
    addEventListener(id) {
        const arrows = document.querySelectorAll(id);
        arrows.forEach((arrow) => {
            arrow.addEventListener("click", () => {
                window.clearTimeout(this.timer);
                if (arrow.classList.contains("fa-arrow-left")) {
                    let firstImg = this.imgs.pop();
                    this.imgs.unshift(firstImg);
                    this.format();
                }
                else {
                    let firstImg = this.imgs.shift();
                    this.imgs.push(firstImg);
                    this.format();
                }
            });
        });
    }
}
