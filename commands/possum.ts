import { SlashCommandBuilder } from "discord.js";
import { readdirSync } from "fs";

export default {
  data: new SlashCommandBuilder()
    .setName("possum")
    .setDescription("Replies with a cute possum!"),

  async execute(interaction: any) {
    const img = randomImg();
    await interaction.reply({
      files: [
        {
          attachment: img.stream(),
          name: img.name,
        },
      ],
    });
  },
};

function randomImg() {
  const path = "images";
  const dir = readdirSync(path);
  const files = dir.filter((file) => !file.startsWith("."));
  const random = randomInt(files.length);
  return Bun.file(`${path}/${files[random]}`);
}

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}
