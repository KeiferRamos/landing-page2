import { footerDisplay } from "./classes/footer.js";
import { HeaderDisplay } from "./classes/header.js";
import { navbarDisplay } from "./classes/navbar.js";
import { serviceDisplay, serviceInfoDisplay } from "./classes/service.js";
import { sidebarDisplay } from "./classes/sidebar.js";
import { headerData } from "./data/headerData.js";
import { traitsInfo } from "./data/service.js";
window.addEventListener("DOMContentLoaded", () => {
    new navbarDisplay().format("navbar");
    new sidebarDisplay().format(".sidebar");
    new footerDisplay().format("footer");
    new HeaderDisplay(headerData[1]).format("page-header");
    new serviceInfoDisplay().format("service-content");
    new serviceDisplay(traitsInfo).format(".traits");
});
