import Modal from "./Modal";

export default class MainCard {
  constructor() {
    this.getData();
    this.element = document.createElement("div");
    this.modalWindow = document.querySelector(".modal");
    this.main = document.querySelector("main");
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
    this.element.classList.add("featured__container");
    this.element.innerHTML = `<div class="featured__container featured__container_left">
            <div class="featured__name">Featured event</div>
            <img
              class="featured__image"
              src="${this.data[0].image_url}"
              alt="event image"
            />
            <div class="featured__text">
              <h2 class="featured__text-heading">${this.data[0].name}</h2>
              <p class="featured__text-description">${this.data[0].description}</p>
            </div>
          </div>
          <button class="featured__register-btn">Register</button>
          `;
    const btnModalOPen = this.element.querySelector(".featured__register-btn");
    btnModalOPen.addEventListener("click", () => {
      this.main.classList.add("hidden");
      console.log(this.main);
      new Modal();
    });

    this.main.appendChild(this.element);
  };

  // displayModal() {
  //   // console.log(this);
  //   new Modal();
  // }
}
