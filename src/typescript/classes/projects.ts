export class displayProjects {
  constructor(private imgs: string[], private containerID: string) {}
  private timer: any = null;
  private screenWidth: number = window.innerWidth;

  resize() {
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
    });
  }

  format() {
    const container = document.getElementById(
      this.containerID
    ) as HTMLDivElement;
    const imgContent = [];

    for (var i = 0; i < (this.screenWidth <= 900 ? 1 : 3); i++) {
      imgContent.push(`<img src=${this.imgs[i]} />`);
    }

    this.timer = window.setTimeout(() => {
      let firstImg = this.imgs.shift()!;
      this.imgs.push(firstImg);
      this.format();
    }, 1800);

    container.innerHTML = imgContent.join("");
  }

  addEventListener(id: string) {
    const arrows = document.querySelectorAll(id) as NodeListOf<HTMLElement>;

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        window.clearTimeout(this.timer);
        if (arrow.classList.contains("fa-arrow-left")) {
          let firstImg = this.imgs.pop()!;
          this.imgs.unshift(firstImg);
          this.format();
        } else {
          let firstImg = this.imgs.shift()!;
          this.imgs.push(firstImg);
          this.format();
        }
      });
    });
  }
}
