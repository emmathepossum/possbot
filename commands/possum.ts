import { SlashCommandBuilder } from "discord.js";
import { randomImg } from "./utils";

export default {
  data: new SlashCommandBuilder()
    .setName("possum")
    .setDescription("Replies with a cute possum!"),

  async execute(interaction: any) {
    const img = randomImg("images/possums");
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
