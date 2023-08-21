import { SlashCommandBuilder } from "discord.js";
import { randomImg } from "./utils";

export default {
  data: new SlashCommandBuilder()
    .setName("bunny")
    .setDescription("Replies with a cute bunny!"),

  async execute(interaction: any) {
    const img = randomImg("images/bunnies");
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
