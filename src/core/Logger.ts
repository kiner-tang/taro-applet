const pkg = require("../../package.json");

/**
 * 日志类型
 */
export enum LoggerType {
  Log="LOG",
  Info="INFO",
  Warn="WARN",
  Error="ERROR"
}

/**
 * 全局日志类
 */
export class Logger {
  constructor(private namespace: string="全局日志") {

  }

  /**
   * 基础日志打印逻辑，正式环境打包不输出日志
   * @param logType     日志类型
   * @param args        要打印的日志参数
   */
  baseLog(logType: LoggerType, ...args: any[]){
    if(process.env.BUILD_ENV === "production") {
      return;
    }
    args.unshift(`[${pkg.description}(${pkg.name}): ${this.namespace}]<${logType}> `);
    switch (logType) {
      case LoggerType.Log:
        if(typeof args[1] === "string") {
          console.group(`${args[0]}${args[1]}`);
        }
        console.log.apply(console,args.splice(2));
        if(typeof args[1] === "string") {
          console.groupEnd();
        }
        break;
      case LoggerType.Info:
        if(typeof args[1] === "string") {
          console.group(`${args[0]}${args[1]}`);
        }
        console.info.apply(console,args.splice(2));
        if(typeof args[1] === "string") {
          console.groupEnd();
        }
        break;
      case LoggerType.Warn:
        if(typeof args[1] === "string") {
          console.group(`${args[0]}${args[1]}`);
        }
        console.warn.apply(console,args.splice(2));
        if(typeof args[1] === "string") {
          console.groupEnd();
        }
        break;
      case LoggerType.Error:
        if(typeof args[1] === "string") {
          console.group(`${args[0]}${args[1]}`);
        }
        console.error.apply(console,args.splice(2));
        if(typeof args[1] === "string") {
          console.groupEnd();
        }
        break;
    }
  }

  log(...args: any[]){
    this.baseLog(LoggerType.Log, ...args);
  }

  info(...args: any[]){
    this.baseLog(LoggerType.Info, ...args);
  }

  warn(...args: any[]){
    this.baseLog(LoggerType.Warn, ...args);
  }

  error(...args: any[]){
    this.baseLog(LoggerType.Error, ...args);
  }

}
