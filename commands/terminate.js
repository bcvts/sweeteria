module.exports = {
    name: 'terminate',
    aliases: ['terminate', 'demote'],
    permissions: [],
    description: 'sends a termination DM!',
    execute(message, args, client, Discord){
        let targetUser = message.mentions.members.first()
            if(!targetUser){
                message.channel.send("User doesn't exist.")
            }
            const embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Termination Notice')
            .setDescription(`Greetings, ${targetUser} \n \n `)
            .setFooter('This message was sent from the Sweeteria High Rank Team and if you would like to validate the message please dm someone from Managing.')
            targetUser.user.send(embed)
            message.delete()
        }
    }
