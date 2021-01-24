import { config as devConfig } from "./development.config";
import { config as testingConfig } from "./testing.config";
import { config as productionConfig } from "./production.config";

/**
 * 基础配置结构
 */
export interface Config {
  baseUrl: string,// 结构请求的基础url
  globalErrorTips: string,// 全局通用提示

  [key: string]: any,
}

// 根据环境变量中的环境选取不同的环境配置
const config: Config = {
  ...(process.env.BUILD_ENV === "development" ? devConfig : process.env.BUILD_ENV === "testing" ? testingConfig : productionConfig)
};


export default config;
