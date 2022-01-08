import { action, computed, runInAction } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useContext } from 'react';
import './App.css';
import PersonContext from './contexts/PersonContext';

// store 를 props 로 받을 수 있는 것은
// mobx 가 여러개 store 를 받을 수 있도록 inject 와 Provider 가 설정되어있다.
function App({ personStore }) {
  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();

  console.log('render', personStore.age, personStore.name);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {personStore.age}, {personStore.name}
        </p>
        <p>
          <button onClick={click}>plus</button>
        </p>
      </header>
    </div>
  );

  function click() {
    // personStore.plus();

    // decorator 방법
    setTimeout(() => {
      personStore.testAction();
    }, 500);

    // runInAction 사용
    // setTimeout(() => {
    //   // runInAction() 은 함수 생성이 아니라 함수를 바로 실행하는 형태로 사용할 수 있다
    //   runInAction(() => {
    //     personStore.age = 45;
    //     personStore.name = 'Woong~';
    //   });
    // }, 500);

    // action 사용
    // setTimeout(
    //   action(() => {
    // action 함수를 setTimeout 의 콜백으로 넣어야 실행됨, 블럭안에서 실행하면 그냥 함수 생성만.
    //     // 한 꺼번에 렌더되서 값이 바뀜
    //     personStore.age = 45;
    //     personStore.name = 'Woong~';
    //   }),
    //   500
    // );

    // 그냥 setTimeout 했을 때
    // setTimeout(() => {
    //   // 두 번의 render 가 일어난다
    //     personStore.age = 45;
    //     personStore.name = 'Woong~';
    // }, 500)
  }
}
// Provider 의 props 로 지정해줬던 이름을 그대로 꺼내온다
export default inject('personStore')(observer(App));
