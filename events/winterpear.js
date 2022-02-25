module.exports = {
	name: 'interactionCreate',
    on: true,
	execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '겨울배') {
            interaction.reply('얘 ! 겨울배가 맛있단다 ! 배가 달아 !')
            }
        } else {
            return;
        }
	},
};