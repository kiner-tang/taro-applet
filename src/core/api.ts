import Taro from "@tarojs/taro";
import config from "../config";
import { BusinessCode } from "./code";

const { showLoading, request, showToast, hideLoading } = Taro;

/** HTTP 请求方法 */
interface method {
  /** HTTP 请求 OPTIONS */
  OPTIONS
  /** HTTP 请求 GET */
  GET
  /** HTTP 请求 HEAD */
  HEAD
  /** HTTP 请求 POST */
  POST
  /** HTTP 请求 PUT */
  PUT
  /** HTTP 请求 DELETE */
  DELETE
  /** HTTP 请求 TRACE */
  TRACE
  /** HTTP 请求 CONNECT */
  CONNECT
}

/**
 * BaseModel的基础参数
 */
export interface BaseModelSendOption {
  action: string,// 请求接口除去baseUrl和参数部分
  method?: keyof method,// 请求方法，可选，默认为GET
  data: Record<string, any>,// 参数集
  headers: Record<string, any>,// 设置请求头
  isShowLoading: boolean,// 请求时是否要显示loading,默认为false
  isShowErrorTips: boolean// 请求失败时是否显示错误提示，默认为true
}

/**
 * 接口通用返回结构
 */
export interface BaseResponseDataStruct {
  retcode: number,
  retmsg: string,
}

export class BaseModel {
  /**
   * 初始化时指定接口请求的baseUrl
   * @param baseUrl
   */
  constructor(private baseUrl: string) {
  }

  /**
   * 基础请求方法
   * @param options
   */
  protected async send<T extends BaseResponseDataStruct>(options: Partial<BaseModelSendOption>): Promise<T | null> {
    if (options.isShowLoading) {
      await showLoading();
    }

    try {
      const ret = await request<T>({
        url: this.baseUrl + options.action,
        data: options.data,
        header: options.headers,
        method: options.method || "GET"
      });
      hideLoading();

      if (ret.statusCode === 200) {
        const {
          retcode,
          retmsg
        } = ret.data;

        if (retcode === BusinessCode.requestSuccess) {
          return ret.data;
        } else {
          if (options.isShowErrorTips!==false) {
            await showToast({
              title: retmsg,
              icon: "none"
            });
          }
          return ret.data;
        }

      } else {
        if (options.isShowErrorTips!==false) {
          await showToast({
            title: ret.errMsg,
            icon: "none"
          });
        }
        return null;
      }
    } catch (e) {
      hideLoading();
      if (options.isShowErrorTips!==false) {
        await showToast({
          title: config.globalErrorTips,
          icon: "none"
        });
      }
      throw e;
    }
  }

  /**
   * 使用get方式请求
   * @param options
   */
  protected async get<T extends BaseResponseDataStruct>(options: Partial<BaseModelSendOption>): Promise<T|null> {
    return this.send<T>({
      ...options,
      method: "GET"
    });
  }

  /**
   * 使用post方式请求
   * @param options
   */
  protected async post<T extends BaseResponseDataStruct>(options: Partial<BaseModelSendOption>): Promise<T|null> {
    return this.send<T>({
      ...options,
      method: "POST"
    });
  }
}
