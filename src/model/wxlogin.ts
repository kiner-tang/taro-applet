import {
  login,
  setStorageSync
} from "@tarojs/taro";
import { wxCodeStorageKey } from "@/core/code";

/**
 * 用于调用微信的登录接口获取code与服务端交换数据
 */
export function doWxLogin() {

  return login({
    success: res => {
      if (res.code) {
        setStorageSync(wxCodeStorageKey, res.code);
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    }
  });

}
