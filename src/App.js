import React from "react";
import "./App.css";
import PersonContainer from "./containers/PersonContainer";
import TodoContainer from "./containers/TodoContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContainer />
        <TodoFormContainer />
        <UserListContainer />
      </header>
    </div>
  );
}
export default App;
