import { projectImgs } from "../data/projectImgs.js";
export class displayProjects {
    constructor() {
        this.timer = null;
        this.count = 0;
    }
    format(id) {
        const container = document.getElementById(id);
        const imgs = projectImgs;
        const imgContent = [];
        this.timer = window.setTimeout(() => {
            let firstImg = imgs.shift();
            imgs.push(firstImg);
            this.format("projects");
        }, 1800);
        for (var i = 0; i < 3; i++) {
            imgContent.push(`<img src=${imgs[i]} />`);
        }
        container.innerHTML = imgContent.join("");
    }
    next() { }
}
