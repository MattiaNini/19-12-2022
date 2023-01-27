const API_KEY = "3088ada7dc6d2bfefc4cb995827a10ff";
const BASE_URL = "https://api.themoviedb.org/3/";
//https://api.themoviedb.org/3/movie/550?api_key=3088ada7dc6d2bfefc4cb995827a10ff

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };
