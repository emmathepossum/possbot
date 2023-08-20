import { readdirSync } from "fs";

export function randomImg(path: string) {
  const dir = readdirSync(path);
  const files = dir.filter((file) => !file.startsWith("."));
  const random = randomInt(files.length);
  return Bun.file(`${path}/${files[random]}`);
}

export function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}
