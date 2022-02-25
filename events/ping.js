module.exports = {
	name: 'interactionCreate',
    on: true,
    
    async execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '지연속도') {
                interaction.reply({content: "과업중입네다"})
                await interaction.editReply(`${Math.floor(Math.random() * 14) + 128} 밀리초입네다`)
            }
        } else {
            return;
        }
	},
};