module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		const { commandName } = interaction;
		console.log(`${interaction.user.tag} 동무가 ${interaction.channel.name} 에서 ${commandName} 과업을 수행했습네다 !`);
	},
};