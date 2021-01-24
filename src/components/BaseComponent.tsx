import React, {Component, CSSProperties} from "react";
import {Stores} from "@/app";
import {getSystemInfoSync} from "@tarojs/taro";
import {View} from "@tarojs/components";
import "./BaseComponent.less";
import {Logger} from "@/core/Logger";

// 基础组件属性结构
export interface BaseComponentProps {
  stores?: Stores,// mobx注入的stores
}

/**
 * 绝大部分的组件需要继承这个组件，此组件中初始化了一些通用的属性与方法，可在子类中调用
 */
export class BaseComponent<P extends BaseComponentProps = {}, S = {}> extends Component<P, S> {
  protected stores?: Stores;
  // 当前设备状态懒得高度
  protected statusBarHeight: number = 0;
  // 小程序标题栏的高度
  protected navBarHeight: number = 44;
  // 自定义标题栏时，需要向上偏移一定的位置，避免被标题栏或状态栏挡住内容，因此在此定义了一个css属性集合，可直接在页面的style中使用
  protected pagePaddingTopStyle: CSSProperties = {};
  // 日志示例
  protected logger: Logger;

  constructor(props: P, loggerNameSpace?: string) {
    super(props);
    this.stores = props.stores;
    this.logger = new Logger(loggerNameSpace);
  }

  componentWillMount() {
    const {
      statusBarHeight
    } = getSystemInfoSync();
    this.statusBarHeight = statusBarHeight;
    this.pagePaddingTopStyle = {
      paddingTop: statusBarHeight + this.navBarHeight
    };
  }

}

export class BaseComponentWrapper extends BaseComponent<BaseComponentProps, any> {
  render() {
    return (
      <View className='page-wrapper' style={this.pagePaddingTopStyle}>
        {this.props.children}
      </View>
    );
  }
}
