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
