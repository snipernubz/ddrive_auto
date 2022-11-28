const { REST, Routes } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: 'frick',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTAzOTc1MTM3NTU1NjQ1NjQ2OQ.G4neWQ.6OJgTcN1cFRittzw4bPDscqTncIBz4pb20d9y0');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1039751375556456469'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'frack') {
    await interaction.reply('Pong!');
  }
});

client.login('MTAzOTc1MTM3NTU1NjQ1NjQ2OQ.G4neWQ.6OJgTcN1cFRittzw4bPDscqTncIBz4pb20d9y0');
