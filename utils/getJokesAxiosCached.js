import axios from "axios";
import { unstable_cache } from "next/cache";
import { cache } from "react";

const getJoke = unstable_cache(async () => {
  return axios.get("https://api.chucknorris.io/jokes/random");
});

export default getJoke;
