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
    gender: Gender;
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

