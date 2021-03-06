import { footerDisplay } from "./classes/footer.js";
import { displayContent } from "./classes/heroSection.js";
import { navbarDisplay } from "./classes/navbar.js";
import { displayProjects } from "./classes/projects.js";
import { reviewsDisplay } from "./classes/reviews.js";
import { serviceDisplay } from "./classes/service.js";
import { sidebarDisplay } from "./classes/sidebar.js";
import { customersImgs } from "./data/customersImgs.js";
import { hero } from "./data/heroSection.js";
import { projectImgs } from "./data/projectImgs.js";
import { expertise, serviceData } from "./data/service.js";
window.addEventListener("DOMContentLoaded", () => {
    const HeroContent = new displayContent(hero);
    HeroContent.format("container");
    HeroContent.setSelected();
    new navbarDisplay().format("navbar");
    new sidebarDisplay().format(".sidebar");
    new footerDisplay().format("footer");
    const displayServiceContent = new serviceDisplay(serviceData);
    displayServiceContent.format(".service-container");
    const displayExpertiseContent = new serviceDisplay(expertise);
    displayExpertiseContent.format(".expertise-container");
    const displayReviewsContent = new reviewsDisplay("reviews");
    displayReviewsContent.format();
    const displayProjectsContent = new displayProjects(projectImgs, "projects");
    displayProjectsContent.resize();
    displayProjectsContent.format();
    displayProjectsContent.addEventListener("#projects-btn");
    const displayCustomersContent = new displayProjects(customersImgs, "customers");
    displayCustomersContent.resize();
    displayCustomersContent.format();
    displayCustomersContent.addEventListener("#customers-btn");
});
