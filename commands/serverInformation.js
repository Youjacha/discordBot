const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('봉사기정보')
	.setDescription('우리 봉사기의 여러 정보를 보여줍네다 !'),
	async execute(interaction) {
                const embed = new MessageEmbed()
                .setTitle(`${interaction.guild} 봉사기의 정보입네다`)
                .setFields({name: "수령동지", value: `<@${interaction.guild.ownerId}>`})
                .setFields({name: "봉사기인원", value: `${interaction.guild.memberCount}`})
                .setColor(0xFFFF00)
                .setFooter({name: "갱신 례정입네다"})

                await interaction.deferReply();
                interaction.reply({ embeds: [ embed ]})
	},
}