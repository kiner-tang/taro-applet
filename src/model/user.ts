import {
  BaseModel,
  // BaseResponseDataStruct
} from "@/core/api";
import config from "../config";
// import {userInfoStorageKey, wxCodeStorageKey} from "../core/code";
// import Taro from "@tarojs/taro";
// import {$emit} from "../inner/eventBus";

// const {
//   getStorageSync,
//   setStorageSync
// } = Taro;


export class UserModel extends BaseModel {
  constructor() {
    super(config.baseUrl);
  }

}
