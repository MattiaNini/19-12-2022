import { qS, cE, productCard } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

GET(2).then((data) => wrapperEl.appendChild(productCard(data)));
