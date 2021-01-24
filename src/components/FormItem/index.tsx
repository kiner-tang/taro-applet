import React, { Component, ReactNode } from "react";
import { View } from "@tarojs/components";
import "./index.less";
import { AtIcon } from "taro-ui";

export interface FormItemProps {
  preNode?: ReactNode,// 可用于显示一些前置图标，如账户或密码的图标
  afterNode?: ReactNode,// 可用于显示一些额外的元素，如验证码按钮
  clear?: boolean,// 是否显示清理按钮
  onClear?: () => void// 点击之后进行清空操作
}

export class FormItem extends Component<FormItemProps, any>{
  render() {
    return (
      <View className='form-item-container'>
        {this.props.preNode && (
          <View className='form-item-cell pre-cell'>
            {this.props.preNode}
          </View>
        )}
        <View className={`form-item-cell input-cell${this.props.afterNode?" min":""}`}>
          {this.props.children}
          {this.props.clear && (
            <AtIcon
              className='clear'
              value='close-circle'
              size={24}
              color='#FFC45F'
              onClick={() => {
                this.props.onClear && this.props.onClear();
              }}
            />
          )}
        </View>
        {this.props.afterNode && (
          <View className='form-item-cell after-cell'>
            {this.props.afterNode}
          </View>
        )}
      </View>
    );
  }
}
