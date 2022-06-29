import { serviceInfoData } from "../data/individualservice.js";
export class servicePageDisplay {
    format() {
        const pageTitle = window.location.href
            .split("=")[1]
            .replace(new RegExp("%20", "g"), " ");
        const content = serviceInfoData.find(({ main }) => pageTitle == main);
        const { img, title, main, subheading, subtitle, details, qualities } = content;
        const container = document.getElementById("wrapper");
        container.innerHTML = ` 
        <header id="page-header" class="request-header p-3">
            <h1>${main}</h1>
            <p class="home-link g-3 mt-2">
            <a href="./index.html">Homepage</a>
            <i class="fa-solid fa-arrow-right"></i>
            <a href="./service.html">Our Service</a>
            <i class="fa-solid fa-arrow-right"></i>
            <span>${main}</span>
            </p>
        </header>

        <main class="main-content g-3 p-3-1 bg-lightgray">
            <img src=${img} />
            <header>
            <h2 class="mb-2 pb-2">${title}</h2>
            <p class="mt-2">${details}</p>
            <ul class="mt-2 mb-2">
                ${qualities
            .map((el) => {
            if (el) {
                return `
                    <li class="mb-1">
                        <i class="fa-solid fa-check"></i>
                        <span class="ml-2">${el}</span>
                    </li>`;
            }
            else {
                return "";
            }
        })
            .join("")}
            </ul>
            <a href="./qoute.html" class="btn btn-light p-1-3 mt-2"
                >GET A QOUTE NOW</a
            >
            </header>
        </main>

        <section class="service-header p-3">
        <header class="mt-3">
          <h2 class="mb-3 pb-1">
            ${subheading}
          </h2>
          <h4>
            ${subtitle}
          </h4>
        </header>
        <div class="traits mt-3"></div>
        <a href="./qoute.html" class="btn btn-light p-1-3">GET A QOUTE NOW</a>
      </section>`;
    }
}
