import { action, computed, makeObservable, observable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Mark';

  @observable
  age = 39;

  // age 에 @observable 이 달려있으므로 이 함수도 @observable 로 된 것으로 생각하면 된다
  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  // 생성자에서 꼭 makeObservable 을 해줘야 함
  constructor(rootStore) {
    makeObservable(this);

    this.rootStore = rootStore;
  }

  @action
  plus() {
    this.age++;
    this.rootStore.todoStore.todos = [];
  }

  @action
  // observable 한 항목을 변경할 떄는 @action 을 달아야 한다.
  // @action 을 달지 않아도 변경은 됨(그러나 warning 뜸)
  testAction() {
    this.age = 45;
    this.name = 'Woong~';
  }
}
