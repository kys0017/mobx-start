import { inject, observer } from 'mobx-react';
import Todo from '../components/Todo';

const TodoContainer = ({ todoStore }) => {
  const todos = todoStore.todos;
  return <Todo todos={todos} />;
};

export default inject('todoStore')(observer(TodoContainer));
