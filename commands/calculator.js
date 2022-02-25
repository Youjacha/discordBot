const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('계산기')
		.setDescription('계산과업을 도와줍네다'),
	async execute(interaction) {
		await interaction.reply('계산기');
	},
}