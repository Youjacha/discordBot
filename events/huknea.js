module.exports = {
	name: 'interactionCreate',
    on: true,
	execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '헋내') {
            interaction.reply('헋내')
            }
        } else {
            return;
        }
	},
};