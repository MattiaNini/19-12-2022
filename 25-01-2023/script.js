//AVANZATO
import myJson from "./mock.json" assert { type: "json" };

const GET = async () => {
  const res = await myJson;
  return res;
};

const cE = (element) => document.createElement(element);

const qS = (type) => document.querySelector(type);

const genderStatusBarGen = (value, userAge) => {
  const wrapper = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");

  wrapper.className = "gender-status-bar";
  textEl.textContent = value;
  statusEl.className = "gender-status-bar__status";
  statusEl.style.height = `${userGender * 10}px`;

  statusEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  wrapper.append(textEl, statusEl);
  return wrapper;
};

const BASE_URL = "https://dummyjson.com/";
const wrapperEl = qS(".wrapper");
let firstStage;
let stagesCount = [];

GET("users?limit=100")
  .then(({ users }) => {
    const usersGender = users.map((user) => user.gender);

    firstStage = {
      gender: usersGender.filter((gender) => (gender = gender.male)),
    };
  })
  .then(() => {
    stagesCount.map((stage) =>
      wrapperEl.appendChild(genderStatusBarGen(stage.text, stage.gender.length))
    );
  });
