import Modal from "./Modal";

export default class SmallCard {
  constructor() {
    this.getData();
    this.element = document.createElement("div");
  }

  getData = async () => {
    try {
      let res = await fetch(
        "https://test-api.codingbootcamp.cz/api/1485f022/events"
      );
      const data = await res.json();
      console.log(data);
      this.data = data;

      this.renderEvent();
    } catch (err) {
      console.log(err);
    }
  };

  renderEvent = () => {
    for (let i = 1; i < this.data.length; i++) {
      this.element.classList.add("cards");
      this.element.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
          <h3>${this.data[i].name}</h3>
          <button>More</button>
        </div>
        `
      );
      this.btnMore = this.element.querySelector("button");
      this.btnMore.addEventListener("click", () => {
        new Modal();
      });
      document.body.appendChild(this.element);
    }
  };
}
