import getChuckJokes from "@/utils/getJokes";

export default async function RandJoke() {
  const joke = await getChuckJokes();
  return <div className="mt-5">{joke.value}</div>;
}
