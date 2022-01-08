import autobind from 'autobind-decorator';
import React from 'react';

export default class Button extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.click = this.click.bind(this);
  // }

  render() {
    return <button onClick={this.click}>버튼</button>;
  }

  // method(not arrow function) 는 constructor 에서 this 바인드 작업 해줘야 함.
  // 그러나 autobind 가 그 역할을 해줌
  @autobind
  click() {
    console.log('clicked');
  }
}
