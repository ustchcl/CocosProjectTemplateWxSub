import { UserInfo, KVData, UserGameData } from "./Types";

export const selfOpenId = "selfOpenId";
export function getUserInfo(openId: string): Promise<UserInfo>;
export function getUserInfo(openIdList: string[]): Promise<UserInfo[]>;

/**
 * 子域直接获取用户信息，无需用户同意
 * @param oneOrMore 传入想要openId列表，或单个openId
 */
export function getUserInfo(
    oneOrMore: string | string[]
): Promise<UserInfo> | Promise<UserInfo[]> {
    return typeof oneOrMore === "string"
        ? new Promise<UserInfo>(function(resolve, reject) {
              wx.getUserInfo({
                  openIdList: [oneOrMore],
                  success: d => resolve(d.data[0]),
                  fail: reject
              });
          })
        : new Promise<UserInfo[]>(function(resolve, reject) {
              wx.getUserInfo({
                  openIdList: oneOrMore,
                  success: d => resolve(d.data),
                  fail: reject
              });
          });
}

/*******************************************/

export function getUserCloudStorage(key: string): Promise<KVData>;
export function getUserCloudStorage(keyList: string[]): Promise<KVData[]>;

/**
 * 获取当前用户托管数据当中对应 key 的数据。
 * @param oneOrMore key
 */
export function getUserCloudStorage(
    oneOrMore: string | string[]
): Promise<KVData> | Promise<KVData[]> {
    return typeof oneOrMore === "string"
        ? new Promise<KVData>(function(resolve, reject) {
              wx.getUserCloudStorage({
                  keyList: [oneOrMore],
                  success: d => resolve(d.KVDataList[0]),
                  fail: reject
              });
          })
        : new Promise<KVData[]>(function(resolve, reject) {
              wx.getUserCloudStorage({
                  keyList: oneOrMore,
                  success: d => resolve(d.KVDataList),
                  fail: reject
              });
          });
}

/**
 * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
 * @param KVDataList 要修改的 KV 数据列表
 */
export function setUserCloudStorage(KVDataList: KVData[]): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
        wx.setUserCloudStorage({
            KVDataList: KVDataList,
            success: d => resolve(d.KVDataList),
            fail: reject
        });
    });
}

export function removeUserCloudStorage(key: string): Promise<void>;
export function removeUserCloudStorage(keyList: string[]): Promise<void>;

/**
 * 删除用户托管数据当中对应 key 的数据。
 * @param oneOrMore key
 */
export function removeUserCloudStorage(
    oneOrMore: string | string[]
): Promise<void> {
    return typeof oneOrMore === "string"
        ? new Promise<void>(function(resolve, reject) {
              wx.removeUserCloudStorage({
                  keyList: [oneOrMore],
                  success: resolve,
                  fail: reject
              });
          })
        : new Promise<void>(function(resolve, reject) {
              wx.removeUserCloudStorage({
                  keyList: oneOrMore,
                  success: resolve,
                  fail: reject
              });
          });
}

export function getFriendCloudStorage(key: string): Promise<UserGameData>;
export function getFriendCloudStorage(
    keyList: string[]
): Promise<UserGameData[]>;

/**
 * 拉取当前用户所有同玩好友的托管数据。
 * @param oneOrMore key
 */
export function getFriendCloudStorage(
    oneOrMore: string | string[]
): Promise<UserGameData> | Promise<UserGameData[]> {
    return typeof oneOrMore === "string"
        ? new Promise<UserGameData>(function(resolve, reject) {
              wx.getFriendCloudStorage({
                  keyList: [oneOrMore],
                  success: d => resolve(d.data[0]),
                  fail: reject
              });
          })
        : new Promise<UserGameData[]>(function(resolve, reject) {
              wx.getFriendCloudStorage({
                  keyList: oneOrMore,
                  success: d => resolve(d.data),
                  fail: reject
              });
          });
}

export function getGroupCloudStorage(
    shareTicket: string,
    key: string
): Promise<UserGameData>;
export function getGroupCloudStorage(
    shareTicket: string,
    keyList: string[]
): Promise<UserGameData[]>;

/**
 * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。
 * @param shareTicket 群分享对应的 shareTicket
 * @param oneOrMore 要拉取的 key 列表
 */
export function getGroupCloudStorage(
    shareTicket: string,
    oneOrMore: string | string[]
): Promise<UserGameData> | Promise<UserGameData[]> {
    return typeof oneOrMore === "string"
        ? new Promise<UserGameData>(function(resolve, reject) {
              wx.getGroupCloudStorage({
                  shareTicket: shareTicket,
                  keyList: [oneOrMore],
                  success: d => resolve(d.data[0]),
                  fail: reject
              });
          })
        : new Promise<UserGameData[]>(function(resolve, reject) {
              wx.getGroupCloudStorage({
                  shareTicket: shareTicket,
                  keyList: oneOrMore,
                  success: d => resolve(d.data),
                  fail: reject
              });
          });
}
