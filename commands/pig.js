const { ActionRowBuilder, Events, StringSelectMenuBuilder, SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pig')
		.setDescription('select menu test'),
	async execute(interaction) {
        
        const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'pig',
							description: 'desc 1',
							value: 'frag',
						},
						{
							label: 'cig',
							description: 'desc 2',
							value: 'mag',
						},
					),
			);
        
        await intraction.reply({ content: 'Choose', components: [row] });
        console.log(interaction);

        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isStringSelectMenu()) return;
        
            const selected = interaction.values[0];
        
            if (selected === 'frag') {
                await interaction.update('u selected option 1 frag');
            } else if (selected === 'mag') {
                await interaction.update('u selecte option 2 mag');
            }
        });

    }
};