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
