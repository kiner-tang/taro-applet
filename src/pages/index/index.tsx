import React from 'react';
import {BaseComponent, BaseComponentProps, BaseComponentWrapper} from "@/components/BaseComponent";
import {
  View
} from "@tarojs/components";
import "./index.less";

export interface HomeProps extends BaseComponentProps{

}

export interface HomeState {

}

export default class Home extends BaseComponent<HomeProps, HomeState>{
  constructor(props: HomeProps) {
    super(props, "首页");

    this.state = {};
  }

  render(){
    return <BaseComponentWrapper>
      <View className='index-container' onClick={() => {
        this.logger.log('点击了首页按钮', {name: 'kiner'}, 5);
        this.logger.info('点击了首页按钮', {name: 'kiner'}, 5);
        this.logger.warn('点击了首页按钮', {name: 'kiner'}, 5);
        this.logger.error('点击了首页按钮', {name: 'kiner'}, 5);
      }}
      >
        首页
      </View>
    </BaseComponentWrapper>;
  }
}
