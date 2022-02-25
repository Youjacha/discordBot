module.exports = {
	name: 'interactionCreate',
    on: true,
	execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '사회주의') {
            interaction.reply('위업수행')
            }
        } else {
            return;
        }
	},
};