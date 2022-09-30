export default class Modal {
  constructor() {
    this.element = document.createElement("div");
    this.createModal();
  }

  createModal() {
    this.element.classList.add(".modal");
    this.element.innerHTML = `<div class="modal">
      <div class="modal__button modal__button_close">
        <div></div>
        <div></div>
      </div>
      <h2 class="modal__heading">Register for featured event</h2>
      <p class="modal__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut
        numquam culpa delectus quod commodi a rerum ad expedita harum nobis
        nostrum in, quis odio modi, sunt dolorum. Ratione in vero quidem
        excepturi sequi quia laborum tenetur nostrum nobis, ipsa, enim aut ab
        rem maxime. Fuga adipisci at asperiores eaque.
      </p>
      <form class="modal__form">
        <div class="modal__input-container">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" required />
        </div>
        <div class="modal__input-container">
          <label for="second-name">Second Name</label>
          <input type="text" id="second-name" required />
        </div>
        <div class="modal__input-container">
          <label for="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div class="modal__input-container">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        <div class="modal__input-container">
          <label for="age-verification">I am old enough to participate</label>
          <input type="checkbox" id="age-verification" required />
        </div>

        <button class="modal__button modal__button_register">
          Click to send
        </button>
      </form>
    </div>`;

    this.form = this.element.querySelector(".modal__form");
    console.log(this.form);
    this.btnRegister = this.element.querySelector(".modal__button_register");
    this.btnClose = this.element.querySelector(".modal__button_close");
    console.log(this.btnClose);

    this.btnClose.addEventListener("click", () => {
      this.element.style.display = "none";
    });

    this.btnRegister.addEventListener("click", (e) => {
      e.preventDefault();

      this.sendData();
    });

    document.body.appendChild(this.element);
  }

  sendData = async () => {
    const firstName = document.getElementById("first-name").value;
    const secondName = document.getElementById("second-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age-verification").value;

    this.dataObject = {
      firstName,
      email,
      secondName,
      phone,
      age,
    };
    console.log(this.dataObject);
    const response = await fetch(
      "https://test-api.codingbootcamp.cz/api/1485f022/events/1/registrations",
      {
        method: "POST",
        body: JSON.stringify(this.dataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      this.btnRegister.style.display = "none";
      this.form.insertAdjacentHTML("beforeend", `<p>You are registered</p>`);
    }
  };
}
