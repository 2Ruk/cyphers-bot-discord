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
    const {command,param,router} = routeHelper(msg);

    if (router==='cyphers') {
        cyphersController(command, param,msg);
    }

    if(router =='default'){
        msg.reply('안녕하세요! 현재 개발중인 봇입니다. \n 개발자: @치킨#7777');
    }
});


client.login(discord_token);
