const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('헋내')
    .setDescription('ㅇㅅㅇ?'),
	async execute(interaction) {
		await interaction.reply('헋내');
	},
}