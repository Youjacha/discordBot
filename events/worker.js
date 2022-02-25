module.exports = {
	name: 'interactionCreate',
    on: true,
	execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '로동자') {
            interaction.reply('혁명')
            }
        } else {
            return;
        }
	},
};