import React, { Component } from "react";
import { Provider } from "mobx-react";
import "taro-ui/dist/style/index.scss";
import UserStore from "./store/user";
import "./app.less";

export interface Stores {
  userStore: UserStore
}

export const stores: Stores = {
  userStore: new UserStore(),
};

export interface AppState {}

class App extends Component<any, AppState> {

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <Provider stores={stores}>
        { this.props.children }
      </Provider>
    );
  }
}

export default App;
