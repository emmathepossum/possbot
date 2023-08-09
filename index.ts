import { type Serve } from "bun";
import { readdirSync } from "fs";

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function randomImg() {
  const dir = readdirSync("images");
  const files = dir.filter((file) => !file.startsWith("."));
  const random = randomInt(files.length);
  const path = `images/${files[random]}`;
  return Bun.file(path);
}
const port = 3000;

export default {
  fetch(req) {
    return new Response(randomImg());
  },
  port,
} satisfies Serve;

console.log(`bun running on ${port}`);
