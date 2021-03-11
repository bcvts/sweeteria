module.exports = {
    name: 'pass',
    aliases: ['pass', 'passer'],
    permissions: [],
    description: 'sends a passing DM!',
    execute(message, args, client, Discord){
        let targetUser = message.mentions.members.first()
            if(!targetUser){
                message.channel.send("User doesn't exist.")
            }
            const embed = new Discord.MessageEmbed()
            .setColor('#74B72E')
            .setTitle('Message From Sweeteria Staff')
            .setDescription(`Greetings, ${targetUser} \n \n On behalf of the Managing Department team, we would like to congratulate you on your promotion to **Staff Assistant** Please DM a member of staffing your time zone so we can note it down. It's my pleasure to successfully welcome you onto our team, if you have any questions don't fret to contact any available Managing Department team member. As a reminder, you must spectate at least one session to gain experience on how things go on. You'll be placed in trial mode till that happens. Only Supervisor+ can host. Once again, congratulations the team wishes you best of luck in your future. \n \n Signed by, \n **Managing Department**`)
            .setFooter('This message was sent from the Sweeteria High Rank Team and if you would like to validate the message please dm someone from Managing.')
            targetUser.user.send(embed)
            message.delete()
        }
    }

