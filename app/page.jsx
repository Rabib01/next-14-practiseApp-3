import getChuckJokes from "@/utils/getJokes";
import Image from "next/image";

export default async function Home() {
  const joke = await getChuckJokes();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <p className="text-4xl">Hello world! </p>
      <p className="text-4xl">{joke.value}</p>
    </div>
  );
}
