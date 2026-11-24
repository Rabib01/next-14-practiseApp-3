import getChuckJokes from "@/utils/getJokes";

export async function GET() {
  const jokes = await getChuckJokes();
  return Response.json(jokes);
}
