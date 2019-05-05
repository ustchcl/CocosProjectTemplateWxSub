import { UserInfo } from "./Types";


export function getUserInfo(openId: string = "selfOpenId"): Promise<UserInfo> {
    return new Promise<UserInfo>(function(resolve, reject) {
        wx.getUserInfo({
            openIdList: [openId],
            success: d => resolve(d.data[0]),
            fail: reject,
        });
    });
}
