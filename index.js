import * as Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const discord_token = process.env.DISCORD_TOKEN
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(discord_token);
