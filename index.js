import * as Discord from 'discord.js';
import dotenv from 'dotenv';
import {cyphersController} from "./cyphers/controller/cyphers.controller.js";
import {routeHelper} from "./common/helper/route.helper.js";
import {UserInfoDto} from "./cyphers/dto/user-info.dto.js";
import {getUserDetailUserInfo, getUserId} from "./common/api/test/test.js";
dotenv.config({
    path: '.env'
});

const discord_token = process.env.DISCORD_TOKEN
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    const userInput = msg.content;
    const [command,param] = userInput.split(' ');

    if(command === '/전적'){
        msg.reply('전적')
    }

    if(command === '/정보'){
        const userId = await getUserId(param);
        if(!userId) return;

        const userDetailInfo = await getUserDetailUserInfo(userId);
        if(!userDetailInfo) return;

        const totalWinCount = userDetailInfo.records[0].winCount + userDetailInfo.records[1].winCount;
        const totalLoseCount = userDetailInfo.records[0].loseCount + userDetailInfo.records[1].loseCount;
        const userWinRate = totalWinCount / (totalWinCount + totalLoseCount) * 100 ;

        const userInfo = new UserInfoDto(userId,userDetailInfo.nickname, userDetailInfo.grade, userDetailInfo.clanName)
        userInfo.setWinLoseInfo(totalWinCount, totalLoseCount, userWinRate);

        const embed = new Discord.MessageEmbed()
            .setTitle('사이퍼즈 전적')
            .setAuthor('치킨봇', 'https://resource.cyphers.co.kr/ui/img/comm/logo.png', 'https://discord.js.org')
            .setDescription('사이퍼즈 전적입니다.')
            .setThumbnail('https://resource.cyphers.co.kr/ui/img/comm/logo.png')
            .addFields(
                { name: '닉네임', value: userInfo.userName },
                { name: '랭크', value: userInfo.userGrade },
                { name: '클랜', value: userInfo.userClanName },
                { name: '승률', value: userInfo.userWinRate },
            )
            .setTimestamp()
            .setFooter('치킨봇', 'https://i.imgur.com/wSTFkRM.png');

        msg.reply(embed);

        // msg.reply(`닉네임: ${userInfo.userName} \n 랭크: ${userInfo.userGrade} \n 클랜: ${userInfo.userClanName} \n 승률: ${userInfo.userWinRate}`);

    }

});
// const {command,param,router} = routeHelper(msg);
// if (router==='cyphers') {
//     cyphersController(command, param,msg);
// }

client.login(discord_token);
