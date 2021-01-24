import { observable } from "mobx";


export interface UserStoreState {}

export const genUserStoreState = (): UserStoreState => {

  return {};
};

export class UserStore {

  @observable state: UserStoreState = genUserStoreState();

}

export default UserStore;
