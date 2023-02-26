import axios from "axios";
import * as dotenv from "dotenv";
import {UserInfoDto} from "../../../cyphers/dto/user-info.dto.js";

dotenv.config({
    path: '.env'
});
const api_key = process.env.CYPHERS_API_KEY;

export async function getUserId(userNickName){
    const { data } = await axios.get(`https://api.neople.co.kr/cy/players?nickname=${userNickName}&apikey=${api_key}`);
    if(!data){
        return null;
    }
    if(data.rows.length === 0){
        return null;
    }
    return data.rows[0].playerId;
}

export async function getUserDetailUserInfo(userId){
    const { data } = await axios.get(`https://api.neople.co.kr/cy/players/${userId}?apikey=${api_key}`);
    if(!data){
        return null;
    }
    return data;
}

export async function getMatchList(userId){
    const { data } = await axios.get(`https://api.neople.co.kr/cy/players/${userId}/matches?gameTypeId=normal&apikey=${api_key}`);
    if(!data){
        return null;
    }
    return data;
}
// (async()=>{
//     const userId = await getUserId("반ㅋ반ㅋ치ㅋ킨ㅋ");
//     if(!userId) return;
//
//     const userMatchInfo = await getMatchList(userId);
//     console.log(userMatchInfo.matches.rows)
//     console.log(userMatchInfo.matches.rows[0].playInfo.partyInfo)
// })()
// ((async () => {
//     const userId = await getUserId("반ㅋ반ㅋ치ㅋ킨ㅋ");
//     if(!userId) return;
//
//     const userDetailInfo = await getUserDetailUserInfo(userId);
//     if(!userDetailInfo) return;
//
//     // -- 일반, 공식을 나누어서 분석
//     // const normalWinCount = userDetailInfo.records.find(record => record.gameTypeId === 'normal').winCount;
//     // const normalLoseCount = userDetailInfo.records.find(record => record.gameTypeId === 'normal').loseCount;
//     // const normalWinRate = normalWinCount / (normalWinCount + normalLoseCount) * 100;
//     //
//     // const ratingWinCount = userDetailInfo.records.find(record => record.gameTypeId === 'rating').winCount;
//     // const ratingLoseCount = userDetailInfo.records.find(record => record.gameTypeId === 'rating').loseCount;
//     // const ratingWinRate = ratingWinCount / (ratingWinCount + ratingLoseCount) * 100;
//     //
//     // const totalWinCountExample2 = normalWinCount + ratingWinCount;
//     // const totalLoseCountExample2 = normalLoseCount + ratingLoseCount;
//     // const userWinRateExample2 = totalWinCountExample2 / (totalWinCountExample2 + totalLoseCountExample2) * 100;
//
//     // -- reduce를 이용한 분석
//     // const totalWinCountExample = userDetailInfo.records.reduce((acc,cur)=> acc += cur.winCount ,0)
//     // const totalLoseCountExample = userDetailInfo.records.reduce((acc,cur)=> acc += cur.loseCount ,0)
//     // const userWinRateExample = totalWinCountExample / (totalWinCountExample + totalLoseCountExample) * 100 ;
//
//     // -- 더 간단하게
//     const totalWinCount = userDetailInfo.records[0].winCount + userDetailInfo.records[1].winCount;
//     const totalLoseCount = userDetailInfo.records[0].loseCount + userDetailInfo.records[1].loseCount;
//     const userWinRate = totalWinCount / (totalWinCount + totalLoseCount) * 100 ;
//
//     const userInfo = new UserInfoDto(userId,userDetailInfo.nickname, userDetailInfo.grade, userDetailInfo.clanName)
//     userInfo.setWinLoseInfo(totalWinCount, totalLoseCount, userWinRate);
//
//
//
//
// })());

