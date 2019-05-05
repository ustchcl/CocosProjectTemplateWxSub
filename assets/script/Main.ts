import { getUserInfo } from "./base/BaseFunction";
import { Message } from "./Message";

/**
 * CopyRight  : (C) Chenglin Huang 2019
 * MainTainer : Chenglin Huang <ustchcl@gmail.com>
 */
const {ccclass, property} = cc._decorator;

@ccclass
export class Main extends cc.Component {
    @property(cc.Label)
    infoLabel: cc.Label = null;

    start () {
        if (typeof wx === "undefined") {
            return;
        }

        wx.onMessage(msg => {
            console.log(msg);
            this.eval(msg);
        });
    }


    async eval(msg: Message) {
        switch (msg.typeName) {
            case "ShowUserInfo": {
                this.infoLabel.string = JSON.stringify(await getUserInfo());
                break;
            }
            case "HideUserInfo": {
                this.infoLabel.string = "";
                break;
            }
        }
    }
}
