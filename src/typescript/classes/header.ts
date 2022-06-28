export class HeaderDisplay {
  constructor(private content: string) {}

  format(id: string) {
    const container = document.getElementById(id) as HTMLElement;

    container.innerHTML = `
        <h1>${this.content}</h1>
        <p class="home-link g-3 mt-2">
        <a href="./index.html">Homepage</a>
        <i class="fa-solid fa-arrow-right"></i>
        <span>${this.content}</span>`;
  }
}
