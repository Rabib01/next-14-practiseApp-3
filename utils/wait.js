export default async function wait(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
