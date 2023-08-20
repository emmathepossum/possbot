import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js";
import possum from "./commands/possum";
import bat from "./commands/bat";

const { CLIENT_ID = "", DISCORD_TOKEN = "" } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.login(DISCORD_TOKEN);

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "possum") possum.execute(interaction);
  if (interaction.commandName === "bat") bat.execute(interaction);
});

const rest = new REST().setToken(DISCORD_TOKEN);

(async () => {
  try {
    const commands = [possum.data.toJSON(), bat.data.toJSON()];
    const data = (await rest.put(Routes.applicationCommands(CLIENT_ID), {
      body: commands,
    })) as any;
    console.log(`Successfully loaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
