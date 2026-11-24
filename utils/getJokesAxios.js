import axios from "axios";

// cache : "no-store" and revalidate  : 10s should not work with each other !
export default async function getChuckJokes() {
  return axios.get("https://api.chucknorris.io/jokes/random");
}
