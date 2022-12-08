const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, ButtonStyle, Events, ComponentType} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frick')
		.setDescription('button test'),
	async execute(interaction) {
	  
	  //create action row
	  const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('frick')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId('secondary')
				  .setLabel('frack')
				  .setStyle(ButtonStyle.Secondary),
			);
		
		// ask quesion w/ buttons

			const message = await interaction.reply({content: 'Wich one sounds better? ',ephemeral: true, components: [row]});
			console.log(interaction);
			
		// collect their response
		
		const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });

		collector.on('collect', async i => {
			
			// edit accordingly 
				await i.deferUpdate();
				switch(i.customId) {
					case 'primary':
						await i.editReply({ content: 'poggers', components: [] });
						break;
					case 'secondary':
						await i.editReply({ content: 'pogging', components: [] });
						break;
				}
				
			
		});
		
		collector.on('end', collected => console.log(`Collected ${collected.size} items`));
		
		
			
      
      
      
      
      	
		
	},
};
