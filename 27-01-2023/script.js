import { GET } from "./api.js";
import { qS, cE, movieCardGen } from "./utils.js";

const topRatedEl = qS(".top-rated");
const mostPopularEl = qS(".most-popular");

GET("movie", "top_rated").then((data) => console.log(data));

Promise.all([
  GET("movie", "top_rated"),
  GET("movie", "popular"),
  GET("movie", "upcoming"),
]).then((data) => {
  data[0].results.map((movie) => topRatedEl.append(movieCardGen(movie)));
  data[1].results.map((movie) => mostPopularEl.append(movieCardGen(movie)));
});
