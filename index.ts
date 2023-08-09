import { type Serve } from "bun";
import { readdirSync } from "fs";

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
  fetch(req) {
    const files = readdirSync("images");
    const random = getRandom(0, files.length);
    const path = `images/${files[random]}`;
    const file = Bun.file(path);
    return new Response(file.stream());
  },
} satisfies Serve;
