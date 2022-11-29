const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frack')
		.setDescription('Replies with frick!'),
	async execute(interaction) {
		await interaction.reply('frick!');
	},
};
