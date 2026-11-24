"use client";

import { useEffect, useState } from "react";

export default function RandJokeClient() {
  const [joke, setJokes] = useState("");
  useEffect(() => {
    async function getJoke() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setJokes(data.value);
    }
  }, []);
  return (
    <div>
      <h1>{joke}</h1>
    </div>
  );
}
