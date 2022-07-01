import { serviceData } from "../data/service.js";
import { service } from "../data/serviceInfo.js";
import { serviceInfo } from "../interfaces/heroSection";

export class serviceDisplay {
  constructor(private service: serviceInfo[]) {}

  format(id: string) {
    const container = document.querySelector(id) as HTMLElement;

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

export class serviceInfoDisplay {
  format(id: string) {
    const container = document.getElementById(id) as HTMLElement;

    const content = service
      .map(({ img, title, details, bg }) => {
        return `
        <div class="${`bg-${bg}`} p-3">
          <img src=${img} />
          <h3>${title}</h3>
          <p>${details}</p>
          <a href="./serviceInfo.html?title=${title}">
            ${title}&nbsp; 
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>`;
      })
      .join("");

    container.innerHTML = content;
  }
}

export class aboutpageService {
  current: number = 0;
  constructor(private divID: string) {}

  format() {
    const container = document.getElementById(this.divID) as HTMLElement;
    const { img, title, details, path } = serviceData[this.current];

    const content = `
      <div class="next-btn g-2">
       ${this.changeDisplay()}
      </div>
      <div class="content g-3 p-1">
        <header>
          <h2 style="color: #fff" class="pb-2 mb-2">${title}</h2>
          <p>${details}</p>
          <a href=${path} class="btn btn-dark mt-3 p-1-3">READ MORE</a>
        </header>
        <img src=${img} alt=""/>
      </div>`;

    container.innerHTML = content;
    this.addEventListener();
  }

  addEventListener() {
    const container = document.getElementById(this.divID) as HTMLElement;

    container.querySelectorAll("i").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.current = +btn.id;
        this.format();
      });
    });
  }

  changeDisplay() {
    return serviceData
      .map((el, i) => {
        return `<i id=${i} style="color: ${
          i == this.current ? "#000" : "#fff"
        }" class="fa-solid fa-circle"></i>`;
      })
      .join("");
  }
}
