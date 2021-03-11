const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] })
require("dotenv").config();
 

const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Codelyon is online!');
    client.user.setActivity("Sweeteria Utilitys")
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'suggest'){
        client.commands.get('suggest').execute(message, args, client, Discord);
    } else if (command === 'pass'){
        client.commands.get('pass').execute(message, args, client, Discord);
    } else if (command === 'terminate'){
        client.commands.get('terminate').execute(message, args, client, Discord);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args, client, Discord);
    } 
});

client.login('ODE5NjU0NDI3NDAwNzMyNjkz.YEpwqw.ykm09A1AaZ0vSjWa16rkQ-5dE3o');
