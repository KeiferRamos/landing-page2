import { reviewsData } from "../data/reviews.js";
export class reviewsDisplay {
    constructor(domID) {
        this.domID = domID;
        this.current = 0;
    }
    format() {
        this.timer = window.setTimeout(() => {
            if (this.current >= reviewsData.length - 1) {
                this.current = 0;
            }
            else {
                this.current += 1;
            }
            this.format();
        }, 1500);
        const container = document.getElementById(this.domID);
        const { comments, name, position } = reviewsData[this.current];
        const content = `
        <div class="toggle-review g-1 p-2">
        ${reviewsData
            .map((el, i) => `<i id=${i.toString()} style="color: ${i == this.current ? "#000" : "#fff"}" class="fa-solid fa-circle"></i>`)
            .join("")}
        </div>
        <div class="review-container">
          <p>${comments}</p>
          <h3 class="author mt-3">${name}</h3>
          <p>${position}</p>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>`;
        container.innerHTML = content;
        this.toggleReviews();
    }
    toggleReviews() {
        const changeBtn = document.querySelectorAll(".fa-circle");
        changeBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                window.clearTimeout(this.timer);
                this.current = +btn.id;
                this.format();
            });
        });
    }
}
