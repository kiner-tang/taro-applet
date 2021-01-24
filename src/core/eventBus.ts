/**
 * 用于一些特殊场景下跨组件甚至跨页面的通信
 */

export type EventHandler = (...args: any[])=>any;

/**
 * 用于存放不同事件名下的事件队列
 */
const events: Record<string, EventHandler[]>= {};

/**
 * 绑定事件
 * @param eventName       事件名称
 * @param fn              回调函数
 */
export function $on(eventName: string, fn: EventHandler) {

  let event = events[eventName];

  if(event){
    event.push(fn);
  }else{
    event = [fn];
  }

  events[eventName] = event;

}

/**
 * 触发事件
 * @param eventName 触发的事件名
 * @param rest      剩余参数
 */
export function $emit(eventName: string, ...rest: any[]) {
  const event = events[eventName];

  event.forEach(fn => fn.apply(this, rest));
}
