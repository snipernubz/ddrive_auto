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

			await interaction.reply({content: 'Wich one sounds better? ',ephemeral: true, components: [row]});
			
			
			// collect their response

			 const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });

collector.on('collect', i => {
	if (i.user.id === interaction.user.id) {
		i.reply(`${i.user.id} clicked on the ${i.customId} button.`);
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} interactions.`);
});
      
      
      // edit messsage accordingly 
      
      
      	
		
	},
};
