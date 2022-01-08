import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import PersonContext from './contexts/PersonContext';

@observer
class App extends React.Component {
  static contextType = PersonContext;

  render() {
    console.log('render');
    const personStore = this.context;

    return (
      <div className="App">
        <header className="App-header">
          <p>{personStore.age10}</p>
          <p>
            <button onClick={this.click}>plus</button>
          </p>
        </header>
      </div>
    );
  }

  // arrow function 아니므로 @autobind 처리
  @autobind
  click() {
    const personStore = this.context;
    personStore.plus();
  }
}

export default App;
