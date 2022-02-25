const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("투표")
    .setDescription("인민혁명의 중대사를 우리식으로 결정합네다")
    .addStringOption((optionName) => optionName.setName("투표제목").setDescription("인민혁명의 중대사의 리름을 입력합네다").setRequired(true))
    .addStringOption((option1) => option1.setName("선택지1").setDescription("인민혁명의 선택지 1을 만듭네다").setRequired(true))
    .addStringOption((option2) => option2.setName("선택지2").setDescription("인민혁명의 선택지 2을 만듭네다").setRequired(true))
    .addStringOption((option3) => option3.setName("선택지3").setDescription("인민혁명의 선택지 3을 만듭네다").setRequired(false))
    .addStringOption((option4) => option4.setName("선택지4").setDescription("인민혁명의 선택지 4을 만듭네다").setRequired(false)),
    async execute(interaction) {
        interaction.reply('socialism')
    }
}