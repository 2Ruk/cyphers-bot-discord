import * as Discord from 'discord.js';
import dotenv from 'dotenv';
import {cyphersController} from "./cyphers/controller/cyphers.controller.js";
import {routeHelper} from "./common/helper/route.helper.js";
import {UserInfoDto} from "./cyphers/dto/user-info.dto.js";
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
    const [command,param] = userInput.split(' ');

    if(command === '/전적'){
        msg.reply('전적')


    }

    if(command === '/정보'){
        // 1. param이 뭔지 알아보기
        // 2. param을 유저가 입력한 값으로 세팅해주기
        // 3. axios 학습 w. 2Ruk
        const userInfo = new UserInfoDto('치킨', 11, '치킨 클랜');

        msg.reply(`닉네임: ${userInfo.userName} \n 랭크: ${userInfo.userGrade} \n 클랜: ${userInfo.userClanName}`);

    }

});

// const {command,param,router} = routeHelper(msg);
// if (router==='cyphers') {
//     cyphersController(command, param,msg);
// }

client.login(discord_token);
