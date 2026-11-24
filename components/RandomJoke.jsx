import getChuckJokes from "@/utils/getJokesAxios";

export default async function RandJoke() {
  const joke = await getChuckJokes();
  return <div className="mt-5">{joke.data.value}</div>;
}
