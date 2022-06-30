import { footerDisplay } from "./classes/footer.js";
import { navbarDisplay } from "./classes/navbar.js";
import { sidebarDisplay } from "./classes/sidebar.js";
import { headerData } from "./data/headerData.js";
import { HeaderDisplay } from "./classes/header.js";

window.addEventListener("DOMContentLoaded", () => {
  new navbarDisplay().format("navbar");
  new sidebarDisplay().format(".sidebar");
  new footerDisplay().format("footer");
  new HeaderDisplay(headerData[2]).format("page-header");
});
