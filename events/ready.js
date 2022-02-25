const { Client } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	/**
	 * @param {Client} client 
	 */
	execute(client) {
		console.log(`과업 준비 완료 !`);
        client.user.setPresence({ activities: [{ name: '사회주의위업수행' }], status: 'online' })
	},
};