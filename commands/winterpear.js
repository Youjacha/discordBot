const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('겨울배')
    .setDescription('단거'),
	async execute(interaction) {
		await interaction.reply('얘 ! 겨울배가 맛있단다 ! 배가 달어 !');
	},
}