const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
    on: true,
	execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '계산기') {

                let component = []

                for (let i = 1; i <= 3; i++) {
                    component.push(
                        new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setLabel(i)
                            .setStyle("SECONDARY")
                            .setCustomId(i)
                        )
                    )
                }

                component.push

            }
        } else {
            return;
        }
	},
};