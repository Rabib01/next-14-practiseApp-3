import getChuckJokes from "@/utils/getJokesAxiosCached";

export default async function RandJokeC() {
  const joke = await getChuckJokes();
  return <div className="mt-5">{joke.data.value}</div>;
}
