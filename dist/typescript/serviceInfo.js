import { footerDisplay } from "./classes/footer.js";
import { navbarDisplay } from "./classes/navbar.js";
import { serviceDisplay } from "./classes/service.js";
import { servicePageDisplay } from "./classes/servicepage.js";
import { sidebarDisplay } from "./classes/sidebar.js";
import { serviceInfoData } from "./data/individualservice.js";
window.addEventListener("DOMContentLoaded", () => {
    const pageTitle = window.location.href
        .split("=")[1]
        .replace(new RegExp("%20", "g"), " ");
    console.log(pageTitle);
    const content = serviceInfoData.find(({ main }) => pageTitle == main);
    console.log(content);
    new navbarDisplay().format("navbar");
    new sidebarDisplay().format(".sidebar");
    new footerDisplay().format("footer");
    new servicePageDisplay().format();
    new serviceDisplay(content.features).format(".traits");
});
