type Gender = "Unkown" | "Female" | "Male"

export function gender(g: 1 | 2 | 0): Gender {
    if (g == 0) {
        return "Unkown";
    } else if (g == 2) {
        return "Female"
    } else {
        return "Male"
    }
}

export interface UserInfo {
    openId: string;
    nickName: string;
    gender: 0 | 1 | 2;
    city: string;
    avatarUrl: string;
    country: string;
    unionId: string;
    watermark: {
        appid: string;
        timestamp: number;
    }
}

export type Unit = "Symbol_Unit";
export const unit: Unit = "Symbol_Unit";

export type Type<T, U> = {typeName: T, value: U};
export type TypeUnit<T> = Type<T, Unit>

export type KVData = {key: string, value: string};

export type UserGameData = {
    avatarUrl: string;  // 用户的微信头像 url
    nickname: string;   // 用户的微信昵称
    KVDataList: KVData [];  // 用户的托管 KV 数据列表
}
