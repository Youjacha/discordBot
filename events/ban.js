const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
    on: true,
	async execute(interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '숙청') {
                if(interaction.member.permissions.has("ADMINISTRATOR")) {
                    await interaction.deferReply();
                    return interaction.followUp({ content: "동무는 권력이 없습네다", ephemeral: true })
                }
            
                let user = interaction.options.getUser('인민');
                let member = interaction.guild.members.cache.get(user.id);

                if(!member) { 
                    await interaction.deferReply();
                    return interaction.followUp({ content: "숙청 대상자의 정보가 잘못되었습네다 !", ephemeral: true });
                }

                if(interaction.member.roles.highest.position <= member.roles.highest.position) {
                    await interaction.deferReply();
                    return interaction.followUp({ content: "숙청 대상자의 직급이 동무보다 같거나 높습네다 !", ephemeral: true });
                }
                const embed = new MessageEmbed()
                .setDescription("인민이 숙청되었습네다 !")
                .setColor('YELLOW')
                .setTimestamp()
            
                try {
                    await member.user.send(`동무는 **\`${interaction.guild.name}\`** 봉사기로부터 숙청당하셨습네다'`)
                    member.ban();
                    
                    await interaction.deferReply();
                    interaction.reply({ embeds: [ embed ]})
                    return interaction.reply({ embeds: [ embed ]})

                    } catch (error) {
                        console.log(error);
                        await interaction.deferReply();
                        return interaction.followUp({ content: `오류 발생: ${error}`, ephemeral: true })
                    }
            
            }
        } else {
            return;
        }
	},
};