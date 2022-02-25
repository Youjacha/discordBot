const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("숙청")
    .setDescription("반동분자를 숙청합네다")
    .addUserOption((option) => option.setName("인민").setDescription("숙청 대상을 지정합니다").setRequired(true)),
    async execute(interaction) {
       interaction.reply('아직안만듬 ㅎ')
    }
}