import { action, makeObservable, observable } from 'mobx';

export default class TodoStore {
  @observable
  todos = [];

  @action
  add(text) {
    this.todos.push({ text, done: false });
  }

  // makeObservable 잊지말고!
  constructor() {
    makeObservable(this);
  }
}
