// cache : "no-store" and revalidate  : 10s should not work with each other !
export default async function getChuckJokes() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
    // next: {
    //   revalidate: 10,
    // },
  });
  //   const response = await fetch("https://api.chucknorris.io/jokes/random");
  if (!response.ok) throw new Error("No JokeS Found");
  return response.json();
}
