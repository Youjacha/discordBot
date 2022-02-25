const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
    on: true,
	async execute(interaction) {

        let votesGlobal = {};

        let votedUser = []

        if (interaction.isCommand()) {
            const { commandName } = interaction;
            if(commandName === '투표') {

                let votes = {
                name: interaction.options.getString("투표제목"),
                answer1: interaction.options.getString("선택지1"),
                answer1_votes: 0,
                answer2: interaction.options.getString("선택지2"),
                answer2_votes: 0,
                answer3: interaction.options.getString("선택지3") ?? undefined, 
                answer3_votes: `${interaction.options.getString("선택지3")}` ? 0 : undefined,
                answer4: interaction.options.getString("선택지4") ?? undefined,
                answer4_votes: `${interaction.options.getString("선택지4")}` ? 0 : undefined,
                members: [],
                }

                votesGlobal = votes;

                let components = [];

                    for (let i = 1; i <= 4; i++) {
                        if(votesGlobal[`answer${i}`]) {
                            components.push(
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                    .setLabel(`${votes[`answer${i}`]} [${votes[`answer${i}_votes`]}]`)
                                    .setStyle("SECONDARY")
                                    .setCustomId(`answer${i}`)
                                )
                            );
                        }
                    }
                    
                    components.push(
                        new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('End')
                                .setStyle('DANGER')
                                .setCustomId('end')
                        )
                    )

                    const channel = await interaction.channel;
                    const message = await channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(votes.name)
                                .setAuthor({
                                    name: interaction.member.displayName, 
                                    iconURL: interaction.member.displayAvatarURL(),
                                    url: `https://discordapp.com/users/${interaction.user.id}/`
                                })
                        ],
                        components: components
                    });
                    interaction.reply({ content: '투표가 생성되었습네다 !', ephemeral: true });
                }
            } else if (interaction.isButton()) {
                if (interaction.customId.match(/(answer)([1234])/i)) {
                    user = await interaction.user.id
                    if(votedUser.includes(user)) {
                        interaction.reply("이미 투표하였습네다 !")
                    } else {
                        if(interaction.customId.match("answer1")) {
                            interaction

                            votedUser.push(interaction.user.id)
                            interaction.reply("투표하였습네다!")
                        }

                        if(interaction.customId.match("answer2")) {


                            votedUser.push(interaction.user.id)
                            interaction.reply("투표하였습네다!")
                        }

                        if(interaction.customId.match("answer3")) {
                            

                            votedUser.push(interaction.user.id)
                            interaction.reply("투표하였습네다!")
                        }

                        if(interaction.customId.match("answer4")) {
                            

                            votedUser.push(interaction.user.id)
                            interaction.reply("투표하였습네다!")
                        }

                    }
                } else if (interaction.customId.match(/end/)) {
                    if(interaction.member.permissions.has("ADMINISTRATOR")) {
                        let component = []
                        for (let j = 1; i <= 4; j++) {
                            if (votesGlobal[`answer${j}`] != undefined) {
                                component.push(
                                    new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setLabel(`${votesGlobal[`answer${i}`]} [0]`)
                                                .setStyle("PRIMARY")
                                                .setDisabled(true)
                                                .setCustomId(`answer${i}`)
                                    )
                                )
                            }

                            interaction.reply({
                                message: "투표 결과",
                                embeds: interaction.message.embeds,
                                components: component
                            }); 

                            console.log(`${interaction.user.tag} 동무가${interaction.channel.name} 에서 voteEnd 과업을 수행했습니다 ! / 결과: 성공 `)
                        }
                    } else {
                        const cant = await interaction.reply({
                        content: '동무는 투표를 종료할 수 없습네다 !', 
                        ephemeral: true 
                        })
                        console.log(`${interaction.user.tag} 동무가${interaction.channel.name} 에서 voteEnd 과업을 수행했습니다 ! / 결과: 실패(권력 부족) `)
                    }
                }

            } else {
                return;
            }
        
	}
}
