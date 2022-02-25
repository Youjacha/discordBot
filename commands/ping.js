const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("지연속도")
    .setDescription("기계장치의 지연속도를 표시합네다"),
    /**
     * @param {Client} client
     */
    async execute(interaction, client) {
        interaction.reply(`${client.ping} 밀리초입네다`)
    }
}