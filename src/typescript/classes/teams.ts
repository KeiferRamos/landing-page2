import { members } from "../data/members.js";

export class displayTeams {
  format() {
    const container = document.getElementById("teams") as HTMLDivElement;

    const content = members
      .map(({ name, position, img }) => {
        return ` 
        <div class="member">
            <img src=${img} alt="" />
            <h3>${name}</h3>
            <h4>${position}</h4>
        </div>`;
      })
      .join("");

    container.innerHTML = content;
  }
}
