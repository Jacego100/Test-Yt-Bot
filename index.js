const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';
const token = 'OTM2MDY5ODYwMzY5MjYwNjI0.YfH0_g.haeUuPmYRJKy95BCfgcGZ_0ByQ4';
const fs = require('fs');

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Test Yt Bot is Online!!!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(client, message, args);
    }
}); 

client.login(token);
