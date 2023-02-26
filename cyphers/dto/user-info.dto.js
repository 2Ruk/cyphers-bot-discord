export class UserInfoDto {
    constructor(userName, userGrade, userClanName) {
        this.userName = userName;
        this.userGrade = userGrade;
        this.userClanName = userClanName;
    }

    userName = '';
    userGrade = 0;
    userClanName = '';


    userWinCount = 0;
    userLoseCount = 0;
    userWinRate = 0;

    setAllUserInfo(userName, userGrade, clanName, userWinCount, userLoseCount, userWinRate) {
        this.userName = userName;
        this.userGrade = userGrade;
        this.userClanName = clanName;
        this.userWinCount = userWinCount;
        this.userLoseCount = userLoseCount;
        this.userWinRate = userWinRate;
    }

    setDefaultUserInfo(userName, userGrade, clanName){
        this.userName = userName;
        this.userGrade = userGrade;
        this.userClanName = clanName;
    }

    setWinLoseInfo(userWinCount, userLoseCount, userWinRate){
        this.userWinCount = userWinCount;
        this.userLoseCount = userLoseCount;
        this.userWinRate = userWinRate;
    }

    getUserInfo() {
        return {
            userName: this.userName,
            userGrade: this.userGrade,
            userClanName: this.userClanName,
            userWinCount: this.userWinCount,
            userLoseCount: this.userLoseCount,
            userWinRate: this.userWinRate
        }
    }
}
