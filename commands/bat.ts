import { SlashCommandBuilder } from "discord.js";
import { randomImg } from "./utils";

export default {
  data: new SlashCommandBuilder()
    .setName("bat")
    .setDescription("Replies with a cute bat!"),

  async execute(interaction: any) {
    const img = randomImg("images/bats");
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
