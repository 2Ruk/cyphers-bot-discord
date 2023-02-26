import {UserInfoDto} from "../dto/user-info.dto.js";


export function cyphersController(command, param, msg) {

    if(command === '/전적'){
    }

    // TODO: 사이퍼즈 API 를 활용하여, 유저 정보를 가져온다.
    if(command === '/정보'){
        // 1. param이 뭔지 알아보기
        // 2. param을 유저가 입력한 값으로 세팅해주기
        // 3. axios 학습 w. 2Ruk
        const userInfo = new UserInfoDto('치킨', 11, '치킨 클랜');
        msg.reply(`닉네임: ${userInfo.userName} \n 랭크: ${userInfo.userGrade} \n 클랜: ${userInfo.userClanName}`);
    }
}
