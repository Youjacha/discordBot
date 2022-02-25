const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('로동자')
    .setDescription('혁명'),
	async execute(interaction) {
		await interaction.reply('혁명');
	},
}