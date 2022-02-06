const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("사회주의")
    .setDescription("위업수행"),
  async execute(interaction) {
    await interaction.reply("위업수행");
  },
};