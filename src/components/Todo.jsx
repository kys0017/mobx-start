import { observer } from 'mobx-react';

export default observer(function Todo({ todos }) {
  if (todos.length === 0) {
    return (
      <div>
        <h1>할일이 없습니다.</h1>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
});
