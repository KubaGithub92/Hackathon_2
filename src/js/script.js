import MainCard from "./MainCard";
import SmallCard from "./SmallCard";

// Creating feature cards
const featureEvent = new MainCard();

// Creating small event card
const smallEvent = new SmallCard();

const btnClose = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

const btnRegister = document.querySelector(".modal__button_register");

const sendData = async () => {
  const form = document.querySelector(".modal__form");
  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age-verification").value;
  const dataObject = {
    firstName,
    email,
    secondName,
    phone,
    age,
  };
  console.log(dataObject);
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/1485f022/events/1/registrations",
    {
      method: "POST",
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 200) {
    btnRegister.style.display = "none";
    form.insertAdjacentHTML("beforeend", `<p>You are registered</p>`);
  }
};

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  sendData();
});
