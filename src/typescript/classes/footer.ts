import { socialMedias } from "../data/socialmedias.js";
import { info } from "../interfaces/info";

export class footerDisplay {
  constructor(private footerContent: info) {}

  format(id: string) {
    const container = document.getElementById(id) as HTMLElement;
    const { text, contacts } = this.footerContent;

    const content = `
        <div class="footer-content pt-2">
            <div class="footer-info">
                <h2 class="pb-2 mb-2">Banan Digital Agency !</h2>
                ${text.map((el) => `<p>${el}</p>`).join("")}
                <div class="social-medias g-3 pt-2 pb-1">
                    ${socialMedias
                      .map(({ path, img }) => {
                        return `<a href=${path}><img src=${img} /></a>`;
                      })
                      .join("")}
                </div>
            </div>
            <div class="service-link">
                
            </div>
            <div class="contacts g-3">
                ${contacts
                  .map(({ img, details }) => {
                    return `
                    <div class="g-3 pt-3">
                        <img src=${img} />
                        <p>${details[0]}<br /><span>${details[1]}</span></p>
                    </div>`;
                  })
                  .join("")}
            </div>
            <div class="footer-end mt-3">
                <p>Copyright © 2017 Banan Agency, All rights reserved.</p>
            </div>
        </div>`;

    container.innerHTML = content;
  }
}
