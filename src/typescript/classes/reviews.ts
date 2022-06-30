export class reviewsDisplay {
  format(id: string) {
    const container = document.getElementById(id) as HTMLDivElement;

    const content = `
        <div class="toggle-review g-1 p-2">
          <i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i
          ><i class="fa-solid fa-circle"></i>
        </div>
        <div class="review-container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            aperiam, impedit ab necessitatibus molestias eius commodi provident
            natus voluptate enim.
          </p>
          <h3 class="author mt-3">Marwa Youseeff</h3>
          <p>Private Tour Guide</p>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>`;

    container.innerHTML = content;
  }
}
