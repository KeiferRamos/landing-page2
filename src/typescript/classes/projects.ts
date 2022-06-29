import { projectImgs } from "../data/projectImgs.js";

export class displayProjects {
  timer: any = null;
  count: number = 0;

  format(id: string) {
    const container = document.getElementById(id) as HTMLDivElement;
    const imgs = projectImgs;
    const imgContent = [];

    this.timer = window.setTimeout(() => {
      let firstImg = imgs.shift()!;
      imgs.push(firstImg);
      this.format("projects");
    }, 1800);

    for (var i = 0; i < 3; i++) {
      imgContent.push(`<img src=${imgs[i]} />`);
    }

    container.innerHTML = imgContent.join("");
  }

  next() {}
}
