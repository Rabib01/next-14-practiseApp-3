import RandJokeClient from "@/components/RandJokeClient";
import RandJoke from "@/components/RandomJoke";
import RandJokeC from "@/components/RandomJokeCachedThirdParty";
import getChuckJokes from "@/utils/getJokes";

import Image from "next/image";

export default async function Home() {
  const joke = await getChuckJokes();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <p className="text-4xl">Hello world! </p>
      <p className="text-4xl">{joke.value}</p>
      <h3 className="text-3xl">
        <RandJoke />
      </h3>
      <h3 className="text-3xl">
        <RandJokeC />
      </h3>
      <h3 className="text-3xl">
        <RandJokeClient />
        {/*  for this I need to turn this into a client component - no i fucking dont */}
      </h3>
    </div>
  );
}
