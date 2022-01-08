import PersonStore from './PersonStore';
import TodoStore from './TodoStore';

export default class RootStore {
  constructor() {
    // root store 는 하위 스토어의 가교역할
    // 각 스토어에 인자로 root 스토어의 인스턴스를 보내주면 각 스토어에서 다른 스토어에 접근 가능
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
  }
}
