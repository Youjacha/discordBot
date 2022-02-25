const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
    on: true,
	async execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if (commandName === '봉사기정보') {
                const embed = new MessageEmbed()
                    .setTitle(`${interaction.guild} 봉사기의 정보입네다`)
                    .setFields (
                        {name: "수령동지", value: `<@${interaction.guild.ownerId}>`},
                        {name: "봉사기인원", value: `${interaction.guild.memberCount}`}
                        )
                    .setColor(0xFFFF00)

                interaction.reply({ embeds: [ embed ]})
            }
        } else {
            return;
        }
	},
};