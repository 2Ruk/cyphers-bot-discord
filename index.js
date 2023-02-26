import * as Discord from 'discord.js';
import dotenv from 'dotenv';
import {cyphersController} from "./cyphers/controller/cyphers.controller.js";
import {routeHelper} from "./common/helper/route.helper.js";
dotenv.config({
    path: '.env'
});

const discord_token = process.env.DISCORD_TOKEN
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const userInput = msg.content;
    if(userInput.includes('/전적')){
        msg.reply('전적')
    }

    if(userInput.includes('/정보')){
        msg.reply('정보')
    }

});

// const {command,param,router} = routeHelper(msg);
// if (router==='cyphers') {
//     cyphersController(command, param,msg);
// }

client.login(discord_token);
